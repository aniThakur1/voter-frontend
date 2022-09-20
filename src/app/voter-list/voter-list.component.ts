import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voter } from '../voter';
import { VoterService } from '../voter.service';

@Component({
  selector: 'app-voter-list',
  templateUrl: './voter-list.component.html',
  styleUrls: ['./voter-list.component.css']
})
export class VoterListComponent implements OnInit {

  voter?: Voter[];

  constructor(private voterService : VoterService,
    private router:Router) { }

  ngOnInit(): void {
    this.getVoter();
  }

  

  private getVoter(){
    this.voterService.getVoterList().subscribe(data =>{
      this.voter=data;

    });
  
  }

}
