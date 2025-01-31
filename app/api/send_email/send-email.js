import nodemailer from "nodemailer";

// Cette fonction gère l'envoi du message
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Configurer le transporteur Nodemailer avec Gmail (ou un autre service)
    const transporter = nodemailer.createTransport({
      service: "gmail", // Utilise le service que tu préfères
      auth: {
        user: process.env.EMAIL_USER, // Ton email pour l'envoi (ex : ton.email@gmail.com)
        pass: process.env.EMAIL_PASS, // Ton mot de passe ou mot de passe d'application
      },
    });

    // Configuration du contenu du mail
    const mailOptions = {
      from: email, // L'email de l'utilisateur
      to: process.env.EMAIL_USER, // Ton email où recevoir le message
      subject: subject,
      text: `Message from ${name} (${email}):\n\n${message}`,
    };

    try {
      // Envoi de l'email
      await transporter.sendMail(mailOptions);
      return res
        .status(200)
        .json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
