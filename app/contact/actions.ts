"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export const sendEmail = async (formData: FormData) => {
  try {
    const email = await resend.emails.send({
      from: `${formData.get("name")} <${formData.get("email")}>`, // Use the email from the form data as the sender,
      to: "tcollinst1i@gmail.com",
      subject: `${formData.get("subject")}` || "No Subject",
      html: `<div>
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${formData.get("name")}</p>
        <p><strong>Email:</strong> ${formData.get("email")}</p>
        <p><strong>Subject:</strong> ${formData.get("subject")}</p>
        <p><strong>Message:</strong>${formData.get("message")}</p>
        </div>
        `,
    });

    console.log("Email sent successfully:", email);
    // return email;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
