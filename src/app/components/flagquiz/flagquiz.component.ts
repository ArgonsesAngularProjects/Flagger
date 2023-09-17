import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flagquiz',
  templateUrl: './flagquiz.component.html',
  styleUrls: ['./flagquiz.component.css']
})
export class FlagquizComponent {
  constructor(private router: Router) {}

  selectDifficulty(difficulty: string) {
    this.router.navigate(['/quizgame', difficulty]);
  }
}
