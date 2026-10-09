import { NextResponse } from 'next/server'

const recipients = ['jimwyj5@gmail.com']

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character] ?? character)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const fields = {
      email: String(body.email ?? '').trim(),
      destination: String(body.destination ?? '').trim(),
      quantity: String(body.quantity ?? '').trim(),
      estimatedCbm: String(body.estimatedCbm ?? '').trim(),
      estimatedWeight: String(body.estimatedWeight ?? '').trim(),
      note: String(body.note ?? '').trim(),
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Server configuration error: RESEND_API_KEY is missing in Vercel.' }, { status: 503 })
    }
    if (!fields.email || !fields.destination || !fields.quantity) {
      return NextResponse.json({ error: 'Email, destination, and quantity are required.' }, { status: 400 })
    }

    const timestamp = new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'full',
      timeStyle: 'long',
      timeZone: 'Asia/Shanghai',
    }).format(new Date())

    const rows = [
      ['CONTACT EMAIL', fields.email],
      ['DESTINATION', fields.destination],
      ['QUANTITY', fields.quantity],
      ['ESTIMATED CBM', fields.estimatedCbm || '—'],
      ['ESTIMATED GROSS WEIGHT', fields.estimatedWeight || '—'],
      ['PROJECT NOTE', fields.note || '—'],
      ['RECEIVED AT', timestamp],
    ]

    // 修复：单独生成表格每一行，避免模板字符串嵌套解析失败
    let tableRowsHtml = ''
    for (const [label, val] of rows) {
      tableRowsHtml += `
        <tr>
          <td style="width: 35%; padding: 14px 10px; border-top: 1px solid #3a4045; color: #8f989d; letter-spacing: 1px; font-size: 12px;">
            ${escapeHtml(label)}
          </td>
          <td style="padding: 14px 10px; border-top: 1px solid #3a4045; color: #ffffff; font-size: 13px; font-weight: 500;">
            ${escapeHtml(val)}
          </td>
        </tr>
      `
    }

    const html = `
      <div style="background: #111418; color: #f4f1e8; padding: 32px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
        <div style="max-width: 680px; margin: auto; background: #161a1e; border: 1px solid #272d34; border-radius: 8px; padding: 28px;">
          <p style="color: #f26b38; font-size: 11px; letter-spacing: 2px; margin: 0 0 8px; text-transform: uppercase;">
            SUN LIGHT / RFQ TERMINAL
          </p>
          <h1 style="font-size: 24px; font-weight: 500; margin: 0 0 24px; color: #ffffff;">
            New manufacturing inquiry
          </h1>
          <table style="width: 100%; border-collapse: collapse;">
            <tbody>
              ${tableRowsHtml}
            </tbody>
          </table>
          <p style="color: #6b7280; font-size: 11px; margin-top: 28px; border-top: 1px solid #272d34; padding-top: 16px;">
            Generated automatically by SUN LIGHT CASSETTE MANUFACTURING LIMITED.
          </p>
        </div>
      </div>
    `

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY.trim()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: recipients,
        subject: `RFQ inquiry · ${fields.quantity} units · ${fields.destination}`,
        html,
      }),
    })

    const resData = await response.json().catch(() => null)

    if (!response.ok) {
      return NextResponse.json({ error: 'Email delivery failed.', resend_detail: resData }, { status: response.status })
    }

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return NextResponse.json({ error: 'Invalid inquiry payload.', detail: err?.message }, { status: 400 })
  }
}
