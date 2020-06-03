import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { QuestionsListComponent } from "./questions-list/questions-list.component";
import { EditQuestionComponent } from "./edit-question/edit-question.component";
import { AddQuestionComponent } from "./add-question/add-question.component";
import { EditQuestionsListComponent } from './edit-questions-list/edit-questions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsListComponent,
    EditQuestionComponent,
    AddQuestionComponent,
    EditQuestionsListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
