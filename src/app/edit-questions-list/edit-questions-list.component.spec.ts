import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuestionsListComponent } from './edit-questions-list.component';

describe('EditQuestionsListComponent', () => {
  let component: EditQuestionsListComponent;
  let fixture: ComponentFixture<EditQuestionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQuestionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
