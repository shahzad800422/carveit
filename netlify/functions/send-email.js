const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ 
        error: 'Method not allowed',
        success: false 
      })
    };
  }

  try {
    // Parse request body
    const { name, email, company, service, budget, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !service || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Missing required fields: name, email, service, and message are required',
          success: false 
        })
      };
    }

    // Gmail SMTP configuration
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.GMAIL_USER || 'carveittech@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || 'Ali@123456'
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Test connection
    await transporter.verify();

    // Email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            margin: 0; 
            padding: 0;
          }
          .container { max-width: 600px; margin: 0 auto; }
          .header { 
            background: linear-gradient(135deg, #3B82F6, #1E40AF); 
            color: white; 
            padding: 30px 20px; 
            text-align: center; 
            border-radius: 8px 8px 0 0;
          }
          .content { 
            padding: 30px 20px; 
            background: #f8fafc; 
            border-radius: 0 0 8px 8px;
          }
          .info-box { 
            background: white; 
            padding: 20px; 
            margin: 15px 0; 
            border-radius: 8px; 
            border-left: 4px solid #3B82F6; 
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .label { 
            font-weight: 600; 
            color: #1E40AF; 
            display: inline-block;
            min-width: 120px;
          }
          .message-box {
            background: #f1f5f9;
            padding: 20px;
            border-radius: 8px;
            margin-top: 15px;
            border: 1px solid #e2e8f0;
          }
          .footer { 
            background: #1f2937; 
            color: #9ca3af; 
            padding: 20px; 
            text-align: center; 
            font-size: 14px; 
            border-radius: 8px;
            margin-top: 20px;
          }
          .priority { color: #dc2626; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 New Quote Request</h1>
            <h2>CARVEIT TECH</h2>
            <p>A potential client has submitted a quote request through your website</p>
          </div>
          
          <div class="content">
            <div class="info-box">
              <h3 style="margin-top: 0; color: #1E40AF;">👤 Client Information</h3>
              <p><span class="label">Name:</span> ${name}</p>
              <p><span class="label">Email:</span> <a href="mailto:${email}">${email}</a></p>
              <p><span class="label">Company:</span> ${company || 'Not provided'}</p>
              <p><span class="label">Service:</span> <span class="priority">${service}</span></p>
              <p><span class="label">Budget:</span> ${budget || 'Not specified'}</p>
            </div>
            
            <div class="info-box">
              <h3 style="margin-top: 0; color: #1E40AF;">📝 Project Details</h3>
              <div class="message-box">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div class="info-box">
              <h3 style="margin-top: 0; color: #1E40AF;">📊 Submission Details</h3>
              <p><span class="label">Submitted:</span> ${new Date().toLocaleString('en-US', { 
                timeZone: 'America/Los_Angeles',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })} PST</p>
              <p><span class="label">Source:</span> CARVEIT TECH Website Contact Form</p>
              <p><span class="label">IP Address:</span> ${event.headers['x-forwarded-for'] || 'Unknown'}</p>
            </div>
          </div>
          
          <div class="footer">
            <p><strong>Next Steps:</strong></p>
            <p>1. Reply to this email to respond directly to the client</p>
            <p>2. Add to CRM system for follow-up tracking</p>
            <p>3. Send quote within 24 hours for best conversion</p>
            <hr style="border: 1px solid #374151; margin: 20px 0;">
            <p>This email was automatically generated from your CARVEIT TECH website contact form.</p>
            <p>🌐 <strong>CARVEIT TECH</strong> - Web Development & IT Consulting</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const textContent = `
NEW QUOTE REQUEST - CARVEIT TECH
================================

Client Information:
- Name: ${name}
- Email: ${email}
- Company: ${company || 'Not provided'}
- Service Interest: ${service}
- Budget: ${budget || 'Not specified'}

Project Details:
${message}

Submission Details:
- Submitted: ${new Date().toLocaleString()}
- Source: CARVEIT TECH Website Contact Form
- IP: ${event.headers['x-forwarded-for'] || 'Unknown'}

---
This email was automatically generated from your website contact form.
CARVEIT TECH - Web Development & IT Consulting
    `;

    // Email options
    const mailOptions = {
      from: `"CARVEIT TECH Website" <carveittech@gmail.com>`,
      to: 'carveittech@gmail.com',
      subject: `🚀 New Quote Request from ${name} - ${service} [${budget || 'Budget TBD'}]`,
      text: textContent,
      html: htmlContent,
      replyTo: email,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', {
      messageId: info.messageId,
      response: info.response,
      accepted: info.accepted,
      rejected: info.rejected
    });
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully via Gmail SMTP',
        messageId: info.messageId,
        timestamp: new Date().toISOString()
      })
    };

  } catch (error) {
    console.error('Email sending error:', {
      message: error.message,
      code: error.code,
      command: error.command,
      stack: error.stack
    });
    
    // Return detailed error for debugging
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false, 
        error: 'Failed to send email via Gmail SMTP',
        details: error.message,
        code: error.code || 'UNKNOWN_ERROR',
        timestamp: new Date().toISOString()
      })
    };
  }
};