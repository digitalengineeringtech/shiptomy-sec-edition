import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact({
  name,
  email,
  phone,
  subject,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>📩 New Contact Form Submission</Heading>

          <Section style={section}>
            <Text><strong>Name:</strong> {name}</Text>
            <Text><strong>Email:</strong> {email}</Text>
            <Text><strong>Phone Number:</strong> {phone}</Text>
            <Text><strong>Subject:</strong> {subject}</Text>
          </Section>

          <Section style={section}>
            <Text><strong>Message:</strong></Text>
            <Text>{message}</Text>
          </Section>

          <Text style={footer}>This message was sent via Myanmar Express Hub contact form.</Text>
          <Text style={footer}>&copy; Copyright {new Date().getFullYear()} by{" "}
            <span className="font-bold pl-1">MYANMAR EXPRESS HUB</span>. All Rights
            Reserved.</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: "Arial, sans-serif",
  padding: "20px",
};

const container = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "24px",
  maxWidth: "600px",
  margin: "0 auto",
  border: "1px solid #e5e5e5",
};

const heading = {
  fontSize: "22px",
  marginBottom: "16px",
  color: "#333333",
};

const section = {
  marginBottom: "16px",
};

const footer = {
  fontSize: "12px",
  color: "#777777",
  marginTop: "20px",
};