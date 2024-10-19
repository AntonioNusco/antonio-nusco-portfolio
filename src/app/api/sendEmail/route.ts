// app/api/sendEmail/route.ts
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  // Crea un oggetto transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Sostituisci con il tuo server SMTP
    port: 465, // Sostituisci con la porta SMTP corretta
    secure: true, // true per 465, false per altre porte
    auth: {
      user: process.env.SMTP_USER, // Assicurati di impostare questa variabile d'ambiente
      pass: process.env.SMTP_PASS, // Assicurati di impostare questa variabile d'ambiente
    },
  });

  // Opzioni dell'email
  const mailOptions = {
    from: email, // Indirizzo email del mittente
    to: "dev.antonio.nusco@gmail.com", // Il tuo indirizzo email
    subject: subject,
    text: `Hai un nuovo messaggio da ${name} (${email}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email inviata con successo!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Errore nell'invio dell'email." }, { status: 500 });
  }
}
