import { Injectable } from '@angular/core';

export class Message {
  name: string;
  email: string;
  subject: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor() {}

  saveMessage(message): void {
    localStorage.setItem(message.subject, JSON.stringify(message));
  }
}
