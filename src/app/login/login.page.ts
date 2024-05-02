import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private readonly URL = 'http://localhost:8080';

  constructor() {
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
        console.log("Logou po", response.data)
      }).catch(error => {
      console.error(error);
    })
  }
}
