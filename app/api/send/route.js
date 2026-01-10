import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, phone, email, message } = await req.json();

    // Validation
    if (!name || !phone || !email || !message) {
      return new Response(JSON.stringify({ success: false, message: "All fields required" }), { status: 400 });
    }

    // Switch between Zoho and Gmail
    const useZoho = true; // change to false if you want Gmail

    const transporter = nodemailer.createTransport(
      useZoho
        ? {
            host: "smtp.zoho.com",
            port: 465,
            secure: true, // SSL
            auth: { user: process.env.ZOHO_USER, pass: process.env.ZOHO_APP_PASS },
          }
        : {
            service: "gmail",
            auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
          }
    );

    // Send mail
    await transporter.sendMail({
      from: `"Contact Form" <${useZoho ? process.env.ZOHO_USER : process.env.GMAIL_USER}>`,
      to: useZoho ? process.env.ZOHO_USER : process.env.GMAIL_USER,
      subject: "New Contact Form Message",
      html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: "Server Error" }), { status: 500 });
  }
}
