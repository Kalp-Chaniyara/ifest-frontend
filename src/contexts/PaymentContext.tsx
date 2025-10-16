import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type PaymentStatus = 'none' | 'success' | 'failure' | 'pending';

interface PaymentContextType {
  paymentStatus: PaymentStatus;
  setPaymentStatus: (status: PaymentStatus) => void;
  clearPaymentStatus: () => void;
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

  // Load payment status from localStorage on mount
  useEffect(() => {
    const storedStatus = localStorage.getItem('paymentStatus') as PaymentStatus;
    if (storedStatus && ['none', 'success', 'failure', 'pending'].includes(storedStatus)) {
      setPaymentStatusState(storedStatus);
    }
  }, []);

  const setPaymentStatus = (status: PaymentStatus) => {
    setPaymentStatusState(status);
    localStorage.setItem('paymentStatus', status);
  };

  const clearPaymentStatus = () => {
    setPaymentStatusState('none');
    localStorage.removeItem('paymentStatus');
  };

  return (
    <PaymentContext.Provider value={{
      paymentStatus,
      setPaymentStatus,
      clearPaymentStatus
    }}>
      {children}
    </PaymentContext.Provider>
  );
};
