import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Http,Response } from '@angular/http';
import { parse } from 'url';

@Component({
  selector: 'app-message-board-data',
  templateUrl: './message-board-data.component.html'
})
export class MessageBoardDataComponent {
  //public forecasts: WeatherForecast[];

  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
  //    this.forecasts = result;
  //  }, error => console.error(error));
  //}

  public messages: Array<any> = [];
  url: string = "";
  
  constructor(public http: Http, private _router: Router, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl;
    this.GetMessageBoard();
  }

  GetMessageBoard() {
    this.http.request(this.url + "/api/MessagesAPI").subscribe((response: Response) => {
      this.messages = response.json();
    });
  }

  AddLike(msgId: any): void {
    const http = new XMLHttpRequest();
    http.open("POST", "https://localhost:44350/api/MessagesAPI/" + msgId);
    http.send();
    http.onreadystatechange = (e) => {
      this.GetMessageBoard();
    }
  }

  GetComment(msgId: any) {
    this._router.navigate([`/comment-data/${msgId}`]);
  }

  AddComment(msgId: any) {
    this._router.navigate([`/add-comment-data/${msgId}`]);
  }

  AddMessage() {
    this._router.navigate(['/add-message-data']);
  }
  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  http.get<Array<any>>(baseUrl + 'api/Messages').subscribe(result => {
  //    this.messages = result;
  //  }, error => console.error(error));
  //}
 
}
   //return this.http.request(this.accessPointUrl).subscribe((response: Response) => {
   //   msg.messages = response.json()
   // });

//interface WeatherForecast {
//  dateFormatted: string;
//  temperatureC: number;
//  temperatureF: number;
//  summary: string;
//}
//interface Message {
//  Id: number;
//  Content: string;
//}
