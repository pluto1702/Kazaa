import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-file-area',
  templateUrl: './file-area.component.html',
  styleUrls: ['./file-area.component.css'],
})
export class FileAreaComponent {
  constructor(private authService: AuthService, private router: Router) {}
  download() {
    if (this.authService.isLoggedIn == false) {
      alert('You are not logged in buddy. Unauthorized Feature');
      this.router.navigate(['/auth']);
    } else {
      alert('User signed in: Download Authorized');
    }
  }
}
