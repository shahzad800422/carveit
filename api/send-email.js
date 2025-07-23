const nodemailer = require('nodemailer');

// Gmail SMTP configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'carveittech@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD // App-specific password
  }
});

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, service, budget, message } = req.body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        success: false 
      });
    }

    // Email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: linear-gradient(135deg, #3B82F6, #1E40AF); color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .info-box { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #3B82F6; }
          .footer { background: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
          .label { font-weight: bold; color: #1E40AF; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🚀 New Quote Request - CARVEIT TECH</h1>
          <p>A potential client has submitted a quote request</p>
        </div>
        
        <div class="content">
          <div class="info-box">
            <p><span class="label">👤 Name:</span> ${name}</p>
            <p><span class="label">📧 Email:</span> ${email}</p>
            <p><span class="label">🏢 Company:</span> ${company || 'Not provided'}</p>
            <p><span class="label">🛠️ Service Interest:</span> ${service}</p>
            <p><span class="label">💰 Budget:</span> ${budget || 'Not specified'}</p>
          </div>
          
          <div class="info-box">
            <p><span class="label">📝 Project Details:</span></p>
            <p style="background: #f0f0f0; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          
          <div class="info-box">
            <p><span class="label">⏰ Submitted:</span> ${new Date().toLocaleString()}</p>
            <p><span class="label">🌐 Source:</span> CARVEIT TECH Website Contact Form</p>
          </div>
        </div>
        
        <div class="footer">
          <p>This email was automatically generated from your website contact form.</p>
          <p>CARVEIT TECH - Web Development & IT Consulting</p>
        </div>
      </body>
      </html>
    `;

    const textContent = `
New Quote Request - CARVEIT TECH

Client Information:
- Name: ${name}
- Email: ${email}
- Company: ${company || 'Not provided'}
- Service Interest: ${service}
- Budget: ${budget || 'Not specified'}

Project Details:
${message}

Submitted: ${new Date().toLocaleString()}
Source: CARVEIT TECH Website Contact Form
    `;

    // Email options
    const mailOptions = {
      from: `"CARVEIT TECH Website" <${process.env.GMAIL_USER || 'carveittech@gmail.com'}>`,
      to: 'carveittech@gmail.com',
      subject: `🚀 New Quote Request from ${name} - ${service}`,
      text: textContent,
      html: htmlContent,
      replyTo: email
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send email',
      details: error.message
    });
  }
}