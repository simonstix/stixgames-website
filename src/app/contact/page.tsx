import { Layout } from "@/app/layout";
import ContactForm from "@/app/contact/contact-form";
import React from "react";

export default function Contact() {
  return (
    <Layout hoverOverContent={false}>
      <h1 className="mt-16 text-center text-4xl font-bold">Contact Form</h1>
      <ContactForm />
    </Layout>
  );
}
