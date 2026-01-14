import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, phone, email, message } = await req.json();

    if (!name || !phone || !email || !message) {
      return Response.json({ success:false, message:"All fields required" }, {status:400});
    }

    const transporter = nodemailer.createTransport({
      host: "smtppro.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_APP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Ekam Contact" <${process.env.ZOHO_USER}>`,
      to: [
        "shikhaacmeinfolab@gmail.com",
        "info@ekamcure.com"
      ],
      cc: "kumar.amit.100894@gmail.com",
      subject: "New Contact Lead",
      html: `
       <div style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.6; color: #333;">
        <h2 style="margin:0 0 10px 0; color:#0e3a8a;">New Contact Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
        <hr style="margin: 20px 0; border:0; border-top:1px solid #ccc;" />
        <p style="font-size:13px; color:#777;">Received on: ${new Date().toLocaleString()}</p>
      </div>
      `,
    });

    return Response.json({ success:true }, {status:200});

  } catch (err) {
    console.log("SMTP ERROR:", err);
    return Response.json({ success:false, message:err.message }, {status:500});
  }
}
