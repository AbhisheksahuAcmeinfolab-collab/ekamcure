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
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
