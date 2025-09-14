import { FC } from 'react';
import { cn } from '@/lib/utils';

const TermsAndConditions: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8 text-white">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent">
          Terms and Conditions
        </h1>
        <p className="text-gray-400">i'Fest'25 Cyber Pac Blueprint - DAIICT</p>
        <div className="text-sm text-gray-400 italic">
          Last Updated: December 2025
        </div>
      </div>

      <section className="space-y-6">
        <div className="bg-black/50 p-6 rounded-lg border border-indigo-500/20">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-300">
            By accessing and using the i'Fest'25 Cyber Pac Blueprint registration portal and participating in the festival events, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not register for the festival.
          </p>
          <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <strong className="text-yellow-400">Important:</strong>{' '}
            <span className="text-gray-300">
              These terms apply to all participants, including DAIICT students, non-DAIICT students, and IEEE members.
            </span>
          </div>
        </div>

        <div className="bg-black/50 p-6 rounded-lg border border-indigo-500/20">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">2. Event Registration and Pass Selection</h2>
          
          <h3 className="text-xl font-medium text-indigo-300 mb-3">2.1 Registration Requirements</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>All participants must provide accurate and complete registration information</li>
            <li>DAIICT students must use their official institute email address</li>
            <li>IEEE members must provide valid IEEE membership ID for discounted passes</li>
            <li>Participants must be at least 16 years old or have parental consent</li>
          </ul>

          <h3 className="text-xl font-medium text-indigo-300 mt-4 mb-3">2.2 Pass Categories and Pricing</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong className="text-indigo-400">Silver Pass:</strong> Available for non-DAIICT students only</li>
            <li><strong className="text-indigo-400">Gold Pass:</strong> Available for all participant categories</li>
            <li>Pricing varies based on student category and IEEE membership status</li>
            <li>All prices include applicable taxes</li>
          </ul>

          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <strong className="text-red-400">Warning:</strong>{' '}
            <span className="text-gray-300">
              Providing false IEEE membership information will result in immediate pass cancellation without refund.
            </span>
          </div>
        </div>

        <div className="bg-black/50 p-6 rounded-lg border border-indigo-500/20">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">3. User Conduct and Responsibilities</h2>
          
          <h3 className="text-xl font-medium text-indigo-300 mb-3">3.1 Expected Behavior</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Respect all participants, organizers, and venue staff</li>
            <li>Follow all event rules and guidelines</li>
            <li>Maintain appropriate and professional conduct</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>

          <h3 className="text-xl font-medium text-indigo-300 mt-4 mb-3">3.2 Prohibited Activities</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Harassment, discrimination, or inappropriate behavior</li>
            <li>Cheating or unfair practices in competitions</li>
            <li>Damage to venue property or equipment</li>
            <li>Use of illegal substances or alcohol</li>
            <li>Unauthorized recording or photography</li>
          </ul>
        </div>

        <div className="bg-black/50 p-6 rounded-lg border border-indigo-500/20">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">4. Contact Information</h2>
          <div className="bg-cyan-500/10 p-4 rounded-lg border border-cyan-500/20">
            <h3 className="text-xl font-medium text-cyan-400 mb-3">Contact Information</h3>
            <p className="text-gray-300">If you have any questions about these Terms and Conditions, please contact us:</p>
            <ul className="list-none space-y-2 mt-2 text-gray-300">
              <li><strong className="text-cyan-400">Email:</strong> ifest25@daiict.ac.in</li>
              <li><strong className="text-cyan-400">Phone:</strong> +91-79-6826-1700</li>
              <li><strong className="text-cyan-400">Address:</strong> DAIICT, Near Indroda Circle, Gandhinagar, Gujarat 382007</li>
              <li><strong className="text-cyan-400">Website:</strong> https://ifest25.daiict.ac.in</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-400 mt-8 p-4 border-t border-gray-800">
        <p>&copy; 2025 DAIICT i'Fest'25. All rights reserved.</p>
        <p className="text-sm">These Terms and Conditions are effective as of December 2025.</p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
