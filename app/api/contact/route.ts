import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Basic Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // Local / Development mock fallback if key is missing
    if (!apiKey || apiKey === "re_..." || apiKey.includes("your_resend_api_key")) {
      console.warn("RESEND_API_KEY is not set. Mocking email submission locally.");
      console.log("---- MOCK EMAIL SUBMISSION ----");
      console.log(`From Name: ${name}`);
      console.log(`From Email: ${email}`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log("-------------------------------");
      
      // Delay to simulate network latency
      await new Promise((resolve) => setTimeout(resolve, 600));

      return NextResponse.json({
        success: true,
        message: "Mock submission successful (local dev).",
      });
    }

    const resend = new Resend(apiKey);

    // Resend email delivery
    // Note: Free tier account requires sending from onboarding@resend.dev to the registered account owner.
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "thamymabena@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject} — from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #111927; border: 1px solid #1e2d42; padding: 24px;">
          <h2 style="border-bottom: 2px solid #00d4aa; padding-bottom: 8px; color: #00d4aa;">New Contact Message</h2>
          <p style="margin-top: 20px;"><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #1e2d42; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; line-height: 1.6; background-color: #f9fafb; padding: 16px; border-radius: 4px;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Internal server error.";
    console.error("Contact API handler error:", error);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
