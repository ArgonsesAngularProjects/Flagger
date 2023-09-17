import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flag } from 'src/app/models/Flag';
import { flagsEasy, flagsExpert, flagsExtreme, flagsHard, flagsMedium } from 'src/app/models/flags-data';

@Component({
  selector: 'app-quizgame',
  templateUrl: './quizgame.component.html',
  styleUrls: ['./quizgame.component.css']
})
export class QuizgameComponent implements OnInit {
  difficulty?: string;
  flags: Flag[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.difficulty = params['difficulty'];

      switch (this.difficulty) {
        case 'easy':
          this.flags = flagsEasy;
          break;
        case 'medium':
          this.flags = flagsMedium;
          break;
        case 'hard':
          this.flags = flagsHard;
          break;
        case 'expert':
          this.flags = flagsExpert;
          break;
        case 'extreme':
          this.flags = flagsExtreme;
          break;
      }
    });
  }
}
