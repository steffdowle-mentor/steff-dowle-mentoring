
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  try {
    const contentType = req.headers['content-type'] || '';
    let data = req.body || {};

    if (typeof data === 'string') {
      data = Object.fromEntries(new URLSearchParams(data));
    }

    const { name, email, phone, message } = data;

    if (!name || !email || !message) {
      return res.status(400).send('Missing required fields');
    }

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).send('Email service not configured');
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Pathway Website <enquiries@pathwaymentoring.co.uk>',
        to: ['info@youthmentoring.co.uk'],
        reply_to: email,
        subject: 'New Pathway Mentoring Website Enquiry',
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone || 'Not provided'}`,
          '',
          'Message:',
          message
        ].join('\n')
      })
    });

    if (!response.ok) {
      console.error('Resend error:', response.status);
      return res.status(502).send('Unable to send enquiry');
    }

    return res.status(200).send(
      'Thank you. Your enquiry has been sent successfully.'
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).send('Unable to send enquiry');
  }
}
