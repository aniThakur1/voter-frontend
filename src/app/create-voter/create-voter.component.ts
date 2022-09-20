import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voter } from '../voter';
import { VoterService } from '../voter.service';

@Component({
  selector: 'app-create-voter',
  templateUrl: './create-voter.component.html',
  styleUrls: ['./create-voter.component.css']
})
export class CreateVoterComponent implements OnInit {

  voter: Voter = new Voter();

  constructor(private voterService: VoterService,
    private router:Router) { }

  ngOnInit(): void {
    this.state=this.voterService.state();
  }
  
  state:any=[];
  city:any=[];
   
  onSelect(state:any){
    this.city=this.voterService.city().filter(e => e.nameState==state.target.value);
    }

  saveVoter(){
    this.voterService.createVoter(this.voter).subscribe(data =>{
      console.log(data);
      this.goToVoterList();
    },
    error => console.log(error));
    
  }

  goToVoterList(){
    this.router.navigate(['/voter']);
  }
  
  onSubmit(){
    console.log(this.voter);
    this.saveVoter();
  }


}
