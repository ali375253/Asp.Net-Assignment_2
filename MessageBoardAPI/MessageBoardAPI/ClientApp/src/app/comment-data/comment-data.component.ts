import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Http,Response } from '@angular/http';
import { parse } from 'url';

@Component({
  selector: 'app-comment-data',
  templateUrl: './comment-data.component.html'
})
export class CommentDataComponent {

  public comments: Array<any> = [];
  url: string = "";
  id: any;
  constructor(public http: Http, private _router: Router, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute) {
    this.url = baseUrl;
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.GetComment(this.id);
  }

  GetComment(msgId: any) {
    this.http.request(this.url + "/api/CommentsAPI/" + msgId).subscribe((response: Response) => {
      this.comments = response.json();
    });
  }  
}
