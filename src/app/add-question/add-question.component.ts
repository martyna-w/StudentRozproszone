import { Component, OnInit } from "@angular/core";

import { QuestionsService } from "../Questions.Service";
import { Questions } from "../Questions";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-add-question",
  templateUrl: "./add-question.component.html",
  styleUrls: ["./add-question.component.css"],
  providers: [QuestionsService],
})
export class AddQuestionComponent implements OnInit {
  AddQuestionForm: FormGroup;
  question: Questions[];
  description: string;
  goodAnwser: string;
  fakeAnwserOne: string;
  fakeAnwserTwo: string;
  fakeAnwserThree: string;
  result: string;

  constructor(private qs: QuestionsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.AddQuestionForm = this.formBuilder.group({
      NowePytanie: ['', [Validators.required, Validators.minLength(10)]],
      NowaDobraOdp: ['', [Validators.required, Validators.minLength(10)]],
      Nowa1ZlaOdp: ['', [Validators.required, Validators.minLength(10)]],
      Nowa2ZlaOdp: ['', [Validators.required, Validators.minLength(10)]],
      Nowa3ZlaOdp: ['', [Validators.required, Validators.minLength(10)]],
    })
  }



  addQuestion() {
    const json: object = {
      Question: this.description,
      GoodAnwser: this.goodAnwser,
      FakeAnwserOne: this.fakeAnwserOne,
      FakeAnwserTwo: this.fakeAnwserTwo,
      FakeAnwserThree: this.fakeAnwserThree,
    };

    if (this.AddQuestionForm.invalid)
    {
      alert("Każde pole musi być wypełnione! Pytanie musi mieć więcej niż 15 znaków.");
    }

    console.log(this.AddQuestionForm.value);
    this.qs.postQuestions(json);

  }
}
