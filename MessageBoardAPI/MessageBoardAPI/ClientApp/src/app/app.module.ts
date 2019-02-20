import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { MessageBoardDataComponent } from './message-board-data/message-board-data.component';
import { HttpModule } from '@angular/http';
import { CommentDataComponent } from './comment-data/comment-data.component';
import { AddCommentDataComponent } from './add-comment-data/add-comment-data.component';
import { AddMessageDataComponent } from './add-message-data/add-message-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    MessageBoardDataComponent,
    CommentDataComponent,
    AddCommentDataComponent,
    AddMessageDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'message-board-data', component: MessageBoardDataComponent },
      { path: 'comment-data/:id', component: CommentDataComponent },
      { path: 'add-comment-data/:id', component: AddCommentDataComponent },
      { path: 'add-message-data', component: AddMessageDataComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
