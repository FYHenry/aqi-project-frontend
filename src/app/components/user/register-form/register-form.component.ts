import { Component} from '@angular/core';
import { CityForm } from 'src/app/shared/models/cityForm';
import { NewUser } from 'src/app/shared/models/newuser';
import { CityService } from 'src/app/shared/services/city.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent{

  //selectedValue: any;
  //searchTxt: any;

  newUser: NewUser={};
  cityList: CityForm[]=[];
  selectedCity!: CityForm;
  httpStatusCode!: string;
  constructor(private _userService: UserService,
              private _cityService: CityService) {
  }

  createUser(){
    console.log(this.newUser);
    const retour=this._userService
      .create(this.newUser)
      .subscribe(body => this.getMessage(this.httpStatusCode=body.code));
    // console.log("httpStatusCode:" + this.httpStatusCode);
    // console.log("retour: " + retour);
    //.subscribe(()=> console.log("User successfully created"));
    //.subscribe(body => console.log(JSON.stringify(body)));
    //.subscribe(body: HttpResponseBody => this.httpStatusCode=body.code);
  }

  getMessage(code: string): string {
    //TODO afficher message de confirmation à l'ecran
    console.log ("displayMsg functon-code:" + code);
    if(code='200'){
      console.log('20O');
      return("Compte correctement créé");
    }
    else{
      console.log('DIFF 20O');
      return("Erreur lors de la creation du compte");
    }
  }

  displayMessage(message:string): void{
    //TODO
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  onSearchChange(searchValue: string): void {
    //console.log(searchValue);
    this._cityService.findByNameLike(searchValue)
                     .subscribe(cities => {this.cityList = cities});
  }

}
