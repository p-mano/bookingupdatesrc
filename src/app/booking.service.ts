import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookingUrl = 'http://192.168.1.18:3000/api/booking';
  constructor( private http: HttpClient) { }
 
addBooking(booking):Observable<any>{
return this.http.post(this.bookingUrl,booking);
}
}
