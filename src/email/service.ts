import type { EmailAddress } from './email-address'

export type Email = {
  to: EmailAddress
  from: EmailAddress
  subject: string
  body: string
  isHtml: boolean
}

export type Sender = {
  send: (email: Email) => Promise<void | any>
}

export type EmailBackend = {
  send: (email: Email) => Promise<void | any>
}

export const createSender = (emailBackend: EmailBackend): Sender => {
  return {
    send: async (email) => {
      try {
        await emailBackend.send(email)
      } catch (error) {
        throw new Error('Email sending backend failed', { cause: error })
      }
    },
  }
}
