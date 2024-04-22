import { Component } from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  user: User[] = [
    {username: "Emre", level: 10,  xp: 0.3},
    {username: "Dani", level: 5,  xp: 0.6},
    {username: "Lev oi", level: 5,  xp: 0.4},
    {username: "Kevin", level: 3,  xp: 0.6},
    {username: "ldpad", level: 2,  xp: 0.3},
    {username: "wkdoaw", level: 1,  xp: 0.8},
    {username: "dsd", level: 1,  xp: 0.6},
    {username: "kloda", level: 1,  xp: 0.3},
    {username: "lp", level: 1,  xp: 0.87},
    {username: "ddd", level: 1,  xp: 0.2},
  ]


}
