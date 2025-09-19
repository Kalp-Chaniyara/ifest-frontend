import { FC } from 'react';
import { cn } from '@/lib/utils';

const PrivacyPolicy: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8 text-white">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-gray-400">i'Fest'25 Pixel Paradox - DAU</p>
        <div className="text-sm text-gray-400 italic">
          Last Updated: December 2025
        </div>
      </div>

      <section className="space-y-6">
        <div className="bg-black/50 p-6 rounded-lg border border-green-500/20">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">1. Introduction</h2>
          <p className="text-gray-300">
            This Privacy Policy explains how DAU and the i'Fest'25 Pixel Paradox organizing committee ("we," "our," or "us") collect, use, disclose, and protect your personal information when you register for and participate in our festival events.
          </p>
          <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <strong className="text-yellow-400">Your Privacy Matters:</strong>{' '}
            <span className="text-gray-300">
              We are committed to protecting your personal information and ensuring transparency in our data practices. This policy applies to all participants, including DAU students, non-DAU students, and IEEE members.
            </span>
          </div>
        </div>

        <div className="bg-black/50 p-6 rounded-lg border border-green-500/20">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-medium text-green-300 mb-3">2.1 Personal Information</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-black/60 rounded-lg">
              <thead>
                <tr>
                  <th className="px-4 py-3 bg-green-500/20 text-left text-green-400">Information Type</th>
                  <th className="px-4 py-3 bg-green-500/20 text-left text-green-400">Purpose</th>
                  <th className="px-4 py-3 bg-green-500/20 text-left text-green-400">Required</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-green-500/10">
                  <td className="px-4 py-3 text-gray-300">Full Name</td>
                  <td className="px-4 py-3 text-gray-300">Registration, identification, certificates</td>
                  <td className="px-4 py-3 text-green-400">Yes</td>
                </tr>
                <tr className="border-t border-green-500/10">
                  <td className="px-4 py-3 text-gray-300">Email Address</td>
                  <td className="px-4 py-3 text-gray-300">Communication, account management</td>
                  <td className="px-4 py-3 text-green-400">Yes</td>
                </tr>
                <tr className="border-t border-green-500/10">
                  <td className="px-4 py-3 text-gray-300">Phone Number</td>
                  <td className="px-4 py-3 text-gray-300">Emergency contact, event updates</td>
                  <td className="px-4 py-3 text-green-400">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-medium text-green-300 mt-6 mb-3">2.2 Technical Information</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong className="text-green-400">IP Address:</strong> For security and analytics purposes</li>
            <li><strong className="text-green-400">Browser Information:</strong> To ensure compatibility and improve user experience</li>
            <li><strong className="text-green-400">Device Information:</strong> For responsive design optimization</li>
          </ul>
        </div>

        <div className="bg-black/50 p-6 rounded-lg border border-green-500/20">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">3. Data Security</h2>
          <h3 className="text-xl font-medium text-green-300 mb-3">3.1 Security Measures</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong className="text-green-400">Encryption:</strong> All data transmission is encrypted using SSL/TLS protocols</li>
            <li><strong className="text-green-400">Access Controls:</strong> Limited access to personal data on a need-to-know basis</li>
            <li><strong className="text-green-400">Regular Audits:</strong> Periodic security assessments and vulnerability testing</li>
          </ul>
        </div>

        <div className="bg-black/50 p-6 rounded-lg border border-green-500/20">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">4. Contact Information</h2>
          <div className="bg-cyan-500/10 p-4 rounded-lg border border-cyan-500/20">
            <h3 className="text-xl font-medium text-cyan-400 mb-3">Privacy Contact Information</h3>
            <p className="text-gray-300">For privacy-related questions, concerns, or requests:</p>
            <ul className="list-none space-y-2 mt-2 text-gray-300">
              <li><strong className="text-cyan-400">Privacy Officer Email:</strong> privacy@ifest.dau.ac.in</li>
              <li><strong className="text-cyan-400">General Contact:</strong> ifest@dau.ac.in</li>
              <li><strong className="text-cyan-400">Phone:</strong> Harshil: +91-1234567891, Manan: +91 93137 48496</li>
              <li><strong className="text-cyan-400">Address:</strong> DAU, Near Indroda Circle, Gandhinagar, Gujarat 382007</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-400 mt-8 p-4 border-t border-gray-800">
        <p>&copy; 2025 DAU i'Fest'25. All rights reserved.</p>
        <p className="text-sm">This Privacy Policy is effective as of December 2025 and may be updated without prior notice.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
