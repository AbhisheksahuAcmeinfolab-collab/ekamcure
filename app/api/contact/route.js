// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const { name, email, phone, message } = await req.json();

//     // SMTP configuration
//     const transporter = nodemailer.createTransport({
//       host: "152.59.185.70",
//       port: 465,
//       secure: false,
//       auth: {
//         // noreply@acmeinfolabs.com
//         user: "noreply@acmeinfolabs.com",
//         pass: "~%M]G{fbtChBY97_",
//       },
//     });

//     await transporter.sendMail({
//       from: "noreply@acmeinfolabs.com",
//       to: "rohitacmeinfolab@gmail.com",
//       subject: `New Message from ${name}`,
//       text: `
// Name: ${name}
// Email: ${email}
// Phone: ${phone}
 
// Message:
// ${message}
//       `,
//     });

//     return Response.json({ success: true });
//   } catch (error) {
//     console.log(error);
//     return Response.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

import { Resend } from "resend";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

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
