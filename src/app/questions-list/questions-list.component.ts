import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";

import { QuestionsService } from "../Questions.Service";
import { Questions } from "../Questions";

import { AnwsersService } from "../Anwsers.Service";
import { Anwsers } from "../Anwsers";

@Component({
  selector: "app-questions-list",
  templateUrl: "./questions-list.component.html",
  styleUrls: ["./questions-list.component.css"],
  providers: [QuestionsService, AnwsersService],
})
export class QuestionsListComponent implements OnInit {
  questions: Questions[];
  anwsers: Anwsers[];
  score: number = 0;
  noq: number;

  constructor(
    private qs: QuestionsService,
    private as: AnwsersService,
    private router: Router
  ) {}

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
    this.qs.deleteQuestion(id);
  }

  postAnwsers() {
    alert("Liczba poprawnych odpowiedzi " + this.score);
    this.score = 0;
  }

  goToEditQuestion(id) {
    this.router.navigate(["edit-question", id]);
  }
}
