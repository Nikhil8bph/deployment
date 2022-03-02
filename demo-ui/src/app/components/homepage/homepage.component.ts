import { UserserviceService } from './../../services/userservice.service';
import { User } from './../../common/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  userList: User[];
  successResponse: any;
  user = new User();
  constructor(private userService: UserserviceService,private _route:Router) { }

  ngOnInit(): void {
    this.userService.getUsersFromRemote().subscribe((data)=>{
      this.userList=JSON.parse(data)
      console.log(this.userList)
    })    
  }
  goToEdit(id:number)
  {
    console.log("id"+id);
    this._route.navigate(['/modify/'+id]);
  }
  goToAdd()
  {
    this._route.navigate(['/add']);
  }
  goToDelete(id:number)
  {
    this.userService.deleteUserFromRemote(id).subscribe(
      data=>{
        console.log(data)
        window.alert("deleted successfully")
        this.ngOnInit();
      }
    )
  }

}
