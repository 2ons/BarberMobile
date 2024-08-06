import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'your-smtp-host',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'your-email@example.com',
    pass: 'your-email-password'
  }
});

export async function sendEmail({ to, subject, text }) {
  const info = await transporter.sendMail({
    from: '"BarberMobile" <kontakt@barbermobile.se>',
    to,
    subject,
    text
  });

  console.log('Message sent: %s', info.messageId);
}

