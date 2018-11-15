import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]

})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private _profileService: ProfileService) {

    this._profileService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
  }

}
