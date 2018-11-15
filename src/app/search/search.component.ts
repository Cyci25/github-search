import { Component, OnInit, } from '@angular/core';
import { ProfileService } from '../services/profile.service';


@Component({
selector: 'app-search',
templateUrl: './search.component.html',
styleUrls: ['./search.component.css'],
providers: [ProfileService]
})
export class SearchComponent implements OnInit {
user: any;
repos: any;
reponame: any;
username: string;

constructor(private _profileService: ProfileService) {}
search() {
console.log(this.username);

this._profileService.updateUsername(this.username);

this._profileService.getUser().subscribe(user => {
this.user = user;
});

this._profileService.getRepos().subscribe(repos => {
this.repos = repos;
});
}

searchReponame() {
console.log(this.reponame);

this._profileService.updateReponame(this.reponame);

this._profileService.searchRepos().subscribe(reponame =>
this.reponame = reponame);
}

ngOnInit() {
}

}


