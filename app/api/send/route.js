import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const message = formData.get("message");
    const file = formData.get("report"); // 📎 FILE

    if (!name || !phone || !email || !message || !file) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields required" }),
        { status: 400 }
      );
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_APP_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    await transporter.sendMail({
      from: `"Ekam Contact" <${process.env.ZOHO_USER}>`,
      to: ["shikhaacmeinfolab@gmail.com", "info@ekamcure.com"],
      cc: "kumar.amit.100894@gmail.com",
      subject: "New Contact Lead (With Report)",
      html: `
        <h2>New Contact Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
      attachments: [
        {
          filename: file.name,
          content: fileBuffer,
        },
      ],
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("SMTP ERROR:", err);
    return new Response(
      JSON.stringify({ success: false, message: err.message }),
      { status: 500 }
    );
  }
}

export async function GET() {
  return new Response(
    JSON.stringify({ message: "Method Not Allowed" }),
    { status: 405 }
  );
}
