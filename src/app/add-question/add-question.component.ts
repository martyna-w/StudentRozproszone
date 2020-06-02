import { Component, OnInit } from "@angular/core";

import { QuestionsService } from "../Questions.Service";
import { Questions } from "../Questions";

@Component({
  selector: "app-add-question",
  templateUrl: "./add-question.component.html",
  styleUrls: ["./add-question.component.css"],
  providers: [QuestionsService],
})
export class AddQuestionComponent implements OnInit {
  question: Questions[];
  description: string;
  goodAnwser: string;
  fakeAnwserOne: string;
  fakeAnwserTwo: string;
  fakeAnwserThree: string;
  result: string;

  constructor(private qs: QuestionsService) {}

  ngOnInit() {}

  addQuestion() {
    const json: object = {
      Question: this.description,
      GoodAnwser: this.goodAnwser,
      FakeAnwserOne: this.fakeAnwserOne,
      FakeAnwserTwo: this.fakeAnwserTwo,
      FakeAnwserThree: this.fakeAnwserThree,
    };
    console.log(json);
    this.qs.postQuestions(json);
  }
}
