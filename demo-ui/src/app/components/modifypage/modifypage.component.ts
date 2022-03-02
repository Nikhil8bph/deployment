import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../../common/user';
import { UserserviceService } from './../../services/userservice.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-modifypage',
  templateUrl: './modifypage.component.html',
  styleUrls: ['./modifypage.component.scss']
})
export class ModifypageComponent implements OnInit {

  user = new User();
  constructor(private _route:Router,private _service:UserserviceService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let name=parseInt(this._activatedRoute.snapshot.paramMap.get('id'))
    this._service.getUserFromRemote(name).subscribe(
      data=> {        
        console.log("Data received : "+data);
        this.user=JSON.parse(data);
      },
      error=>console.log(error)
    )
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
