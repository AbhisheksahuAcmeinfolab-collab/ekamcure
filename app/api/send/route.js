import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Form data extract karo
    const { name, phone, email, message } = await req.json();

    // Validation
    if (!name || !phone || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required" }),
        { status: 400 }
      );
    }

    // Zoho SMTP transporter setup
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 587,       // TLS
      secure: false,   // true for 465, false for 587
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_APP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // SMTP connection check (optional but helps debugging)
    await transporter.verify();

    // Send email
    await transporter.sendMail({
      from: `"Ekam Contact" <${process.env.ZOHO_USER}>`,
      to: ["shikhaacmeinfolab@gmail.com", "info@ekamcure.com"],
      cc: "kumar.amit.100894@gmail.com",
      subject: "New Contact Lead",
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6;">
          <h2>New Contact Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
          <hr/>
          <p style="font-size:12px; color:#555;">Received on: ${new Date().toLocaleString()}</p>
        </div>
      `,
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
