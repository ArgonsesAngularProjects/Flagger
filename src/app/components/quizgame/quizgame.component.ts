import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  shuffledOptions: Flag[][] = [];
  currentFlagIndex: number = 0;
  correctAnswers: number = 0;
  showResults: boolean = false;
  timer: any;
  timeLimit: number = 20; 

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.startTimer();
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

      this.shuffleFlags();
    });
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  shuffleFlags() {
    this.flags = this.shuffleArray(this.flags).slice(0, 10); 
    this.shuffleOptions();
  }

  shuffleOptions() {
    for (const flag of this.flags) {
      const options = this.generateOptions(flag, this.flags);
      this.shuffleArray(options);
      this.shuffledOptions.push(options);
    }
  }

  generateOptions(correctOption: Flag, allOptions: Flag[]): Flag[] {
    const options = [correctOption];
    while (options.length < 4) {
      const randomOption = allOptions[Math.floor(Math.random() * allOptions.length)];
      if (!options.includes(randomOption)) {
        options.push(randomOption);
      }
    }
    return options;
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  checkAnswer(selectedOption: Flag | null, correctOption: Flag) {
    if (selectedOption === correctOption) {
      this.correctAnswers++;
    }
  
    if (selectedOption !== null) {
      this.stopTimer();
    }
  
    if (this.currentFlagIndex === this.flags.length - 1) {
      this.showResults = true;
    } else {
      this.currentFlagIndex++;
      this.startTimer();
    }
  }

  finishQuiz() {
    this.router.navigate(['/']);
  }

  startTimer() {
    this.timeLimit = 20;
    this.timer = setInterval(() => {
      this.timeLimit--;
      if (this.timeLimit === 0) {
        this.handleTimeout();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  handleTimeout() {
    this.checkAnswer(null, this.flags[this.currentFlagIndex]);
  }
}
