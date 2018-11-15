import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../classes/user';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
  reponame = '';
  username = 'Cyci25';
  client_id = '6228816eae502586b23a';
  client_secret = 'e311eda7f2a0410f55b24a1fee00db56574a3e67';
  token_key = 'e311eda7f2a0410f55b24a1fee00db56574a3e67';

  constructor(private _http: HttpClient) {}

  getUser() {
    return this._http.get('https://api.github.com/users/' + this.username + '?access_token=' + this.token_key)
      .map(res => res);
  }

  getRepos() {
    return this._http.get('https://api.github.com/users/' + this.username + '/repos?access_token=' + this.token_key)
      .map(res => res);
  }

  updateUsername(username: string) {
    this.username = username;
  }

  updateReponame(reponame: string) {
    this.reponame = reponame;
  }

  searchRepos() {
    return this._http.get('https://api.github.com/search/repositories?q=' + this.reponame)
      .map(res => res);
  }
}
