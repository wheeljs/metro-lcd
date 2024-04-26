import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangelogComponent } from './changelog.component';

@Injectable({
  providedIn: 'root',
})
export class ChangelogService {
  constructor(private modal: MatDialog) {}

  show() {
    this.modal.open(ChangelogComponent);
  }
}
