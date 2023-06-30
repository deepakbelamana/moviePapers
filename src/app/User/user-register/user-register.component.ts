import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mpuser } from 'src/app/model/mpuser';
import { MpuserService } from 'src/app/servers/mpuser.service';
import { ToasterComponent } from 'src/app/toaster/toaster.component';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  constructor(
    private mpuserService: MpuserService,
    private toastr: ToasterComponent,
    private router: Router
  ) {}

  toastMessage: string = '';
  showToast: boolean = false;
  isSuccess: boolean = false;

  ngOnInit(): void {}

  registerUserForm(mpUser: Mpuser) {
    console.log(mpUser);
    this.mpuserService.registerUser(mpUser).subscribe(
      (res: any) => {
        this.showToast = true;
        this.isSuccess = true;
        this.toastMessage = res;
        this.router.navigate(['login'])
      },
      (err) => {
        this.showToast = true;
        this.isSuccess = false;
        this.toastMessage = err.error;
      }
    );
  }
}
