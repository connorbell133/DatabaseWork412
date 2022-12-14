import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

import { Player } from './components/models/player.model';
import { TeamMems } from './components/models/teammems.model';
import { Service } from './components/services/database.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

 
  players?: Player[];
  currentPlayer: Player = {};
  currentIndex = -1;
  
  //Player text fields
  playername = '';
  collegename = '';
  seasonyear = "--Select Season Year--";

  title = '';


  teamsMems?: TeamMems[];
  currentTeamMems: TeamMems = {};
  currentTeamMemsIndex = -1;

  //Team text fields
  teamNickName = "--Select Team Name--";
  teamSeasonYear = "--Select Season Year--";


  constructor(
    private service: Service
  ){}

  ngOnInit(): void {
    
  }

  onSelected(value:string): void {
		this.seasonyear = value;
	}

  onSelectedYear(value:string): void {
		this.teamSeasonYear = value;
	}

  onSelectedTeam(value:string): void {
		this.teamNickName = value;
	}

  onSubmitPlayer(): void {

    if(this.playername == '' && this.collegename == '' && this.seasonyear == "--Select Season Year--")
    {
      //getPlayers0
      this.service.getPlayers0()
      .subscribe({
        next: (data) => {
          this.players = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
    }
    else if(this.playername != '' && this.collegename == '' && this.seasonyear == "--Select Season Year--")
    {
      //getPlayers1
      this.service.getPlayers1(this.playername)
      .subscribe({
        next: (data) => {
          this.players = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
    }
    else if(this.playername == '' && this.collegename != '' && this.seasonyear == "--Select Season Year--")
    {
      //getPlayers2
      this.service.getPlayers2(this.collegename)
      .subscribe({
        next: (data) => {
          this.players = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
    }
    else if(this.playername == '' && this.collegename == '' && this.seasonyear != "--Select Season Year--")
    {
      //getPlayers3
      this.service.getPlayers3(this.seasonyear)
      .subscribe({
        next: (data) => {
          this.players = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
    }
    else if(this.playername != '' && this.collegename != '' && this.seasonyear == "--Select Season Year--")
    {
      //getPlayers12
      this.service.getPlayers12(this.playername, this.collegename)
      .subscribe({
        next: (data) => {
          this.players = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
    }
    else if(this.playername != '' && this.collegename == '' && this.seasonyear != "--Select Season Year--")
    {
      //getPlayers13
      this.service.getPlayers13(this.playername, this.seasonyear)
      .subscribe({
        next: (data) => {
          this.players = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
    }
    else if(this.playername == '' && this.collegename != '' && this.seasonyear != "--Select Season Year--")
    {
      //getPlayers23
      this.service.getPlayers23(this.collegename, this.seasonyear)
      .subscribe({
        next: (data) => {
          this.players = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
    }
    else if(this.playername != '' && this.collegename != '' && this.seasonyear != "--Select Season Year--")
    {
      //getPlayers123
      this.service.getPlayers123(this.playername, this.collegename, this.seasonyear)
      .subscribe({
        next: (data) => {
          this.players = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
    }

  }

  OnSubmitTeam(): void {
    console.log(this.teamNickName);
    console.log(this.teamSeasonYear);
    if(this.teamNickName != '--Select Team Name--' && this.teamSeasonYear == "--Select Season Year--")
    {
      //getTeamPlayersByTeamName
      this.service.getTeamPlayersByTeamName(this.teamNickName)
      .subscribe({
        next: (data) => {
          this.teamsMems = data;
          console.log(data);
        },
        error: (e) => console.error(e)
        });
      }

      else if(this.teamNickName == '--Select Team Name--' && this.teamSeasonYear != "--Select Season Year--")
      {
        //getTeamPlayersBySeason
        this.service.getTeamPlayersBySeason(this.teamSeasonYear)
        .subscribe({
          next: (data) => {
            this.teamsMems = data;
            console.log(data);
          },
          error: (e) => console.error(e)
          });
        }

      else if(this.teamNickName != '--Select Team Name--' && this.teamSeasonYear != "--Select Season Year--")
      {
        //getTeamPlayersByTeamNameAndSeason
        this.service.getTeamPlayersByTeamNameAndSeason(this.teamNickName, this.teamSeasonYear)
        .subscribe({
          next: (data) => {
            this.teamsMems = data;
            console.log(data);
          },
          error: (e) => console.error(e)
          });
        }

    }

  

  //SELECT
  years = ['1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']
  
  teamList = ['49ers', 'Bears', 'Bengals', 'Bills', 'Broncos', 'Browns', 'Buccaneers', 'Cardinals', 'Chargers', 'Chiefs', 'Colts', 'Cowboys', 'Dolphins', 'Eagles', 'Falcons', 'Giants', 'Jaguars', 'Jets', 'Lions', 'Packers', 'Panthers', 'Patriots', 'Raiders', 'Rams', 'Ravens', 'Redskins', 'Saints', 'Seahawks', 'Steelers', 'Texans', 'Titnas', 'Vikings']

}
