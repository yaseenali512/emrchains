import React from "react";

type Plan = {
  name: string;
  price: number;
  duration: string;
  features: string[];
};

type PricingProps = {
  plans: Plan[];
};

const Pricing: React.FC<PricingProps> = ({ plans }) => {
  return (
    <section className="pricing-section">
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Plans & Pricing
            </h2>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
              >
                <h3 className="mb-4 text-2xl font-semibold">{plan.name}</h3>
                <div className="flex justify-center items-baseline">
                  <span className="mr-2 mb-2 text-2xl font-extrabold">
                    {plan.price}
                  </span>
                </div>
                {/* Horizontal Row */}
                <hr className="my-2 border-gray-300 dark:border-gray-700" />
                <ul role="list" className="mb-8 space-y-3 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
                >
                  Get started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Pricing;
