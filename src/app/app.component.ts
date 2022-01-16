import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-generator';
  names : string[] = []
  name : string = ""
  teams : string[][] = [];

  numberOfTeams : number = 1;
  errorMsg :string

  constructor(){

  }


  addUser(){
    if(this.name !== "")
    {
     
      this.names.push(this.name)
      this.name=""
      this.errorMsg = ""
    }
    else
    {
      this.errorMsg ="Name can't be empty"
    }

  }
  clearUsers(){
    this.names = []


  }

  generateTeam(){

   this.teams=[];

    if(this.names.length < this.numberOfTeams){
      this.errorMsg ="Not enough member"
      return;
    }
    if(this.names.length !==0 || this.numberOfTeams <=0)
    {    
        
      let tempNames = [...this.names]

        while(tempNames.length)
        {
         
            for(let i =0; i < this.numberOfTeams; i++)
            {            
              
                let randomNumber = this.getRandomInt(tempNames.length);
                  
                let member = tempNames[randomNumber];
                if(!member)break;

                if(this.teams[i]){
                  this.teams[i].push(member)
                }else{
                  this.teams[i] = [member]
                }

                tempNames = tempNames.filter(n => n!== member)
                
            }
        }


        console.log(this.teams)
    }
  
   
    else{
        this.errorMsg = "Invalid number of teams"
    }


 

  }

  getRandomInt(max : number){
    return Math.floor(Math.random() * max)
  }
}
