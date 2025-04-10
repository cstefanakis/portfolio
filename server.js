import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Replace with your real email and credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'christosste86@gmail.com',
      pass: 'jjwa zagt ihvd ssko' // Not your email password!
    }
  });

  const mailOptions = {
    from: email,
    to: 'christosste86@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    text: message,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Email failed.' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
