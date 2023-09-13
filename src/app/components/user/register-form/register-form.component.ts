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

  newUser: NewUser={};
  cityList: CityForm[]=[];
  selectedCity!: CityForm;
  httpStatusCode!: string;
  constructor(private _userService: UserService,
              private _cityService: CityService) {
  }

  /* create user account*/
  createUser(){
    //this._userService;
    this._userService
      .create(this.newUser)
      .subscribe(body => this.getMessage(this.httpStatusCode=body.code));
  }

  /* read httpstatus code returned after user creation */
  getMessage(code: string): string {
    if(code='200'){
      return("Compte correctement créé");
    }
    else{
      return("Erreur lors de la creation du compte");
    }
  }

  /* display user message to confirmation successful user creation */
  displayMessage(message:string): void{
    //TODO afficher message de confirmation à l'ecran
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  /* dynamically get all cities starting with the characters entered by user in the city field */
  onSearchChange(searchValue: string): void {
    this._cityService.findByNameLike(searchValue)
                     .subscribe(cities => {this.cityList = cities});
  }

}
