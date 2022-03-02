import { Router } from '@angular/router';
import { User } from './../../common/user';
import { UserserviceService } from './../../services/userservice.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addpage',
  templateUrl: './addpage.component.html',
  styleUrls: ['./addpage.component.scss']
})
export class AddpageComponent implements OnInit {

  user = new User();
  constructor(private _route:Router,private _service:UserserviceService) { }

  ngOnInit(): void {
    
  }

  addUserformsubmit(){
    this._service.addUserToRemote(this.user).subscribe
    (
      data=> {
        console.log(data);
        window.alert("Successfully updated");
        this._route.navigate(['home']);
      },
      error=>console.log("error")
    )
  }
  gotolist(){
    this._route.navigate(['home']);
  }
}
