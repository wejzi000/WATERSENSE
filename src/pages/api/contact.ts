import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { user_name, user_email, message } = req.body;

  if (!user_name || !user_email || !message) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  // Configurez ici votre transporteur SMTP (exemple Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER, // à définir dans .env.local
      pass: process.env.SMTP_PASS, // à définir dans .env.local
    },
  });

  try {
    await transporter.sendMail({
      from: user_email,
      to: 'oudjedenezioui@gmail.com',
      subject: `Contact via site WaterSense de ${user_name}`,
      text: message,
      html: `<p><b>Nom:</b> ${user_name}</p><p><b>Email:</b> ${user_email}</p><p><b>Message:</b><br/>${message}</p>`
    });
    return res.status(200).json({ message: 'Message envoyé !' });
  } catch (error) {
    return res.status(500).json({ message: 'Erreur lors de l\'envoi', error });
  }
}
