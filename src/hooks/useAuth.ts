import { useState, useEffect } from 'react';

interface AuthState {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: any | null;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isLoggedIn: false,
    isLoading: true,
    user: null
  });

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

  const login = (userData: any) => {
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
  };

  return {
    ...authState,
    login,
    logout
  };
};
