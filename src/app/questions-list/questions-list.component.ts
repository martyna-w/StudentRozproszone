import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";

import { QuestionsService } from "../Questions.Service";
import { Questions } from "../Questions";

@Component({
  selector: "app-questions-list",
  templateUrl: "./questions-list.component.html",
  styleUrls: ["./questions-list.component.css"],
  providers: [QuestionsService],
})
export class QuestionsListComponent implements OnInit {
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

  postAnwsers() {
    alert("Liczba poprawnych odpowiedzi " + this.score);
    this.score = 0;
  }
}
