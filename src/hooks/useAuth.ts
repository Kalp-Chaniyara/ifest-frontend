import { useState, useEffect } from 'react';
import { usePaymentStatus } from '@/contexts/PaymentContext';

interface AuthState {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: {
    username?: string;
    email?: string;
    fullName?: string;
    isGuest?: boolean;
  } | null;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isLoggedIn: false,
    isLoading: true,
    user: null
  });

  // Get payment status context
  const { clearPaymentStatus } = usePaymentStatus();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Check localStorage flag first
        const isLoggedInFlag = localStorage.getItem('isLoggedIn') === 'true';
        
        if (isLoggedInFlag) {
          // Try to fetch user profile to verify auth
          const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
          const response = await fetch(`${API_BASE}/user/profile`, {
            method: 'GET',
            credentials: 'include'
          });

          if (response.ok) {
            const data = await response.json();
            setAuthState({
              isLoggedIn: true,
              isLoading: false,
              user: data.user
            });
          } else {
            // Token expired or invalid
            localStorage.removeItem('isLoggedIn');
            setAuthState({
              isLoggedIn: false,
              isLoading: false,
              user: null
            });
          }
        } else {
          setAuthState({
            isLoggedIn: false,
            isLoading: false,
            user: null
          });
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setAuthState({
          isLoggedIn: false,
          isLoading: false,
          user: null
        });
      }
    };

    checkAuthStatus();
  }, []);

  const login = (userData: { username?: string; email?: string; fullName?: string; isGuest?: boolean }) => {
    localStorage.setItem('isLoggedIn', 'true');
    setAuthState({
      isLoggedIn: true,
      isLoading: false,
      user: userData
    });
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    setAuthState({
      isLoggedIn: false,
      isLoading: false,
      user: null
    });
    // Clear payment status when logging out
    clearPaymentStatus();
  };

  return {
    ...authState,
    login,
    logout
  };
};
