// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const { name, phone, email, message } = await req.json();

//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: false,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: "abhisheksahuacmeinfolab@gmail.com",
//       subject: `New Contact Form Message`,
//       text: `
//       Name: ${name}
//       Phone: ${phone}
//       Email: ${email}
//       Message:
//       ${message}
//        `,
//     });
//     return Response.json({ success: true });
//   } catch (error) {
//     console.log("Email error:", error);
//     return Response.json({ success: false, error });
//   }
// }


// Resend
import { Resend } from "resend";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();
    
      // Debugging: check if API key is available
  console.log("Resend API Key:", process.env.RESEND_API_KEY);
    
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
    //   from: "onboarding@resend.dev",
      from: "noreply@acmeinfolabs.com",
      to: "abhisheksahuacmeinfolab@gmail.com",
      subject: `New Message from ${name}`,
      phone: `Mobile No. ${phone}`,
      text: `Email: ${email}\n\n${message}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
