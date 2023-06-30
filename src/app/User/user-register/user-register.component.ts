import { Component, OnInit } from '@angular/core';
import { Mpuser } from 'src/app/model/mpuser';
import { MpuserService } from 'src/app/servers/mpuser.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private mpuserService : MpuserService) { }

  ngOnInit(): void {
  }

  registerUserForm(mpUser :Mpuser) {
      console.log(mpUser);
     this.mpuserService.registerUser(mpUser).subscribe((res:any)=>{
        alert(res.email)
     },(err)=>{
      alert(err)
      console.log(err)
     })
  }
}
