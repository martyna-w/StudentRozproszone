import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { QuestionsListComponent } from "./questions-list/questions-list.component";
import { EditQuestionComponent } from "./edit-question/edit-question.component";
import { AddQuestionComponent } from "./add-question/add-question.component";
import { EditQuestionsListComponent } from "./edit-questions-list/edit-questions-list.component";

const routes: Routes = [
  { path: "", redirectTo: "/questions-list", pathMatch: "full" },
  { path: "edit-questions-list", component: EditQuestionsListComponent },
  { path: "questions-list", component: QuestionsListComponent },
  { path: "edit-question/:id", component: EditQuestionComponent },
  { path: "add-question", component: AddQuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
