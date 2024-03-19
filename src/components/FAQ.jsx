import React, { useEffect } from "react";

const FAQ = () => {
  useEffect(() => {
    const loadVoiceflowChatWidget = () => {
      const script = document.createElement("script");
      script.onload = () => {
        window.voiceflow.chat.load({
          verify: { projectID: "65bf916bb1559696681bd632" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
        });
      };
      script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      script.type = "text/javascript";
      document.getElementsByTagName("head")[0].appendChild(script);
    };

    loadVoiceflowChatWidget();

    // Cleanup function to remove the script when component unmounts
    return () => {
      const scripts = document.getElementsByTagName("script");
      for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src === "https://cdn.voiceflow.com/widget/bundle.mjs") {
          scripts[i].parentNode.removeChild(scripts[i]);
          break;
        }
      }
    };
  }, []);

  return (
    <div
      className="mt-56 flex flex-col text-center justify-center items-center"
      id="faq"
    >
      <h1 className="text-5xl font-semibold bg-gradient-to-r from-red-700 to-amber-400 bg-clip-text text-transparent">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
        <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
          <div class="py-12">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-3xl">What technologies do you use?</span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="40"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="40"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn text-xl">
                To build landing pages we use ReactJS and TailwindCSS. For Smart
                contracts we use Solidity coupled with Hardhat and for
                full-stack apps we use MongoDB and mongoose, NodeJS, ReactJS and
                TailwindCSS, and GraphQL.
              </p>
            </details>
          </div>
          <div class="py-12">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-3xl">
                  What are the prices of each service that you provide?
                </span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="40"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="40"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn text-xl">
                The price of our services can change from the project complexity
                and size. The price can also be discussed with us according to
                your project.
              </p>
            </details>
          </div>
          <div class="py-12">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-3xl">
                  Where can I get in touch with you?
                </span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="40"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="40"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn text-xl">
                If you are intrested in one of our services you can send us a
                message on X at @stackwareWeb or write us an email at
                stackwareweb@gmail.com
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
