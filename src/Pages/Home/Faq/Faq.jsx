import React from "react";

const Faq = () => {
  return (
    <section className="lg:max-w-[80%] mx-auto font-dosis p-3">
      <h1 className="lg:text-5xl text-3xl text-center font-bold">
        Frequently Asked Questions?
      </h1>
      <div
        className="mt-12 font-epunda"
        id="accordion-color"
        data-accordion="collapse"
        data-active-classname="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
      >
        <h2 id="accordion-color-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-color-body-1"
            aria-expanded="true"
            aria-controls="accordion-color-body-1"
          >
            <span className="text-xl">How secure is my data on Emplify?</span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-color-body-1"
          className="hidden"
          aria-labelledby="accordion-color-heading-1"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="opacity-60">
              Your data is protected with enterprise-grade encryption and strict
              privacy controls, ensuring confidentiality and compliance with
              global security standards.
            </p>
          </div>
        </div>
        <h2 id="accordion-color-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-color-body-2"
            aria-expanded="false"
            aria-controls="accordion-color-body-2"
          >
            <span className="text-xl">
              Can Emplify integrate with other tools we already use?
            </span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-color-body-2"
          className="hidden"
          aria-labelledby="accordion-color-heading-2"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="opacity-60">
              Yes, Emplify integrates seamlessly with popular tools like Slack,
              Google Workspace, and Microsoft Teams to fit into your existing
              workflow.
            </p>
          </div>
        </div>
        <h2 id="accordion-color-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-color-body-3"
            aria-expanded="false"
            aria-controls="accordion-color-body-3"
          >
            <span className="text-xl">
              Is Emplify suitable for small teams as well as large
              organizations?
            </span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-color-body-3"
          className="hidden"
          aria-labelledby="accordion-color-heading-3"
        >
          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="opacity-60">
              Absolutely! Emplify scales easily, offering flexible features for
              startups, growing teams, and enterprises with thousands of
              employees.
            </p>
          </div>
        </div>
        <h2 id="accordion-color-heading-4">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-color-body-4"
            aria-expanded="false"
            aria-controls="accordion-color-body-4"
          >
            <span className="text-xl">
              Do employees need training to use Emplify?
            </span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-color-body-4"
          className="hidden"
          aria-labelledby="accordion-color-heading-4"
        >
          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="opacity-60">
              Not at all. Emplify’s intuitive design makes it easy to adopt.
              Most teams get started without formal training.
            </p>
          </div>
        </div>
        <h2 id="accordion-color-heading-5">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-color-body-5"
            aria-expanded="false"
            aria-controls="accordion-color-body-5"
          >
            <span className="text-xl">
              What kind of support does Emplify provide?
            </span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-color-body-5"
          className="hidden"
          aria-labelledby="accordion-color-heading-5"
        >
          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="opacity-60">
              We provide 24/7 customer support via chat, email, and phone, along
              with detailed documentation and onboarding assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
