import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Address } from 'src/app/shared/models/address';
import { User } from 'src/app/shared/models/user';
import { AddressService } from 'src/app/shared/services/address.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent /*V1: implements OnInit*/ {
  user: User ={};
  address: Address={};
  
  registerForm = new FormGroup({
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    passwordConf: new FormControl(''),
    usraddress: new FormGroup({
      addressLine1: new FormControl(''),
      addressLine2: new FormControl(''),
      city: new FormControl('')
    })
  });

  constructor(private _userService: UserService, private _addressService: AddressService) {
  }
  
  createUser(){
    this.createAddr();
    this.createUsr();
  }

  createAddr(){
    this.address.addressLine1 = this.registerForm.value.usraddress?.addressLine1!;
    this.address.addressLine2 = this.registerForm.value.usraddress?.addressLine2!;
    this.address.cityInsee = "34296";
    console.log("RegsterForm-createAddress-this.address", this.address);
    console.log("RegsterForm-createAddress-thisregiserForm", this.registerForm.value.usraddress);

    this._addressService
      .create(this.address)
      .subscribe(() => {console.log("User address created")})
}

  createUsr(){
    console.log("RegsterForm-createUser1", this.registerForm.value);
    this.user.lastName = this.registerForm.value.lastName!;
    this.user.firstName = this.registerForm.value.firstName!;
    this.user.email=this.registerForm.value.email!;
    this.user.password=this.registerForm.value.password!;
    this.user.role="USER";
    this.user.addressId = 1;
    this.user.userStatusIds = [];
    this.user.bookmarkIds = [];
    this.user.topicIds = [];
    this.user.threadIds = [];
    this.user.messageIds = [];
    this.user.reactionIds = [];

    console.log("RegsterForm-createUser2", this.registerForm.value);
    this._userService
      .create(this.user)
      .subscribe(() => {console.log("User created")})

  }
}
 

/* M S05.09: OLD CLASS 
  export class RegisterFormComponent {
    user: User ={};
  
    constructor(private _userService: UserService){}
  
    createUser(){
      console.log("RegsiterForm-CreateUser:1", this.user);
      this.user.role="USER";
      
      console.log("RegsiterForm-CreateUser:2", this.user);
      this._userService
        .create(this.user)
        .subscribe(() => {console.log("New User has been created")});
  
    }
  }
  */
