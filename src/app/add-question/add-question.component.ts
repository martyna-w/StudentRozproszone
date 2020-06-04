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
      NowePytanie: ['', Validators.required],
      NowaDobraOdp: ['', Validators.required],
      Nowa1ZlaOdp: ['', Validators.required],
      Nowa2ZlaOdp: ['', Validators.required],
      Nowa3ZlaOdp: ['', Validators.required],
    })
  }



  addQuestion() {
    const object: object = {
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
    this.qs.postQuestions(object);

  }

  omit_special_char(event) {
    var k;
    k = event.keyCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || k == 46 || k == 58 || k == 44 || k == 63 || k == 37 || (k >= 48 && k <= 57));

  }


}
