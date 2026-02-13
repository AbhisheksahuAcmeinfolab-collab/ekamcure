import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const message = formData.get("message");
    const formattedMessage = message.replace(/\n/g, "<br>");

    const file = formData.get("report"); // 📎 FILE
    const pageUrl = formData.get("pageUrl");


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
  <div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">
    
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
      
      <tr>
        <td style="background: #0f172a; padding: 20px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0;">New Contact Enquiry</h2>
        </td>
      </tr>

      <tr>
        <td style="padding: 20px;">
          
          <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
            
            <tr>
              <td style="font-weight: bold; width: 150px;">Name:</td>
              <td>${name}</td>
            </tr>

            <tr style="background-color: #f9fafb;">
              <td style="font-weight: bold;">Phone:</td>
              <td>${phone}</td>
            </tr>

            <tr>
              <td style="font-weight: bold;">Email:</td>
              <td>${email}</td>
            </tr>

            <tr style="background-color: #f9fafb;">
              <td style="font-weight: bold;">Message:</td>
             <td>${formattedMessage}</td>

            </tr>

            <tr>
              <td style="font-weight: bold;">Submitted From:</td>
              <td>
                <a href="${pageUrl}" target="_blank" style="color:#2563eb;">
                  ${pageUrl}
                </a>
              </td>
            </tr>

          </table>

        </td>
      </tr>

      <tr>
        <td style="background: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #64748b;">
          This email was generated from EkamCure Website Contact Form.
        </td>
      </tr>

    </table>

  </div>
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
