import { useState } from 'react';
import { PixelHeader } from '@/components/PixelHeader';
import { PixelFooter } from '@/components/PixelFooter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogIn, Eye, EyeOff, Gamepad2, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Login = () => {
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number required है';
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      errors.phone = 'Valid 10-digit phone number enter करें';
    }

    if (!formData.password) {
      errors.password = 'Password required है';
    } else if (formData.password.length < 6) {
      errors.password = 'Password कम से कम 6 characters का होना चाहिए';
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsLoading(true);
    try {
      const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
      const resp = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.phone.trim(),
          password: formData.password,
          mobile_number: formData.phone.trim()
        })
      });

      if (!resp.ok) {
        const data = await resp.json().catch(() => null);
        throw new Error(data?.message || 'Login failed');
      }

      // Update auth state
      login({ username: formData.phone, email: '' });
      alert('Login successful! Welcome to i\'Fest\'25! 🎮');
      navigate('/profile');
    } catch (error: any) {
      setFormErrors({ general: error?.message || 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = () => {
    // For demo purposes
    login({ 
      username: 'guest', 
      email: 'guest@ifest25.com',
      isGuest: true 
    });
    
    alert('Guest login successful! 🎮');
    navigate('/profile');
  };

  return (
    <>
      <PixelHeader />
      
      <main className="pt-24 pb-12 min-h-screen">
        <div className="container mx-auto px-6">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="mb-6 pixel-glow-cyan">Login Portal</h1>
            <h2 className="mb-8 text-ghost-grey">Enter the Pixel Paradox</h2>
          </div>

          {/* Login Form */}
          <div className="max-w-md mx-auto">
            <Card className="pixel-card hover:bg-black">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 text-neon-cyan">
                  <LogIn className="w-8 h-8" />
                </div>
                <CardTitle className="text-neon-cyan text-2xl">
                  Welcome Back!
                </CardTitle>
                <CardDescription className="text-ghost-grey">
                  Login करें अपने i'Fest'25 account में
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formErrors.general && (
                    <div className="text-error-red text-sm text-center bg-error-red/10 p-3 rounded border border-error-red/30">
                      {formErrors.general}
                    </div>
                  )}

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="pixel-input"
                      placeholder="Enter your 10-digit phone number"
                      disabled={isLoading}
                    />
                    {formErrors.phone && (
                      <p className="text-error-red text-sm mt-1">{formErrors.phone}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleInputChange}
                        className="pixel-input pr-10"
                        placeholder="Enter your password"
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-ghost-grey hover:text-neon-cyan transition-colors"
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    {formErrors.password && (
                      <p className="text-error-red text-sm mt-1">{formErrors.password}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <input
                        id="remember"
                        type="checkbox"
                        className="w-4 h-4 text-neon-cyan border-ghost-grey rounded focus:ring-neon-cyan"
                      />
                      <Label htmlFor="remember" className="text-ghost-grey cursor-pointer">
                        Remember me
                      </Label>
                    </div>
                    <button
                      type="button"
                      className="text-neon-cyan hover:text-pacman-yellow transition-colors"
                      disabled={isLoading}
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <Button 
                    type="submit" 
                    className="pixel-button-primary w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-void-black"></div>
                        <span>Logging in...</span>
                      </div>
                    ) : (
                      <>
                        <LogIn className="w-4 h-4 mr-2" />
                        Login
                      </>
                    )}
                  </Button>
                </form>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-ghost-grey/30"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-void-black px-4 text-ghost-grey">या</span>
                  </div>
                </div>

                {/* Guest Login */}
                <Button
                  type="button"
                  onClick={handleGuestLogin}
                  className="pixel-button-secondary w-full"
                  disabled={isLoading}
                >
                  <Gamepad2 className="w-4 h-4 mr-2" />
                  Guest के रूप में Login करें
                </Button>

                {/* Security Note */}
                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center space-x-2 text-success-green text-sm">
                    <Shield className="w-4 h-4" />
                    <span>Secure SSL Connection</span>
                  </div>
                </div>

                {/* Register Link */}
                <div className="mt-6 text-center">
                  <p className="text-ghost-grey text-sm">
                    Account नहीं है?{' '}
                    <Link 
                      to="/register" 
                      className="text-neon-cyan hover:text-pacman-yellow transition-colors font-semibold"
                    >
                      Register करें
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <PixelFooter />
    </>
  );
};

export default Login;


