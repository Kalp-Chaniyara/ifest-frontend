import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useAuth } from '@/hooks/useAuth';

type PaymentStatus = 'none' | 'success' | 'failure' | 'pending';

interface PaymentContextType {
  paymentStatus: PaymentStatus;
  isLoading: boolean;
  setPaymentStatus: (status: PaymentStatus, username?: string) => Promise<void>;
  clearPaymentStatus: () => Promise<void>;
  refreshPaymentStatus: () => Promise<void>;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const usePaymentStatus = () => {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error('usePaymentStatus must be used within a PaymentProvider');
  }
  return context;
};

interface PaymentProviderProps {
  children: ReactNode;
}

export const PaymentProvider = ({ children }: PaymentProviderProps) => {
  const [paymentStatus, setPaymentStatusState] = useState<PaymentStatus>('none');
  const [isLoading, setIsLoading] = useState(false);
  const { user, isLoggedIn } = useAuth();

  // Fetch payment status from API
  const fetchPaymentStatus = useCallback(async () => {
    setIsLoading(true);
    try {
      const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
      const response = await fetch(`${API_BASE}/user/payment-status`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        const status = data.status || 'none';
        setPaymentStatusState(status as PaymentStatus);
      } else {
        setPaymentStatusState('none');
      }
    } catch (error) {
      console.warn('Failed to fetch payment status:', error);
      setPaymentStatusState('none');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Load payment status on app load and when user logs in
  useEffect(() => {
    // Always try to fetch payment status (works for both logged in and logged out users)
    fetchPaymentStatus();
  }, [fetchPaymentStatus]);

  const setPaymentStatus = async (status: PaymentStatus, username?: string) => {
    setPaymentStatusState(status);
    
    // Store in backend if user is logged in or username is provided
    const targetUsername = username || user?.username;
    if (targetUsername) {
      try {
        const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
        await fetch(`${API_BASE}/user/payment-status`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            status,
            username: targetUsername 
          }),
        });
      } catch (error) {
        console.warn('Failed to update payment status in backend:', error);
        // No fallback - API must work
      }
    }
  };

  const clearPaymentStatus = async () => {
    // Don't clear payment status - it should persist across login/logout
    // Payment status represents a completed transaction and should remain
    setPaymentStatusState('none');
    console.log('Payment status cleared locally but not from backend - payment persists');
  };

  const refreshPaymentStatus = async () => {
    await fetchPaymentStatus();
  };

  return (
    <PaymentContext.Provider value={{
      paymentStatus,
      isLoading,
      setPaymentStatus,
      clearPaymentStatus,
      refreshPaymentStatus
    }}>
      {children}
    </PaymentContext.Provider>
  );
};
