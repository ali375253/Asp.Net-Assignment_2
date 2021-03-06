import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Http,Response } from '@angular/http';
import { parse } from 'url';

@Component({
  selector: 'app-add-comment-data',
  templateUrl: './add-comment-data.component.html'
})
export class AddCommentDataComponent {

  public comments: Array<any> = [];
  url: string = "";
  id: any;
  Content: string = "";
  public comment: string = "";
  constructor(public http: Http, private _router: Router, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute) {
    this.url = baseUrl;
  }

  AddComment() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.AddCommentData(this.id, this.Content);
  }
  AddCommentData(msgId: any, Content: string){
    const http = new XMLHttpRequest();
    this.comment = msgId + ":" + Content;
    http.open("POST", "https://localhost:44350/api/CommentsAPI/" + this.comment);
    http.send();
    http.onreadystatechange = (e) => {
      this._router.navigate(['/message-board-data']);
    }
  }
}



