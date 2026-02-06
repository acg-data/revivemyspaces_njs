import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, spaceType, message } = await request.json();

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const emailContent = `
New Consultation Request - Revive My Spaces

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Space Type: ${spaceType}
Message: ${message || 'No additional message'}

---
This request came from the Revive My Spaces website contact form.
    `.trim();

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: ['hello@revivemyspaces.com'],
      subject: 'New Consultation Request - Revive My Spaces',
      text: emailContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({
      success: true,
      message: 'Request submitted successfully'
    });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
