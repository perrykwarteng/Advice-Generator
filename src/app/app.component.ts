import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdviceServiceService } from './advice-service.service';

export interface AdviceSlip {
  slip: {
    id: number;
    advice: string;
  };
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  adviceData?: AdviceSlip;

  constructor(private adviceService: AdviceServiceService) {}
  ngOnInit(): void {
    this.getAdvice();
  }

  getAdvice() {
    this.adviceService.getAllAdvice().subscribe({
      next: (data) => {
        this.adviceData = data;
      },
      error: (err) => {
        console.error('Error fetching advice:', err);
      },
    });
  }
}
