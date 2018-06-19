import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private accountService:AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.onAccountAdded({
      name:accountName,
      status:accountStatus
    });
  }
}
