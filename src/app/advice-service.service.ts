import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdviceSlip } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class AdviceServiceService {
  url: string = 'https://api.adviceslip.com/advice';
  constructor(private http: HttpClient) {}
  getAllAdvice(): Observable<AdviceSlip> {
    return this.http.get<AdviceSlip>(`${this.url}`);
  }
}
