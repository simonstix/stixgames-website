"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

// https://formspr.ee/react-help
function ContactFormInner() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [state, handleSubmit] = useForm("xgvewvve", {
    data: { "g-recaptcha-response": executeRecaptcha },
  });

  if (state.succeeded) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="my-4 text-3xl">Email sent!</h1>
        <p>Thank you for getting in touch!</p>
      </div>
    );
  }
  return (
    <div className="m-4 sm:m-16">
      <form onSubmit={handleSubmit} className="mx-auto max-w-sm">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-white"
          >
            Your email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="shadow-sm-light block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-2 text-xs text-red-500"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            className="shadow-sm-light block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="mt-2 text-xs text-red-500"
          />
        </div>

        <div className="g-recaptcha-notice appear fade-up my-4">
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            className="text-blue-600 hover:text-blue-800"
          >
            {" "}
            Privacy Policy{" "}
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            className="text-blue-600 hover:text-blue-800"
          >
            Terms of Service
          </a>{" "}
          apply.
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default function ContactForm() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfUOaofAAAAAMm7ji2oEUfQpnZLdIpytLNq0Lzm">
      <ContactFormInner />
    </GoogleReCaptchaProvider>
  );
}
