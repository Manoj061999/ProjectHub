import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { FormGroup } from '@angular/forms';


 //USER 
 export class user {
  firstname : string | undefined;
  lastname : string | undefined;
  email : string | undefined;
  password : string | undefined;
  mobile : Number | undefined;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  endPoint = 'http://localhost:9020';
  AddResult: any;
  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  //Get data from MongoDB












  //Add data 
  Addusers(data: FormGroup): Observable<user> {

    let savedata = {
      "firstname":data.value.firstname,
      "lastname":data.value.lastname,
      "email":data.value.email,
      "password":data.value.password,
      "mobile":data.value.mobile
    }
    console.log(savedata,"SAVE USER DATA");
    return this.httpClient.post<user>(this.endPoint + '/api/user',JSON.stringify(savedata),this.httpHeader)
    }

}
