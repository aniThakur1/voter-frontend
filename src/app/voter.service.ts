import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voter } from './voter';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  private baseURL = "http://localhost:1000/api/v1/voter";


  constructor(private http: HttpClient) { }

  getVoterList(): Observable<Voter[]>{
    return this.http.get<Voter[]>(`${this.baseURL}`);
  }

  createVoter(voter:Voter) : Observable<Object>{
    return this.http.post(`${this.baseURL}`,voter);

  }
   
  state(){
    return [
      {
        nameState:"Andhra Pradesh"
      },
      {
        nameState:"Arunachal Pradesh"
      },
      {
        nameState:"Assam"
      },
      {
        nameState:"Bihar"
      },
      {
        nameState:"Chattisgarh"
      },
      {
        nameState:"Goa"
      },
      {
        nameState:"Gujarat"
      }
    ]
  }

  city(){
    return [
      {
        nameState:"Andhra Pradesh",
        name:"Amravati"
      },
      {
        nameState:"Arunachal Pradesh",
        name:"Itanagar"
      },
      {
        nameState:"Assam",
        name:"Dispur"
      },
      {
        nameState:"Bihar",
        name:"Patna"
      },
      {
        nameState:"Chattisgarh",
        name:"Raipur"
      },
      {
        nameState:"Goa",
        name:"Panaji"
      },
      {
        nameState:"Gujarat",
        name:"Gandhinagar"
      }
    ]
  }
  
}
