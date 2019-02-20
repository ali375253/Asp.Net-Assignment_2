import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Http,Response } from '@angular/http';
import { parse } from 'url';

@Component({
  selector: 'app-add-message-data',
  templateUrl: './add-message-data.component.html'
})
export class AddMessageDataComponent {

  public comments: Array<any> = [];
  url: string = "";
  id: any;
  Content: string = "";
  constructor(public http: Http, private _router: Router, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute) {
    this.url = baseUrl;
  }

  AddMessage() {
    const http = new XMLHttpRequest();
    http.open("POST", "https://localhost:44350/api/AddMessage/" + this.Content);
    
    http.send();
    http.onreadystatechange = (e) => {
      this._router.navigate(['/message-board-data']);
    }
  }
}



