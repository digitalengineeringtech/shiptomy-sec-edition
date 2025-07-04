"use server";
import Contact from "@/emails/Contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_EMAIL_API_KEY);

    const { name, email, phone, subject, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "info@myanmarexpresshub.com",
      to: "info@myanmarexpresshub.com",
      subject: subject,
      react: Contact({ name, email, phone, subject, message }),
    });

    // console.log(data, error, "====================");

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
