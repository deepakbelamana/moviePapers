import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mpuser } from 'src/app/model/mpuser';
import { MpuserService } from 'src/app/servers/mpuser.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor( private mpuserService: MpuserService,
    private router:Router ) { }

  toastMessage: string = '';
  showToast: boolean = false;
  isSuccess: boolean = false;

  ngOnInit(): void {
  }
  loginUser(mpUser : Mpuser)
  {
      this.mpuserService.loginUser(mpUser).subscribe((response)=>{
        this.showToast=true;
        this.isSuccess=true;
        this.toastMessage=response;
        setTimeout(()=>{
          this.router.navigate(['/']);
        })
      },(error)=>{
        console.log(error)
        this.showToast = true;
        this.isSuccess = false;
        this.toastMessage = error.error;
      })
  }
}
