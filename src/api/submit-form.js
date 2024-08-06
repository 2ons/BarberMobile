import { sendEmail } from '../../lib/sendEmail';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, datetime } = req.body;

    try {
      await sendEmail({
        to: 'kontakt@barbermobile.se',
        subject: 'Ny bokningsförfrågan',
        text: `
          Namn: ${name}
          E-post: ${email}
          Telefon: ${phone}
          Önskad tid: ${datetime}
        `
      });

      res.status(200).json({ message: 'Formulär skickat framgångsrikt' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Fel vid skickande av formulär' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
