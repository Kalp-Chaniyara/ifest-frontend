import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { PixelHeader } from '@/components/PixelHeader';
import { PixelFooter } from '@/components/PixelFooter';
import { PixelLoader } from '@/components/PixelLoader';
import { CheckCircle, XCircle, Clock, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { usePaymentStatus } from '@/contexts/PaymentContext';

type PaymentStatus = 'pending' | 'success' | 'failure' | 'verifying';

const PaymentResult = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login, user } = useAuth();
  const { paymentStatus: globalPaymentStatus, setPaymentStatus: setGlobalPaymentStatus } = usePaymentStatus();
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('verifying');
  const [countdown, setCountdown] = useState(5);
  const [merchantId, setMerchantId] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  // Extract merchantId from URL and get username
  useEffect(() => {
    const merchantIdParam = searchParams.get('merchantId');
    if (merchantIdParam) {
      setMerchantId(merchantIdParam);
    }

    // Get username from multiple sources with fallbacks
    const getUsername = () => {
      // 1. First try from authenticated user
      if (user?.username) {
        return user.username;
      }
      
      // 2. Try from user object phone/mobile_number
      if (user?.mobile_number) {
        return user.mobile_number.trim();
      }
      if (user?.phone) {
        return user.phone.trim();
      }
      
      // 3. No localStorage fallback - rely on API
      
      // 4. Try to get from URL parameters as last resort
      const urlUsername = searchParams.get('username');
      if (urlUsername) {
        return urlUsername.trim();
      }
      
      return null;
    };

    const foundUsername = getUsername();
    if (foundUsername) {
      setUsername(foundUsername);
    }
  }, [searchParams, user]);

  // Payment verification process
  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
        const merchantId = searchParams.get('merchantId');

        const response = await fetch(`${API_BASE}/payment/checkout`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            merchantOrderId: merchantId
          })
        });

        if (!response.ok) {
          throw new Error('Payment verification failed');
        }

        console.log("Payment response: ", response);

        const data = await response.json();
        setPaymentStatus(data.status);
        
        // Update global payment status with username for API storage
        const status = data.status === 'success' ? 'success' : 
                      data.status === 'failure' ? 'failure' : 'pending';
        await setGlobalPaymentStatus(status, username);

      } catch (error) {
        console.error('Payment verification failed:', error);
        setPaymentStatus('failure');
        await setGlobalPaymentStatus('failure', username);
      }
    };

    const handleUrlStatus = async () => {
      // Check if payment status is provided in URL parameters first
      const urlStatus = searchParams.get('status');
      if (urlStatus) {
        const status = urlStatus.toLowerCase();
        if (['success', 'failure', 'pending'].includes(status)) {
          setPaymentStatus(status as PaymentStatus);
          await setGlobalPaymentStatus(status as 'success' | 'failure' | 'pending', username);
          return true;
        }
      }
      return false;
    };

    const runVerification = async () => {
      const urlHandled = await handleUrlStatus();
      if (!urlHandled) {
        await verifyPayment();
      }
    };

    runVerification();
  }, [searchParams, setGlobalPaymentStatus, username]);

  const handleRedirect = () => {
    if (paymentStatus === 'success') {
      // User is already authenticated via API cookies
      // Navigate to profile page
      navigate('/profile');
    } else if (paymentStatus === 'failure') {
      navigate('/register');
    }
  };

  const handleManualRedirect = () => {
    handleRedirect();
  };

  const getStatusIcon = () => {
    switch (paymentStatus) {
      case 'success':
        return <CheckCircle className="w-16 h-16 text-green-500" />;
      case 'failure':
        return <XCircle className="w-16 h-16 text-red-500" />;
      case 'pending':
        return <Clock className="w-16 h-16 text-yellow-500" />;
      default:
        return <Loader2 className="w-16 h-16 text-neon-cyan animate-spin" />;
    }
  };

  const getStatusMessage = () => {
    switch (paymentStatus) {
      case 'success':
        return {
          title: 'Payment Successful!',
          message: 'Your payment has been verified successfully.',
          color: 'text-green-500'
        };
      case 'failure':
        return {
          title: 'Payment Failed',
          message: 'We were unable to process your payment.',
          color: 'text-red-500'
        };
      case 'pending':
        return {
          title: 'Payment Pending',
          message: 'Your payment is being processed. Please wait...',
          color: 'text-yellow-500'
        };
      default:
        return {
          title: 'Verifying Payment...',
          message: 'Please wait while we verify your payment.',
          color: 'text-neon-cyan'
        };
    }
  };

  const statusInfo = getStatusMessage();

  return (
    <>
      <PixelHeader />

      <main className="pt-24 pb-12 min-h-screen bg-transparent flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-2xl">

          {/* Payment Status Card */}
          <div className="bg-void-black/90 border-2 border-ghost-grey rounded-lg p-8 text-center">

            {/* Status Icon */}
            <div className="mb-6 flex justify-center">
              {getStatusIcon()}
            </div>

            {/* Status Title */}
            <h1 className={`mb-4 text-2xl md:text-3xl font-bold ${statusInfo.color}`}>
              {statusInfo.title}
            </h1>

            {/* Status Message */}
            <p className="text-ghost-grey text-lg mb-6">
              {statusInfo.message}
            </p>

            {/* Merchant ID Display */}
            {merchantId && (
              <div className="bg-void-black/50 border border-ghost-grey rounded p-4 mb-6">
                <p className="text-sm text-ghost-grey mb-1">Transaction ID:</p>
                <p className="text-pixel-white font-mono text-sm break-all">{merchantId}</p>
              </div>
            )}

            {/* Loading Animation for Verification */}
            {paymentStatus === 'verifying' && (
              <div className="mb-6">
                {/* <PixelLoader /> */}
                <p className="text-ghost-grey text-sm mt-4">
                  Verifying payment with merchant...
                </p>
              </div>
            )}

            {/* Pending Status - Keep waiting */}
            {paymentStatus === 'pending' && (
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-2">
                  <Loader2 className="w-5 h-5 text-yellow-500 animate-spin" />
                  <span className="text-yellow-500">Processing...</span>
                </div>
                <p className="text-ghost-grey text-sm mt-2">
                  Please do not close this window
                </p>
              </div>
            )}

            {/* Auto Redirect Timer */}
            {(paymentStatus === 'success' || paymentStatus === 'failure') && (
              <div className="mb-6">
                {/* <p className="text-ghost-grey text-sm mb-4">
                  Redirecting automatically in {countdown} seconds...
                </p> */}

                {/* Manual Redirect Button */}
                <Button
                  onClick={handleManualRedirect}
                  className="pixel-button-primary"
                >
                  Continue Now
                </Button>
              </div>
            )}

            {/* Additional Info */}
            <div className="text-xs text-ghost-grey">
              {paymentStatus === 'success' && (
                <p>You will receive a confirmation email shortly.</p>
              )}
              {paymentStatus === 'failure' && (
                <p>If you believe this is an error, please contact support.</p>
              )}
              {paymentStatus === 'pending' && (
                <p>This may take a few minutes. Please be patient.</p>
              )}
            </div>

          </div>

           {/* Debug Info (remove in production) */}
           {process.env.NODE_ENV === 'development' && (
             <div className="mt-8 bg-void-black/50 border border-ghost-grey rounded p-4">
               <h3 className="text-neon-cyan text-sm font-bold mb-2">Debug Info:</h3>
               <div className="text-xs text-ghost-grey space-y-1">
                 <p>Local Status: {paymentStatus}</p>
                 <p>Global Status: {globalPaymentStatus}</p>
                 <p>Merchant ID: {merchantId || 'Not found'}</p>
                 <p>URL Params: {searchParams.toString()}</p>
                 <p>API Only: No localStorage dependency</p>
                 <p>Redirect: {paymentStatus === 'success' ? '/profile' : '/register'}</p>
               </div>
             </div>
           )}

        </div>
      </main>

      <PixelFooter />
    </>
  );
};

export default PaymentResult;
