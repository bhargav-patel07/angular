import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { posts } from '../employee/user.model';



@Injectable()
export default class EmployeeServicesService {

  public baseUrl: any
  updateEmployee: any;
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/";
  }
  // get function
  getEmployee(): Observable<any> {
    const url: string = this.baseUrl + 'employee';
    return this.http.get(url);
  }
  // post function
  onPost(user:posts):Observable<any>{
    const url: string = this.baseUrl + 'employee';
    return this.http.post(url,user);
// delete 

  }

removeAt(id:number){
  const url: string = this.baseUrl + 'employee/' + id;
  return this.http.delete(url);
}

public NewItem(user:posts,id:number):Observable<any>{
  const url:string= `${this.baseUrl}employee${id}`;
  return this.http.put(url,user);
}

getEmpId(id: number):Observable<any>{
  const url : string = this.baseUrl + 'employee/' + id;
  return this.http.get(url)
}

editItem(user:posts,id:number):Observable<posts>{
  const url : string = this.baseUrl + 'employee/' + id;
   return this.http.post<posts>(url,user);
 }

}

 