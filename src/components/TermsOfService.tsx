import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </button>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: December 2024</p>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using CARVEIT TECH's services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
              <p className="text-gray-700 mb-4">
                CARVEIT TECH provides web development, mobile app development, and IT consulting services. 
                Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Custom website development and design</li>
                <li>Mobile application development for iOS and Android</li>
                <li>IT consulting and strategic technology planning</li>
                <li>Cloud migration and infrastructure services</li>
                <li>Ongoing maintenance and support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Client Responsibilities</h2>
              <p className="text-gray-700 mb-4">Clients agree to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide accurate and complete information necessary for project completion</li>
                <li>Respond to requests for feedback and approvals in a timely manner</li>
                <li>Make payments according to agreed terms and schedules</li>
                <li>Respect intellectual property rights and licensing agreements</li>
                <li>Use our services in compliance with applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment terms are specified in individual project agreements. Generally:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>A deposit is required before work begins</li>
                <li>Payments are due according to project milestones</li>
                <li>Late payments may incur additional fees</li>
                <li>All prices are in USD unless otherwise specified</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                Upon full payment, clients receive ownership of custom-developed code and designs 
                created specifically for their project. However:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>CARVEIT TECH retains rights to general methodologies and techniques</li>
                <li>Third-party components remain subject to their respective licenses</li>
                <li>CARVEIT TECH may showcase completed work in portfolios and marketing materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Warranties and Disclaimers</h2>
              <p className="text-gray-700 mb-4">
                We provide a 6-month warranty on our work covering defects in functionality. However:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>We do not guarantee specific business outcomes or results</li>
                <li>Third-party services and integrations are subject to their own terms</li>
                <li>We are not liable for issues arising from client modifications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                CARVEIT TECH's liability is limited to the amount paid for services. We are not liable 
                for indirect, incidental, or consequential damages including but not limited to loss 
                of profits, data, or business opportunities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate services with written notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Client pays for work completed to date</li>
                <li>CARVEIT TECH delivers completed work upon payment</li>
                <li>Confidentiality obligations continue</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>CARVEIT TECH</strong><br />
                  Email: carveittech@gmail.com<br />
                  Phone: +92 (348) 930-0422<br />
                  Address: Fazal e Haq Rd, Block D G 6/2 Blue Area, Islamabad, Pakistan
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;