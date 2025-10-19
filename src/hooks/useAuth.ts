import { useState, useEffect } from 'react';

interface AuthState {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: {
    username?: string;
    email?: string;
    fullName?: string;
    phone?: string;
    mobile_number?: string;
    isGuest?: boolean;
  } | null;
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
        // Always check with API - no localStorage dependency
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
          // Not authenticated
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

  const login = (userData: { username?: string; email?: string; fullName?: string; phone?: string; mobile_number?: string; isGuest?: boolean }) => {
    // No localStorage - rely on API cookies/sessions
    setAuthState({
      isLoggedIn: true,
      isLoading: false,
      user: userData
    });
  };

  const logout = async () => {
    try {
      // Call backend logout endpoint to clear session/cookies
      const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
      await fetch(`${API_BASE}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.warn('Failed to logout from backend:', error);
    } finally {
      // Always clear local state regardless of API call result
      setAuthState({
        isLoggedIn: false,
        isLoading: false,
        user: null
      });
    }
  };

  return {
    ...authState,
    login,
    logout
  };
};
