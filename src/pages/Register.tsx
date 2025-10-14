import { useState } from 'react';
import { PixelHeader } from '@/components/PixelHeader';
import { PixelFooter } from '@/components/PixelFooter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Check, Star, Zap, Crown, Users, Calendar, Trophy, Ticket } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import PaymentFlow from '@/components/PaymentFlow';

interface PassType {
  id: 'silver' | 'gold';
  name: string;
  price: number;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  popular?: boolean;
}

interface UserCategory {
  id: 'non-dau' | 'non-dau-ieee' | 'dau';
  name: string;
  description: string;
}

const userCategories: UserCategory[] = [
  {
    id: 'non-dau',
    name: 'Non-DAU Student',
    description: 'Students from other institutions'
  },
  {
    id: 'non-dau-ieee',
    name: 'Non-DAU IEEE Student',
    description: 'IEEE members from other institutions'
  },
  {
    id: 'dau',
    name: 'DAU Student',
    description: 'Current DAU students'
  }
];

const getPassPrice = (categoryId: string, passId: string): number => {
  const prices: Record<string, Record<string, number>> = {
    'non-dau': { silver: 150, gold: 350 },
    'non-dau-ieee': { silver: 100, gold: 300 },
    'dau': { silver: 0, gold: 100 }
  };
  return prices[categoryId]?.[passId] || 0;
};

const createPasses = (categoryId: string): PassType[] => {
  const passes: PassType[] = [];
  
  // Add Silver Pass for non-DAU students only
  if (categoryId !== 'dau') {
    passes.push({
      id: 'silver',
      name: 'Silver Pass',
      price: getPassPrice(categoryId, 'silver'),
      description: 'Essential access to core festival events',
      features: [
        "Access to all events",
        "No participation in robo events (View only)",
     "(No access for Concert, Standup)"
      ],
      icon: <Star className="w-6 h-6" />,
      color: 'neon-cyan'
    });
  }
  
  // Add Gold Pass for all categories
  passes.push({
    id: 'gold',
    name: 'Gold Pass',
    price: getPassPrice(categoryId, 'gold'),
    description: categoryId === 'dau' ? 'Complete festival access for DAU students' : 'Premium experience with exclusive benefits',
    features: categoryId === 'dau' ? [
      "All benifits of silver pass",
      "Access to Concert", "EDM night", "Standup Night", 
      "Also all the event",
      "No participation in robo events (View only)",
 
    ] : [
      "All benifits of silver pass",
      "Access to Concert", "EDM night", "Standup Night", 
      "Also all the event",
      "No participation in robo events (View only)",
    ],
    icon: <Crown className="w-6 h-6" />,
    color: 'pacman-yellow',
    popular: categoryId !== 'dau'
  });
  
  return passes;
};

const Register = () => {
  const [selectedCategory, setSelectedCategory] = useState<UserCategory | null>(null);
  const [selectedPass, setSelectedPass] = useState<PassType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [currentStep, setCurrentStep] = useState<'category' | 'selection' | 'details' | 'payment'>('category');
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    password: '',
    confirmPassword: '',
    ieeeId: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleCategorySelection = (category: UserCategory) => {
    setSelectedCategory(category);
    setCurrentStep('selection');
  };

  const handlePassSelection = (pass: PassType) => {
    setSelectedPass(pass);
    setCurrentStep('details');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({ ...prev, [name]: value }));
    
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateDetails = () => {
    const errors: Record<string, string> = {};
    
    if (!userDetails.fullName.trim()) errors.fullName = 'Full name is required';
    if (!userDetails.email.trim()) errors.email = 'Email is required';
    if (!userDetails.phone.trim()) errors.phone = 'Phone number is required';
    if (!userDetails.college.trim()) errors.college = 'College name is required';
    if (!userDetails.password) errors.password = 'Password is required';
    if (!userDetails.confirmPassword) errors.confirmPassword = 'Please confirm your password';
    
    // Terms acceptance validation
    if (!acceptTerms) {
      errors.acceptTerms = 'You must accept the Terms and Conditions to continue';
    }
    
    // IEEE ID validation for Non-DAU IEEE students
    if (selectedCategory?.id === 'non-dau-ieee') {
      if (!userDetails.ieeeId.trim()) {
        errors.ieeeId = 'IEEE ID is required for IEEE members';
      }
    }
    
    // Email validation based on category
    if (selectedCategory?.id === 'dau') {
      const dauEmailRegex = /^\d{9}@dau\.ac\.in$/;
      if (userDetails.email && !dauEmailRegex.test(userDetails.email)) {
        errors.email = 'Please use your DAU institute email (9 digits @dau.ac.in)';
      }
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (userDetails.email && !emailRegex.test(userDetails.email)) {
        errors.email = 'Please enter a valid email address';
      }
    }

    if (userDetails.password !== userDetails.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (userDetails.password && userDetails.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    return errors;
  };

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateDetails();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Call backend registration
    try {
      const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
      const payload = {
        username: (userDetails.phone || '').trim(), // phone as username
        email: userDetails.email.trim(),
        password: userDetails.password,
        mobile_number: (userDetails.phone || '').trim(), // phone also as mobile_number
        full_name: userDetails.fullName.trim(),
        pass_type: selectedPass?.id || 'gold',
        college: userDetails.college.trim(),
        ieee_id: selectedCategory?.id === 'non-dau-ieee' ? userDetails.ieeeId.trim() : null
      };

      const resp = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!resp.ok) {
        const data = await resp.json().catch(() => null);
        throw new Error(data?.message || 'Registration failed');
      }

      setCurrentStep('payment');
    } catch (err: any) {
      setFormErrors({ general: err?.message || 'Registration failed. Please try again.' });
    }
  };

  const calculateTotal = () => {
    if (!selectedPass) return 0;
    const subtotal = selectedPass.price * quantity;
    const tax = subtotal * 0.18; // 18% GST
    return subtotal + tax;
  };

  const handlePaymentComplete = () => {
    // Persist registration details (read-only profile will consume these)
    const registrationUser = {
      fullName: userDetails.fullName,
      email: userDetails.email,
      phone: userDetails.phone,
      college: userDetails.college,
      year: userDetails.year,
      registrationDate: new Date().toISOString()
    };
    try {
      localStorage.setItem('registrationUser', JSON.stringify(registrationUser));
      // Keep previously saved events if any, else empty list
      const existingEvents = localStorage.getItem('registeredEvents');
      if (!existingEvents) {
        localStorage.setItem('registeredEvents', JSON.stringify([]));
      }
    } catch {}
    
    // Update auth state and redirect
    login({ 
      username: userDetails.phone, 
      email: userDetails.email,
      fullName: userDetails.fullName 
    });
    navigate('/profile');
  };

  return (
    <>
      <PixelHeader />
      
      <main className="pt-24 pb-12 min-h-screen">
        <div className="container mx-auto px-6">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="mb-6 pixel-glow-magenta">Registration Portal</h1>
            <h2 className="mb-8 text-ghost-grey">Join the Pixel Paradox Revolution</h2>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {['category', 'selection', 'details', 'payment'].map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className={`
                    w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm
                    ${currentStep === step 
                      ? 'border-neon-magenta bg-neon-magenta text-void-black' 
                      : index < ['category', 'selection', 'details', 'payment'].indexOf(currentStep)
                        ? 'border-success-green bg-success-green text-void-black'
                        : 'border-ghost-grey text-ghost-grey'
                    }
                  `}>
                    {index < ['category', 'selection', 'details', 'payment'].indexOf(currentStep) ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  {index < 3 && (
                    <div className={`
                      w-12 h-0.5 mx-2
                      ${index < ['category', 'selection', 'details', 'payment'].indexOf(currentStep)
                        ? 'bg-success-green'
                        : 'bg-ghost-grey'
                      }
                    `} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Special Combo Offer */}
          {/* <div className="max-w-4xl mx-auto mb-16">
            <Card className="pixel-card bg-gradient-to-r from-neon-magenta/20 to-neon-cyan/20 border-2 border-pacman-yellow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-pacman-yellow flex items-center justify-center gap-2">
                  <Zap className="w-6 h-6" />
                  Special Combo Offer
                  <Zap className="w-6 h-6" />
                </CardTitle>
                <CardDescription className="text-ghost-grey text-lg">
                  Limited Time Special Bundle Deal!
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-pixel-white mb-4">Get exclusive access to all events plus premium merchandise pack</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="pixel-card p-4">
                    <h4 className="text-neon-cyan">Includes:</h4>
                    <ul className="text-pixel-white text-sm mt-2 space-y-2">
                      <li className="flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-success-green" />
                        Gold Pass Access
                      </li>
                      <li className="flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-success-green" />
                        Premium Merchandise
                      </li>
                    </ul>
                  </div>
                  <div className="pixel-card p-4">
                    <h4 className="text-neon-magenta">Special Price:</h4>
                    <div className="mt-2">
                      <span className="text-ghost-grey line-through">₹850</span>
                      <span className="text-pacman-yellow text-2xl block">₹500</span>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://forms.gle/8TxHJtSonxQSNhGK8"  
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="pixel-button-primary">
                    Grab the Combo Deal
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div> */}

          {/* Step 1: Category Selection */}
          {currentStep === 'category' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-neon-cyan mb-4">Select Your Category</h2>
                <p className="text-ghost-grey">Choose the category that best describes you</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {userCategories.map((category) => (
                  <Card
                    key={category.id}
                    className="pixel-card cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-black"
                    onClick={() => handleCategorySelection(category)}
                  >
                    <CardHeader className="text-center">
                      <CardTitle className="text-neon-cyan text-xl">{category.name}</CardTitle>
                      <CardDescription className="text-ghost-grey">{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="pixel-button-primary w-full">
                        Select Category
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Pass Selection */}
          {currentStep === 'selection' && selectedCategory && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-neon-cyan mb-4">Choose Your Pass</h2>
                <p className="text-ghost-grey">Selected: {selectedCategory.name}</p>
              </div>
              <div className={`grid gap-8 ${createPasses(selectedCategory.id).length === 1 ? 'grid-cols-1 max-w-md mx-auto' : 'grid-cols-1 md:grid-cols-2'}`}>
                {createPasses(selectedCategory.id).map((pass) => (
                <Card
                  key={pass.id}
                  className={`
                    pixel-card cursor-pointer transition-all duration-300 relative
                    hover:scale-105 hover:shadow-2xl
                    ${pass.popular ? 'border-pacman-yellow shadow-lg' : ''} hover:bg-black
                  `}
                  onClick={() => handlePassSelection(pass)}
                >
                  {pass.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-pacman-yellow text-void-black px-4 py-1 text-sm font-pixel-header">
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <div className={`mx-auto mb-4 text-${pass.color}`}>
                      {pass.icon}
                    </div>
                    <CardTitle className={`text-${pass.color} text-2xl`}>
                      {pass.name}
                    </CardTitle>
                    <CardDescription className="text-ghost-grey">
                      {pass.description}
                    </CardDescription>
                    <div className="text-3xl font-pixel-header text-pixel-white mt-4">
                      ₹{pass.price.toLocaleString()}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3">
                      {pass.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Check className={`w-4 h-4 text-${pass.color} mt-0.5 flex-shrink-0`} />
                          <span className="text-pixel-white text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="pixel-button-primary w-full mt-6">
                      Select {pass.name}
                    </Button>
                  </CardContent>
                </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button
                  className="pixel-button-secondary"
                  onClick={() => setCurrentStep('category')}
                >
                  ← Back to Categories
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: User Details */}
          {currentStep === 'details' && selectedPass && selectedCategory && (
            <div className="max-w-2xl mx-auto">
              <Card className="pixel-card ">
                <CardHeader>
                  <CardTitle className="text-neon-cyan flex items-center">
                    <Users className="w-5 h-5 mr-3" />
                    Registration Details
                  </CardTitle>
                  <CardDescription>
                    Category: {selectedCategory.name} | Pass: {selectedPass.name} - ₹{selectedPass.price.toLocaleString()}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleDetailsSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={userDetails.fullName}
                          onChange={handleInputChange}
                          className="pixel-input"
                          placeholder="Enter your full name"
                        />
                        {formErrors.fullName && (
                          <p className="text-error-red text-sm mt-1">{formErrors.fullName}</p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={userDetails.email}
                          onChange={handleInputChange}
                          className="pixel-input"
                          placeholder={selectedCategory?.id === 'dau' ? "Enter institutes email" : "Enter your email"}
                        />
                        {formErrors.email && (
                          <p className="text-error-red text-sm mt-1">{formErrors.email}</p>
                        )}
                        {selectedCategory?.id === 'dau' && (
                          <p className="text-neon-cyan text-sm mt-1">
                            Please use your DAU institute email ID
                          </p>
                        )}
                      </div>
                    </div>

                    {/* IEEE ID Field for Non-DAU IEEE students */}
                    {selectedCategory?.id === 'non-dau-ieee' && (
                      <div>
                        <Label htmlFor="ieeeId">IEEE Member ID *</Label>
                        <Input
                          id="ieeeId"
                          name="ieeeId"
                          value={userDetails.ieeeId}
                          onChange={handleInputChange}
                          className="pixel-input"
                          placeholder="Enter your IEEE Member ID"
                        />
                        {formErrors.ieeeId && (
                          <p className="text-error-red text-sm mt-1">{formErrors.ieeeId}</p>
                        )}
                        <div className="bg-error-red/20 border border-error-red p-3 mt-2 rounded">
                          <p className="text-error-red text-sm font-bold">⚠️ Warning:</p>
                          <p className="text-error-red text-sm">
                            If you provide a wrong or fake IEEE ID, your pass will be canceled and no refund will be provided.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={userDetails.phone}
                          onChange={handleInputChange}
                          className="pixel-input"
                          placeholder="Enter phone number"
                        />
                        {formErrors.phone && (
                          <p className="text-error-red text-sm mt-1">{formErrors.phone}</p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="college">College/Institution *</Label>
                        <Input
                          id="college"
                          name="college"
                          value={userDetails.college}
                          onChange={handleInputChange}
                          className="pixel-input"
                          placeholder="Enter college name"
                        />
                        {formErrors.college && (
                          <p className="text-error-red text-sm mt-1">{formErrors.college}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="year">Year of Study</Label>
                      <Input
                        id="year"
                        name="year"
                        value={userDetails.year}
                        onChange={handleInputChange}
                        className="pixel-input"
                        placeholder="e.g., 2nd Year, Final Year, Graduate"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="password">Password *</Label>
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          value={userDetails.password}
                          onChange={handleInputChange}
                          className="pixel-input"
                          placeholder="Create password"
                        />
                        {formErrors.password && (
                          <p className="text-error-red text-sm mt-1">{formErrors.password}</p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="confirmPassword">Confirm Password *</Label>
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          value={userDetails.confirmPassword}
                          onChange={handleInputChange}
                          className="pixel-input"
                          placeholder="Confirm password"
                        />
                        {formErrors.confirmPassword && (
                          <p className="text-error-red text-sm mt-1">{formErrors.confirmPassword}</p>
                        )}
                      </div>
                    </div>

                    {/* Terms and Conditions Checkbox */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="acceptTerms"
                          checked={acceptTerms}
                          onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                          className="mt-1"
                        />
                        <div className="space-y-2">
                          <Label htmlFor="acceptTerms" className="text-sm text-pixel-white cursor-pointer">
                            I agree to the{' '}
                            <a 
                              href="/terms-and-conditions" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-neon-cyan hover:text-neon-magenta underline"
                            >
                              Terms and Conditions
                            </a>
                            ,{' '}
                            <a 
                              href="/refund-policy" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-neon-cyan hover:text-neon-magenta underline"
                            >
                              Refund Policy
                            </a>
                            , and{' '}
                            <a 
                              href="/privacy-policy" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-neon-cyan hover:text-neon-magenta underline"
                            >
                              Privacy Policy
                            </a>
                            {' '}of i'Fest'25
                          </Label>
                          <div className="bg-error-red/20 border border-error-red p-3 rounded">
                            <p className="text-error-red text-sm font-bold">⚠️ Important Notice:</p>
                            <p className="text-error-red text-sm">
                              By accepting these terms, you acknowledge that all payments are FINAL and NON-REFUNDABLE. 
                              No refunds will be provided under any circumstances, including event cancellation, 
                              medical emergencies, or any other reason.
                            </p>
                          </div>
                        </div>
                      </div>
                      {formErrors.acceptTerms && (
                        <p className="text-error-red text-sm">{formErrors.acceptTerms}</p>
                      )}
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        type="button"
                        className="pixel-button-secondary"
                        onClick={() => setCurrentStep('selection')}
                      >
                        ← Back to Pass Selection
                      </Button>
                      <Button type="submit" className="pixel-button-primary flex-1">
                        Continue to Payment →
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 4: Payment */}
          {currentStep === 'payment' && selectedPass && selectedCategory && (
            <div className="max-w-2xl mx-auto">
              <PaymentFlow
                userDetails={userDetails}
                selectedPass={selectedPass}
                selectedCategory={selectedCategory}
                onPaymentComplete={handlePaymentComplete}
                onBack={() => setCurrentStep('details')}
              />
            </div>
          )}
        </div>
      </main>

      <PixelFooter />
    </>
  );
};

export default Register;
