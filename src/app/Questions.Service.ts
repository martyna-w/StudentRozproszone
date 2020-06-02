import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class QuestionsService {
  private URL: string = "https://localhost:44369/api/questions";

  constructor(private http: HttpClient) {}

  getQuestions(): Promise<Object> {
    return this.http.get(this.URL).toPromise();
  }

  getQuestion(id: string): Promise<Object> {
    return this.http.get(this.URL + "/" + id).toPromise();
  }

  postQuestions(body): Promise<Object> {
    return this.http.post(this.URL, body).toPromise();
  }

  putQuestion(id: string, body): Promise<Object> {
    return this.http.put(this.URL + "/" + id, body).toPromise();
  }

  deleteQuestion(id: number): Promise<Object> {
    return this.http.delete(this.URL + "/" + id).toPromise();
  }
}
