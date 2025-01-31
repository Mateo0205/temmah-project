import nodemailer from "nodemailer";

// Cette fonction gère l'envoi du message
export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // Configurer le transporteur Nodemailer avec Gmail (ou un autre service)
    const transporter = nodemailer.createTransport({
      service: "gmail", // Utilise le service que tu préfères
      auth: {
        user: process.env.EMAIL_USER, // Ton email pour l'envoi
        pass: process.env.EMAIL_PASS, // Ton mot de passe ou mot de passe d'application
      },
    });

    // Configuration du contenu du mail
    const mailOptions = {
      from: email, // L'email de l'utilisateur
      to: "ephraimanani7@gmail.com", // Ton email où recevoir le message
      subject: subject,
      text: `Message from ${name} (${email}):\n\n${message}`,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    // Utilisation de Response pour retourner une réponse JSON
    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send email",
        error,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
