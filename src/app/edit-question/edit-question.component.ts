import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";

import { QuestionsService } from "../Questions.Service";
import { Questions } from "../Questions";
@Component({
  selector: "app-edit-question",
  templateUrl: "./edit-question.component.html",
  styleUrls: ["./edit-question.component.css"],
  providers: [QuestionsService],
})
export class EditQuestionComponent implements OnInit {
  question: Questions[];
  description: string;
  goodAnwser: string;
  fakeAnwserOne: string;
  fakeAnwserTwo: string;
  fakeAnwserThree: string;
  result: string;
  id: string;

  constructor(private route: ActivatedRoute, private qs: QuestionsService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    let self = this;
    self.qs.getQuestion(this.id).then((result) => {
      self.question = result as Questions[];

      this.description = self.question.question;
      this.goodAnwser = self.question.goodAnwser;
      this.fakeAnwserOne = self.question.fakeAnwserOne;
      this.fakeAnwserTwo = self.question.fakeAnwserTwo;
      this.fakeAnwserThree = self.question.fakeAnwserThree;
    });
  }

  editQuestion() {
    const json: object = {
      Id: parseInt(this.id),
      Question: this.description,
      GoodAnwser: this.goodAnwser,
      FakeAnwserOne: this.fakeAnwserOne,
      FakeAnwserTwo: this.fakeAnwserTwo,
      FakeAnwserThree: this.fakeAnwserThree,
    };
    console.log(json);
    console.log(this.id);
    this.qs.putQuestion(this.id, json);
  }
}
