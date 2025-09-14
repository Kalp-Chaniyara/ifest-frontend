import { FC } from 'react';
import { cn } from '@/lib/utils';

const RefundPolicy: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8 text-white">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
          Refund Policy
        </h1>
        <p className="text-gray-400">i'Fest'25 Cyber Pac Blueprint - DAIICT</p>
        <div className="text-sm text-gray-400 italic">
          Last Updated: December 2025
        </div>
      </div>

      <section className="space-y-6">
        <div className="bg-black/50 p-6 rounded-lg border border-red-500/20">
          <h2 className="text-2xl font-semibold text-red-400 mb-4">1. Refund Policy Overview</h2>
          <p className="text-gray-300">
            This Refund Policy outlines the terms and conditions for i'Fest'25 Cyber Pac Blueprint registrations. Please read this policy carefully before making your registration payment.
          </p>
          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <strong className="text-red-400">NO REFUND POLICY:</strong>{' '}
            <span className="text-gray-300">
              All registrations for i'Fest'25 are final. No refunds will be provided under any circumstances, including but not limited to cancellation, no-show, or any other reason.
            </span>
          </div>
        </div>

        <div className="bg-black/50 p-6 rounded-lg border border-red-500/20">
          <h2 className="text-2xl font-semibold text-red-400 mb-4">2. No Refund Policy - All Categories</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-black/60 rounded-lg">
              <thead>
                <tr>
                  <th className="px-4 py-3 bg-red-500/20 text-left text-red-400">Participant Category</th>
                  <th className="px-4 py-3 bg-red-500/20 text-left text-red-400">Pass Type</th>
                  <th className="px-4 py-3 bg-red-500/20 text-left text-red-400">Refund Policy</th>
                  <th className="px-4 py-3 bg-red-500/20 text-left text-red-400">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-red-500/10">
                  <td className="px-4 py-3 text-gray-300">DAIICT Students</td>
                  <td className="px-4 py-3 text-gray-300">Gold Pass (₹100)</td>
                  <td className="px-4 py-3 text-red-400">NO REFUND</td>
                  <td className="px-4 py-3 text-gray-300">Final</td>
                </tr>
                <tr className="border-t border-red-500/10">
                  <td className="px-4 py-3 text-gray-300">Non-DAIICT Students</td>
                  <td className="px-4 py-3 text-gray-300">Silver Pass (₹150)</td>
                  <td className="px-4 py-3 text-red-400">NO REFUND</td>
                  <td className="px-4 py-3 text-gray-300">Final</td>
                </tr>
                <tr className="border-t border-red-500/10">
                  <td className="px-4 py-3 text-gray-300">IEEE Members</td>
                  <td className="px-4 py-3 text-gray-300">Gold Pass (₹300)</td>
                  <td className="px-4 py-3 text-red-400">NO REFUND</td>
                  <td className="px-4 py-3 text-gray-300">Final</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-black/50 p-6 rounded-lg border border-red-500/20">
          <h2 className="text-2xl font-semibold text-red-400 mb-4">3. No Refund Policy - All Scenarios</h2>
          <h3 className="text-xl font-medium text-red-300 mb-3">3.1 Complete No Refund Policy</h3>
          <p className="text-gray-300 mb-4">
            i'Fest'25 operates under a strict NO REFUND policy. This means that once payment is made, no refunds will be provided under ANY circumstances, including but not limited to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong className="text-red-400">Event Cancellation:</strong> Even if the event is cancelled by organizers</li>
            <li><strong className="text-red-400">No-Show:</strong> Failure to attend the festival</li>
            <li><strong className="text-red-400">Medical Emergency:</strong> Any medical or health-related issues</li>
            <li><strong className="text-red-400">Travel Issues:</strong> Transportation problems or visa issues</li>
            <li><strong className="text-red-400">Technical Issues:</strong> System failures or duplicate payments</li>
          </ul>
        </div>

        <div className="bg-black/50 p-6 rounded-lg border border-red-500/20">
          <h2 className="text-2xl font-semibold text-red-400 mb-4">4. Contact Information</h2>
          <div className="bg-cyan-500/10 p-4 rounded-lg border border-cyan-500/20">
            <h3 className="text-xl font-medium text-cyan-400 mb-3">General Support Contact</h3>
            <p className="text-gray-300">For general inquiries and support (NOT refunds):</p>
            <ul className="list-none space-y-2 mt-2 text-gray-300">
              <li><strong className="text-cyan-400">Email:</strong> ifest25@daiict.ac.in</li>
              <li><strong className="text-cyan-400">Phone:</strong> +91-79-6826-1700</li>
              <li><strong className="text-cyan-400">Business Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM IST</li>
              <li><strong className="text-cyan-400">Address:</strong> DAIICT, Near Indroda Circle, Gandhinagar, Gujarat 382007</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-400 mt-8 p-4 border-t border-gray-800">
        <p>&copy; 2025 DAIICT i'Fest'25. All rights reserved.</p>
        <p className="text-sm">This Refund Policy is effective as of December 2025 and may be updated without prior notice.</p>
      </footer>
    </div>
  );
};

export default RefundPolicy;
