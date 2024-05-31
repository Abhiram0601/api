import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  [x: string]: any;
  loginObj: any={
      "EmailId" : " ",
      "Password" : " "
    };
    constructor(private http: HttpClient,){}
    
    onLogin(){
      debugger;
      this.http.get('https://freeapi.miniprojectideas.com/api/User/GetAllUsers',this.loginObj).subscribe((res:any)=>{
        if(res.result){
          alert('Login Success')
          localStorage.setItem('loginToken',res.data.Token)
          this['router'].navigateByUrl('/dashboard')
        }else{
          alert(res.message);
        }
        })
      }
    }

