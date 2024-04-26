import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent implements OnInit{


  constructor(private userservice: UserService) {
  }

  users: User[] = []

  ngOnInit(): void {
    this.userservice.getLeaderboard().subscribe(
      data => {
        this.users = data
      }
    )
  }



}
