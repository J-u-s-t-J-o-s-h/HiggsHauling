import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email validation regex
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, address, dumpsterSize, rentalDuration, message } = body

    // Validate required fields
    if (!name || !phone || !email || !address || !dumpsterSize || !rentalDuration) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if email credentials are configured
    const emailUser = process.env.EMAIL_USER
    const emailPassword = process.env.EMAIL_PASSWORD
    const emailTo = process.env.EMAIL_TO || 'info@higgshauling.com'
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com'
    const smtpPort = parseInt(process.env.SMTP_PORT || '587')

    // If email is not configured, log to console (for development/testing)
    if (!emailUser || !emailPassword) {
      console.log('Email Configuration Missing - Contact Form Submission:')
      console.log('=====================================')
      console.log('Name:', name)
      console.log('Phone:', phone)
      console.log('Email:', email)
      console.log('Address:', address)
      console.log('Dumpster Size:', dumpsterSize)
      console.log('Rental Duration:', rentalDuration)
      console.log('Message:', message || 'N/A')
      console.log('=====================================')
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Form submitted successfully (email not configured - logged to console)' 
        },
        { status: 200 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    })

    // Email to business owner
    const mailOptions = {
      from: `"Higgs Hauling Website" <${emailUser}>`,
      to: emailTo,
      replyTo: email,
      subject: `New Quote Request - ${dumpsterSize} Dumpster`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #0a0a0a; color: #D4AF37; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 30px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0a0a0a; }
            .value { color: #333; margin-left: 10px; }
            .footer { background: #0a0a0a; color: #fff; padding: 15px; text-align: center; font-size: 12px; }
            .gold { color: #D4AF37; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎯 NEW QUOTE REQUEST</h1>
            </div>
            <div class="content">
              <h2 style="color: #D4AF37; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
                Customer Information
              </h2>
              
              <div class="field">
                <span class="label">Name:</span>
                <span class="value">${name}</span>
              </div>
              
              <div class="field">
                <span class="label">Phone:</span>
                <span class="value"><a href="tel:${phone}">${phone}</a></span>
              </div>
              
              <div class="field">
                <span class="label">Email:</span>
                <span class="value"><a href="mailto:${email}">${email}</a></span>
              </div>
              
              <div class="field">
                <span class="label">Service Address:</span>
                <span class="value">${address}</span>
              </div>
              
              <h2 style="color: #D4AF37; border-bottom: 2px solid #D4AF37; padding-bottom: 10px; margin-top: 30px;">
                Rental Details
              </h2>
              
              <div class="field">
                <span class="label">Dumpster Size:</span>
                <span class="value">${dumpsterSize}</span>
              </div>
              
              <div class="field">
                <span class="label">Rental Duration:</span>
                <span class="value">${rentalDuration}</span>
              </div>
              
              ${message ? `
              <h2 style="color: #D4AF37; border-bottom: 2px solid #D4AF37; padding-bottom: 10px; margin-top: 30px;">
                Additional Details
              </h2>
              <div class="field">
                <p style="background: #fff; padding: 15px; border-left: 3px solid #D4AF37;">${message}</p>
              </div>
              ` : ''}
              
              <div style="margin-top: 30px; padding: 20px; background: #fff8e1; border-left: 4px solid #D4AF37;">
                <p style="margin: 0; color: #333;">
                  <strong>⏰ Response Time:</strong> Contact this customer within 24 hours for best results.
                </p>
              </div>
            </div>
            <div class="footer">
              <p>This quote request was submitted via HiggsHauling.com</p>
              <p class="gold">Mission-driven service. On time. Every time.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
NEW QUOTE REQUEST - Higgs Hauling

CUSTOMER INFORMATION:
Name: ${name}
Phone: ${phone}
Email: ${email}
Address: ${address}

RENTAL DETAILS:
Dumpster Size: ${dumpsterSize}
Rental Duration: ${rentalDuration}

${message ? `ADDITIONAL DETAILS:\n${message}` : ''}

---
This quote request was submitted via HiggsHauling.com
Contact the customer within 24 hours for best results.
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: 'Quote request sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send quote request. Please try again or contact us directly.' },
      { status: 500 }
    )
  }
}

