import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    await resend.emails.send({
        from: 'bhushanvmulmule@gmail.com',
        to: 'bhushanvmulmule@gmail.com',
        subject: 'Test',
        react: <WelcomeTemplate name='Sam' />
    })

    return NextResponse.json({})
}