import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { QrCode, Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import QRCode from 'qrcode';
import { submitToGoogleAppsScript } from '@/lib/googleForm';

interface PaymentFlowProps {
  userDetails: {
    fullName: string;
    email: string;
    phone: string;
    college: string;
    year: string;
    ieeeId?: string;
  };
  selectedPass: {
    id: string;
    name: string;
    price: number;
  };
  selectedCategory: {
    id: string;
    name: string;
  };
  onPaymentComplete: () => void;
  onBack: () => void;
}

interface PaymentData {
  amount: number;
  upiId: string;
  merchantName: string;
  transactionId: string;
}

const PaymentFlow = ({
  userDetails,
  selectedPass,
  selectedCategory,
  onPaymentComplete,
  onBack
}: PaymentFlowProps) => {
  const [currentStep, setCurrentStep] = useState<'qr' | 'upload' | 'submitting'>('qr');
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [paymentScreenshot, setPaymentScreenshot] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const generateQRCode = useCallback(async () => {
    try {
      const paymentData: PaymentData = {
        amount: selectedPass.price,
        upiId: process.env.VITE_UPI_ID || 'cyberpac@paytm',
        merchantName: 'Cyber PAC iFest 25',
        transactionId: `TXN${Date.now()}${Math.random().toString(36).substr(2, 5).toUpperCase()}`
      };

      // Create UPI payment string
      const upiString = `upi://pay?pa=${paymentData.upiId}&pn=${encodeURIComponent(paymentData.merchantName)}&am=${paymentData.amount}&cu=INR&tn=${encodeURIComponent(`Payment for ${selectedPass.name} - ${userDetails.fullName}`)}&tr=${paymentData.transactionId}`;

      // Generate QR code
      const qrCodeDataURL = await QRCode.toDataURL(upiString, {
        width: 300,
        margin: 2,
        color: {
          dark: '#00FFFF', // neon-cyan
          light: '#000000' // void-black
        }
      });

      setQrCodeUrl(qrCodeDataURL);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  }, [selectedPass.price, userDetails.fullName, selectedPass.name]);

  // Generate QR code when component mounts
  useEffect(() => {
    generateQRCode();
  }, [generateQRCode]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setSubmitError('Please upload an image file (JPG, PNG, etc.)');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setSubmitError('File size must be less than 5MB');
        return;
      }

      setPaymentScreenshot(file);
      setSubmitError('');
    }
  };

  const handleSubmitPayment = async () => {
    if (!paymentScreenshot) {
      setSubmitError('Please upload payment screenshot');
      return;
    }

    setIsSubmitting(true);
    setCurrentStep('submitting');
    setSubmitError('');

    try {
      // Convert image to base64
      const base64Image = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(paymentScreenshot);
      });

      // Submit to Google Form using our utility
      await submitToGoogleAppsScript({
        fullName: userDetails.fullName,
        email: userDetails.email,
        phone: userDetails.phone,
        college: userDetails.college,
        year: userDetails.year,
        category: selectedCategory.name,
        passType: selectedPass.name,
        amount: selectedPass.price,
        ieeeId: userDetails.ieeeId,
        paymentScreenshot: base64Image,
        submissionTime: new Date().toISOString()
      });

      // Also submit to our backend for backup
      // try {
      //   const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
      //   await fetch(`${API_BASE}/payments/submit`, {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //       userDetails: {
      //         fullName: userDetails.fullName,
      //         email: userDetails.email,
      //         phone: userDetails.phone,
      //         college: userDetails.college,
      //         year: userDetails.year,
      //         ieeeId: userDetails.ieeeId
      //       },
      //       selectedPass: {
      //         id: selectedPass.id,
      //         name: selectedPass.name,
      //         price: selectedPass.price
      //       },
      //       selectedCategory: {
      //         id: selectedCategory.id,
      //         name: selectedCategory.name
      //       },
      //       paymentScreenshot: base64Image,
      //       timestamp: new Date().toISOString()
      //     })
      //   });
      // } catch (backendError) {
      //   console.warn('Backend submission failed (non-blocking):', backendError);
      //   // Don't fail the payment flow if backend submission fails
      // }

      // Payment completed successfully
      setTimeout(() => {
        onPaymentComplete();
      }, 2000);

    } catch (error: unknown) {
      console.error('Payment submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit payment. Please try again.';
      setSubmitError(errorMessage);
      setCurrentStep('upload');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderQRStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-neon-cyan mb-4">Scan QR Code to Pay</h3>
        <p className="text-ghost-grey mb-6">
          Scan the QR code below with any UPI app to complete your payment
        </p>
      </div>

      <div className="flex justify-center">
        <Card className="pixel-card p-6 bg-ghost-grey/10">
          <CardContent className="text-center">
            <div className="space-y-4">
              <img
                src="/qrcode.jpg"   // ✅ from public folder
                alt="Payment QR Code"
                className="mx-auto border-2 border-neon-cyan rounded-lg"
              />
              <div className="space-y-2">
                <p className="text-pixel-white font-semibold">
                  Amount: ₹{selectedPass.price.toLocaleString()}
                </p>
                <p className="text-ghost-grey text-sm">
                  UPI ID: {import.meta.env.VITE_UPI_ID || 'cyberpac@paytm'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>


      <div className="bg-warning-yellow/20 border border-warning-yellow p-4 rounded-lg">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-warning-yellow mt-0.5" />
          <div>
            <p className="text-warning-yellow font-semibold">Important Instructions:</p>
            <ul className="text-warning-yellow text-sm mt-2 space-y-1">
              <li>• Complete the payment using any UPI app</li>
              <li>• Take a screenshot of the payment success screen</li>
              <li>• Upload the screenshot in the next step</li>
              <li>• Keep the transaction ID for your records</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Button
          type="button"
          className="pixel-button-secondary"
          onClick={onBack}
        >
          ← Back to Details
        </Button>
        <Button
          className="pixel-button-primary flex-1"
          onClick={() => setCurrentStep('upload')}
        >
          I've Made the Payment →
        </Button>
      </div>
    </div>
  );

  const renderUploadStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-neon-cyan mb-4">Upload Payment Screenshot</h3>
        <p className="text-ghost-grey mb-6">
          Please upload a screenshot of your successful payment confirmation
        </p>
      </div>

      <Card className="pixel-card">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="border-2 border-dashed border-ghost-grey rounded-lg p-8 text-center hover:border-neon-cyan transition-colors">
              <Upload className="w-12 h-12 text-ghost-grey mx-auto mb-4" />
              <p className="text-ghost-grey mb-4">
                {paymentScreenshot ? 'Payment screenshot uploaded' : 'Click to upload payment screenshot'}
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <Button
                type="button"
                className="pixel-button-secondary"
                onClick={() => fileInputRef.current?.click()}
              >
                {paymentScreenshot ? 'Change Screenshot' : 'Upload Screenshot'}
              </Button>
            </div>

            {paymentScreenshot && (
              <div className="bg-success-green/20 border border-success-green p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-green" />
                  <div>
                    <p className="text-success-green font-semibold">Screenshot Uploaded</p>
                    <p className="text-success-green text-sm">{paymentScreenshot.name}</p>
                  </div>
                </div>
              </div>
            )}

            {submitError && (
              <Alert className="border-error-red bg-error-red/20">
                <AlertCircle className="h-4 w-4 text-error-red" />
                <AlertDescription className="text-error-red">
                  {submitError}
                </AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="flex space-x-4">
        <Button
          type="button"
          className="pixel-button-secondary"
          onClick={() => setCurrentStep('qr')}
        >
          ← Back to QR Code
        </Button>
        <Button
          className="pixel-button-primary flex-1"
          onClick={handleSubmitPayment}
          disabled={!paymentScreenshot}
        >
          Submit Payment →
        </Button>
      </div>
    </div>
  );

  const renderSubmittingStep = () => (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <Loader2 className="w-16 h-16 text-neon-cyan animate-spin" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-neon-cyan mb-4">Processing Payment</h3>
        <p className="text-ghost-grey">
          Please wait while we process your payment and registration...
        </p>
      </div>
    </div>
  );

  return (
    <Card className="pixel-card">
      <CardHeader>
        <CardTitle className="text-neon-cyan flex items-center">
          <QrCode className="w-5 h-5 mr-3" />
          Payment & Registration
        </CardTitle>
        <CardDescription>
          Complete your payment to finalize your registration for {selectedPass.name}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {currentStep === 'qr' && renderQRStep()}
        {currentStep === 'upload' && renderUploadStep()}
        {currentStep === 'submitting' && renderSubmittingStep()}
      </CardContent>
    </Card>
  );
};

export default PaymentFlow;
