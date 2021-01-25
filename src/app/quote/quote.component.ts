import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message, QuoteService } from './quote.service';
import { Component, OnInit } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  form: FormGroup;
  nameControl: FormControl;
  emailControl: FormControl;
  subjectControl: FormControl;
  contentControl: FormControl;

  isSent: boolean = false;

  constructor(private quoteService: QuoteService) {}

  sendMessage(): void {
    const message = new Message();
    message.content = this.contentControl.value;
    message.name = this.contentControl.value;
    message.subject = this.contentControl.value;
    message.email = this.contentControl.value;
    this.quoteService.saveMessage(message);
    this.isSent = true;
  }

  ngOnInit(): void {
    this.nameControl = new FormControl('', Validators.required);
    this.emailControl = new FormControl('', Validators.required);
    this.subjectControl = new FormControl('', Validators.required);
    this.contentControl = new FormControl('', Validators.required);
    this.form = new FormGroup({
      name: this.nameControl,
      email: this.emailControl,
      subject: this.subjectControl,
      content: this.contentControl,
    });
  }
}
