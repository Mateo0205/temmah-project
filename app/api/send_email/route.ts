import { NextApiRequest, NextApiResponse } from "next";
// import {Nodemailer}
import StripeWelcomeEmail from "@/react-email-starter/emails/stripe-welcome";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["ephraimanani7@gmail.com"],
        subject: "Hello world",
        react: StripeWelcomeEmail(),
      });

      if (error) {
        return res.status(500).json({ error });
      }

      return res.status(200).json(data);
    } catch (error) {
      alert("error");
      return res.status(500).json({ error });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
