import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  password ='';

  onButtonClick(){
    this.password = "My Password!!!";
  }

}
