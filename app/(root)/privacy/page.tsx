import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            EMRChains Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Protecting the privacy and confidentiality of patient data is our
            utmost priority.
          </p>
        </div>

        {/* Content */}
        <div
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 md:p-3
        "
        >
          <section className="mb-8">
            <p className="text-gray-600 dark:text-gray-300">
              At EMRChains, we are committed to protecting the privacy and
              confidentiality of patient data. This Privacy Policy explains how
              we collect, use, and share personal information when you use our
              electronic medical record (EMR) system and related services (the
              "Services"). By accessing or using the Services, you acknowledge
              that you have read, understood, and agree to be bound by these
              Terms. If you do not agree to these Terms, you are not authorized
              to use the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Collection of Personal Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We collect personal information when you use the Services, such as
              your name, contact information, and other information that may be
              relevant to your health. We do not collect your personal medical
              history permanently. However, we may collect information about
              your use of the Services, such as your search queries and location
              data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Use of Personal Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We use the personal information we collect to provide and improve
              the Services, to communicate with you, and to comply with legal
              requirements. We may also use your personal information for
              research and analytics purposes, to personalize your experience,
              or for other purposes that we describe to you at the time of
              collection.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Sharing of Personal Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We will not share your personal information with any third parties
              without your permission. We may be required to share your personal
              information as required by law, such as in response to a court
              order or legal process.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Security of Personal Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We take reasonable measures to protect the personal information we
              collect from unauthorized access or disclosure. However, no
              security measures are completely foolproof and we cannot guarantee
              the security of your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Your Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              As a user of the Services, you have certain rights with regard to
              your personal information, including the right to access, rectify,
              erase, restrict, object to processing, and withdraw your consent.
              You also have the right to data portability, which allows you to
              request a copy of your personal information in a structured,
              commonly used, and machine-readable format. You may exercise these
              rights by contacting us at{" "}
              <a
                href="mailto:info@emrchains.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                info@emrchains.com
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our Services are not intended for children under the age of 18 and
              we do not knowingly collect personal information from children. If
              we become aware that we have collected personal information from a
              child, we will take steps to delete the information as soon as
              possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have any questions or concerns about our privacy practices,
              please contact us at{" "}
              <a
                href="mailto:info@emrchains.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                info@emrchains.com
              </a>
              . We are committed to working with you to resolve any issues or
              concerns you may have.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Changes to this Privacy Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We may update this Privacy Policy from time to time to reflect
              changes to our practices.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
