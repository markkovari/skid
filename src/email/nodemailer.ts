import { createTransport } from 'nodemailer';

import type { EmailBackend } from './service'

// Docs: https://datatracker.ietf.org/doc/html/rfc788 and descendant RFCs
export type SMTPCredentials = {
    port: number,
    url: string,
    auth: {
        user: string,
        pass: string
    }
}

export const createSMTPBackend = ({ port, url, auth }: SMTPCredentials, service = "gmail"): EmailBackend => {
    const transmitter = createTransport({
        service, port, url, auth
    })
    return {
        send: ({ from, to, subject, body, isHtml, }) => transmitter.sendMail({
            to,
            from,
            subject,
            html: isHtml ? body : undefined,
            text: isHtml ? undefined : body,
        })
    }
}