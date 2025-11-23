/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const entries: Record<string, any> = {};
    let file: File | null = null;

    form.forEach((value, key) => {
      if (value instanceof File) {
        file = value;
      } else {
        entries[key] = value;
      }
    });

    const formType = entries.formType || "general";
    const userEmail = entries.email || entries.userEmail; // adapt as needed
    const userName = entries.name || entries.firstName || "User";

    delete entries.formType;

    const subjects: Record<string, string> = {
      careers: "New Career Application Submission",
      contact: "New Contact Form Submission",
      general: "New Form Submission",
    };

    const subject = subjects[formType] || subjects.general;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let attachments: any[] = [];
    if (file) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const arrayBuffer = await (file as any)?.arrayBuffer();
      attachments.push({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        filename: (file as any)?.name || "attachment.pdf",
        content: Buffer.from(arrayBuffer),
      });
    }

    const formattedFields = Object.entries(entries)
      .map(
        ([key, value]) => `
        <tr>
          <td style="padding:6px 10px; border:1px solid #ddd;"><b>${key}</b></td>
          <td style="padding:6px 10px; border:1px solid #ddd;">${value}</td>
        </tr>
      `
      )
      .join("");

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; padding:20px;">
        <h2>${subject}</h2>
        <p>You received a new <b>${formType}</b> form submission.</p>

        <table style="border-collapse: collapse; width:100%; margin-top:20px;">
          ${formattedFields}
        </table>

        ${file ? `<p style="margin-top:20px;">A file has been attached.</p>` : ""}
      </div>
    `;

    const response = await resend.emails.send({
      from: "Sygence Forms <onboarding@resend.dev>", // verified sender domain
      to: process.env.OWNER_EMAIL!,
      subject,
      html: htmlTemplate,
      attachments,
      
      // THIS ENABLES THREAD CONTINUATION
      replyTo: userEmail,
    });

    return NextResponse.json({ success: true, response });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

/* eslint-enable @typescript-eslint/no-explicit-any */
