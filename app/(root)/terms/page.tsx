import React from "react";

const TermsPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            EMRChains Terms and Conditions
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Your trusted platform for secure and efficient electronic medical
            records.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 md:p-10">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Welcome to EMRChains
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              EMRChains, a next-generation electronic medical record (EMR)
              system, leverages blockchain technology to improve the security,
              efficiency, and accuracy of patient data management. These terms
              and conditions (&quot;Terms&quot;) apply to your use of the
              EMRChains platform and services (&quot;Services&quot;) and form a
              legally binding agreement between you and EMRChains.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Scope of Services
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              EMRChains provides hospitals and patients with a secure and
              reliable platform for storing and managing electronic medical
              records (&quot;EMR&quot;). Our Services assist hospitals in
              improving the efficiency and accuracy of patient data management
              and provide patients access to their own medical records.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Privacy and Confidentiality
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              EMRChains is committed to protecting the privacy and
              confidentiality of patient data. We have no access to the data
              stored on our system and take reasonable measures to protect it
              from unauthorized access or disclosure.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Fees and Payment
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Hospitals that use our Services are required to pay a yearly
              license fee for access to our EMR system. Patients are not
              required to pay any fees for accessing their own medical records.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Termination
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              EMRChains reserves the right to terminate or suspend your access
              to the Services at any time, with or without notice, for any
              reason, including violation of these Terms or inappropriate use of
              the Services.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Disclaimer of Warranties
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              EMRChains provides the Services &quot;as is&quot; and makes no
              representations or warranties of any kind, express or implied, as
              to the operation of the Services or the information, content,
              materials, or products included on the Services.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Limitation of Liability
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              EMRChains will not be liable for any damages of any kind arising
              from the use of the Services, including but not limited to direct,
              indirect, incidental, punitive, and consequential damages.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Indemnification
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              You agree to indemnify and hold EMRChains and its affiliates,
              officers, agents, and employees harmless from any claim or demand,
              including reasonable attorneys' fees, made by any third party.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
