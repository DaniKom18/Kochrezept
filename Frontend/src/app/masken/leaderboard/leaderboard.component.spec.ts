import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardComponent } from './leaderboard.component';
import {of} from "rxjs";
import {UserService} from "../../services/user.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {User} from "../../models/user";

describe('LeaderboardComponent', () => {
  let component: LeaderboardComponent;
  let userService: UserService
  let fixture: ComponentFixture<LeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaderboardComponent, HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaderboardComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService); // Initialisiere userService
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getLeaderboard method of UserService', () => {
    const userServiceSpy = spyOn(userService, 'getLeaderboard').and.returnValue(of([]));
    component.ngOnInit();
    expect(userServiceSpy).toHaveBeenCalled();
  });

  it('should set the users array with the data returned from UserService.getLeaderboard()', () => {
    // Arrange
    const userServiceMock = jasmine.createSpyObj('UserService', ['getLeaderboard']);
    const users: User[] = [{username: "Thom", xp: 20, level: 3},{username: "Blub", xp: 30, level: 5}];
    userServiceMock.getLeaderboard.and.returnValue(of(users));
    const component = new LeaderboardComponent(userServiceMock);

    // Act
    component.ngOnInit();

    // Assert
    expect(component.users).toEqual(users);
  });
});
