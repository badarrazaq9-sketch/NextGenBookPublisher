declare module "nodemailer" {
  import { Transport, Transporter, SentMessageInfo } from "nodemailer";
  
  export function createTransport(options: any): Transporter;
  
  export interface Transporter {
    verify(): Promise<boolean>;
    sendMail(options: any): Promise<SentMessageInfo>;
  }
  
  export interface SentMessageInfo {
    messageId: string;
    accepted: string[];
    rejected: string[];
    pending: string[];
    response: string;
  }
}