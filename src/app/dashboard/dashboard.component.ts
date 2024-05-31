import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  user:any[]=[];
  users: any;
  constructor(private http:HttpClient){

  }
  loadUsers(){
    this.http.get('https://freeapi.miniprojectideas.com/api/User/GetAllUsers').subscribe((res:any)=>{
      this.users= res.data;
      

    })

  }

}
