import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl} from '@angular/forms'
import { User } from '../Interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.css']
})
export class UserDashBoardComponent implements OnInit {

  private user!: User;
  userForm!: FormGroup;
  name!:String;
  emailId!:string;
  avatar="https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg";

  constructor(private userService:UserService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
this.userForm = this.formBuilder.group({
  emailId:[""],
  name:[""],
  avatar :["https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"]
})
  }
 getUser(id:number){
      this.userService.getUsers(id).subscribe(response=>{
        this.user=response;
      });
      this.emailId=this.user.data.email;
      this.avatar = this.user.data.avatar;
      this.name = (this.user.data.first_name+" "+this.user.data.last_name)
 }
}
