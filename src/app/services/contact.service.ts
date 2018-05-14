import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IContact } from '../model/contact';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ContactService {
  constructor(private http: HttpClient) { }

  // get all contact data
  getAllContact(url: string): Observable<IContact[]> {
    return this.http.get<IContact[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // insert new contact details
  addContact(url: string, contact: IContact): Observable<any> {
    return this.http.post(url, JSON.stringify(contact), httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // update contact details
  updateContact(url: string, id: number, contact: IContact): Observable<any> {
    const newurl = `${url}?id=${id}`;
    return this.http.put(newurl, contact, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // delete contact information
  deleteContact(url: string, id: number): Observable<any> {
    const newurl = `${url}?id=${id}`; // DELETE api/contact?id=42
    return this.http.delete(newurl, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // custom handler
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
