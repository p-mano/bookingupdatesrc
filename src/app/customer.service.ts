import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
  private customerUrl = 'http://192.168.1.18:3000/api/customers';
  constructor( private http: HttpClient){}
customers:any;

getDBCustomers (){
  		this.http.get<[]>(this.customerUrl).subscribe((result)=>{console.log(JSON.stringify(result))});
	}

getRemoteCustomers(): Observable<[]>{
  return this.http.get<[]>(this.customerUrl); 		
}

deleteRemoteCustomer(customer){
  return this.http.delete(this.customerUrl+"/"+customer.id); 		
}

addRemoteCustomer(customer):Observable<any>{
  return this.http.post(this.customerUrl,customer);
}
updateRemoteCustomer(customer):Observable<any>{
  return this.http.put(this.customerUrl + "/"+customer.id,customer);
}

getRemoteCustomerById(id):Observable<any>{
 return this.http.get<[]>(this.customerUrl + "/"+id);
}

 authenticate(data){
   return this.http.post(this.loginUrl,data);
 }
 
}
