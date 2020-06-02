import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable()
export class AnwsersService {
  private URL: string = "https://localhost:44369/api/anwsers";

  constructor(private http: HttpClient) {}

  getAnwsers(): Promise<Object> {
    return this.http.get(this.URL).toPromise();
  }

  getAnwser(id: number): Promise<Object> {
    return this.http.get(this.URL + "/" + id).toPromise();
  }

  postAnwsers(body): Promise<Object> {
    return this.http.post(this.URL, body).toPromise();
  }

  putAnwser(id: number, body): Promise<Object> {
    return this.http.put(this.URL + "/" + id, body).toPromise();
  }

  deleteAnwser(id: number): Promise<Object> {
    return this.http.delete(this.URL + "/" + id).toPromise();
  }
}
