import { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const QRCodeTest = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  useEffect(() => {
    generateTestQR();
  }, []);

  const generateTestQR = async () => {
    try {
      const testData = {
        amount: 100,
        upiId: 'test@paytm',
        merchantName: 'Test Merchant',
        transactionId: `TXN${Date.now()}`
      };

      const upiString = `upi://pay?pa=${testData.upiId}&pn=${encodeURIComponent(testData.merchantName)}&am=${testData.amount}&cu=INR&tn=${encodeURIComponent('Test Payment')}&tr=${testData.transactionId}`;
      
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
  };

  return (
    <Card className="pixel-card max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-neon-cyan">QR Code Test</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        {qrCodeUrl ? (
          <div className="space-y-4">
            <img 
              src={qrCodeUrl} 
              alt="Test QR Code" 
              className="mx-auto border-2 border-neon-cyan rounded-lg"
            />
            <p className="text-ghost-grey text-sm">
              Test QR code generated successfully!
            </p>
          </div>
        ) : (
          <p className="text-ghost-grey">Generating QR code...</p>
        )}
      </CardContent>
    </Card>
  );
};

export default QRCodeTest;
