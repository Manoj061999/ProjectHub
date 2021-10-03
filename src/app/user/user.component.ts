import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute , Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userdetails = new FormGroup({
    firstname : new FormControl(''),
    lastname : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    mobile : new FormControl('')
  })
  user: any;
  userdata: any;
  constructor(private route : ActivatedRoute , private router : Router , private data : DataService ) { }

  ngOnInit() {
  }

  UserFunction(){
    console.log(this.userdetails.value);
  }

  UserDataFun(){
    this.data.Addusers(this.userdetails).subscribe((data: {})=> {
      console.log(data);
      this.user = data;
      this.userdata = this.user.message;
    })
  }

}
