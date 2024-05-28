import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import {environment} from "../../environments/environment";
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private readonly URL = environment.apiUrl;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  userData = {
    username: '',
    senha: ''
  };

  logar() {
    axios.post(`${this.URL}/auth/login`, this.userData).then(
      response => {
        this.router.navigateByUrl('/dashboard');
      }).catch(error => {
      console.error(error);
    })
  }
}
