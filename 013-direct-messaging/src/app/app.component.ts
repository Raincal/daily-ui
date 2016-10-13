import { Component, OnInit } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myMessage: string = '';
  messages: Message[] = [
    {
      sender: 1,
      message: 'This is a message, yo',
    },
    {
      sender: 1,
      message: 'This is a second message from the same person!'
    },
    {
      sender: 2,
      message: 'This is a reply, boo!'
    }
  ];

  ngOnInit() {
    let $messageInput = <HTMLInputElement>document.querySelector('.messageInput');
    $messageInput.focus();
  }

  setClass(message) {
    return message.sender === 1 ? 'Message--you' : 'Message--them';
  }

  onSubmit() {
    if (this.myMessage) {
      this.messages.push({
        sender: 1,
        message: this.myMessage
      });

      this.myMessage = '';
      this.reply();
      this.scrollWindow();
    }
  }

  scrollWindow() {
    let $container = <HTMLDivElement>document.querySelector('.container');
    setTimeout(() => {
      $container.scrollTop = $container.scrollHeight;
    }, 500);
  }

  reply() {
    setTimeout(() => {
      this.messages.push({
        sender: 2,
        message: 'I\'m a made up message yo, sent every time you reply'
      });
    }, 500);
  }
}
