import ContactForm from "@/app/contact/contact-form";
import React from "react";
import { Layout } from "@/app/page-layout";

export default function Contact() {
  return (
    <Layout hoverOverContent={false}>
      <h1 className="mt-16 text-center text-4xl font-bold">Contact Form</h1>
      <ContactForm />
    </Layout>
  );
}
