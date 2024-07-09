import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'email-link-generator';
  generatedLink: string = '';

  subjectControl: FormControl = new FormControl('');
  bodyControl: FormControl = new FormControl('');
  emailControl: FormControl = new FormControl('');

  constructor(private snackBar: MatSnackBar) {

  }

  generateLink() {
    if (this.emailControl.value != '') {
      this.generatedLink = `mailto:${this.emailControl.value}`;

      if (this.subjectControl.value != '' || this.bodyControl.value != '') {
        this.generatedLink += '?';

        let subjectAdded = false;
        if (this.subjectControl.value != '') {
          this.generatedLink += `subject=${encodeURIComponent(this.subjectControl.value)}`;
          subjectAdded = true;
        }

        if (this.bodyControl.value != '') {
          if (subjectAdded) {
            this.generatedLink = '&';
          }
          this.generatedLink = `body=${encodeURIComponent(this.bodyControl.value)}`;
        }
      }
    }
  }

  copyToClipboard() {
    const textarea = document.createElement('textarea');
    console.log(this.subjectControl.value, this.emailControl.value)
    textarea.value = this.generatedLink;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    this.snackBar.open('Link copied to clipboard', 'Close', {
      duration: 2000,
    });
  }
}
