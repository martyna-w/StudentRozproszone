import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";

import { QuestionsService } from "../Questions.Service";
import { Questions } from "../Questions";

@Component({
  selector: "app-edit-questions-list",
  templateUrl: "./edit-questions-list.component.html",
  styleUrls: ["./edit-questions-list.component.css"],
  providers: [QuestionsService],
})
export class EditQuestionsListComponent implements OnInit {
  questions: Questions[];

  score: number = 0;

  constructor(private qs: QuestionsService, private router: Router) {}

  ngOnInit() {
    let self = this;
    self.qs.getQuestions().then((result) => {
      self.questions = result as Questions[];
    });
  }

  countScore() {
    this.score = 1 + this.score;
  }

  deleteQuestion(id) {
    this.qs.deleteQuestion(id).catch((e) => {
      alert(e);
    });
  }

  postAnwsers() {
    this.router.navigate(["add-question"]);
  }

  goToEditQuestion(id) {
    this.router.navigate(["edit-question", id]);
  }
}
