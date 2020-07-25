import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { dev, secrete, header, preauthheader } from '../dev/dev';


@Injectable({
  providedIn: 'root'
})


export class UserService {


    url = `${dev.connect}api/v1/users/`;

    registrationHeader = new HttpHeaders().set(
      'Authorization', `Bearer ${sessionStorage.getItem('invitedUserToken')}`
    ).set('secrete', secrete);

    constructor( private http: HttpClient ) { }

    register( data: any ) {
        return this.http.post<any>(this.url, data, {headers : this.registrationHeader});
    }

    login( data: any ) {
      return this.http.post<any>(this.url + 'login', data, {headers : preauthheader});
    }

    getAll() {
      return this.http.get<any>(this.url, {headers : header});
    }

    getOne(id: any) {
      return this.http.get<any>(this.url + id, {headers : header});
    }

    update(id: any, data: any) {
      return this.http.put<any>(this.url + id, data, {headers : header});
    }

    delete(id: any) {
      return this.http.delete<any>(this.url + id, {headers : header});
    }

    deleteAll() {
      return this.http.delete<any>(this.url, {headers : header});
    }

    invite(data: any) {
      return this.http.post<any>(this.url + 'invite', data, {headers : header});
    }

    emailVerification(data: any) {
      return this.http.post<any>(this.url + 'emailVerification', data, {headers: preauthheader});
    }

    passwordResetCode(data: any) {
      return this.http.post<any>(this.url + 'passwordResetCode', data, {headers: preauthheader});
    }

    passwordReset(data: any) {
      return this.http.post<any>(this.url + 'passwordReset', data, {headers: preauthheader});
    }


}
