import {Component, DoCheck, OnInit} from '@angular/core';
import {TutorialsService} from '../../shared/tutorials.service';
import {TestsService} from '../../shared/tests.service';

@Component({
  selector: 'app-tutorial-page',
  templateUrl: './tutorial-page.component.html',
  styleUrls: ['./tutorial-page.component.css']
})
export class TutorialPageComponent implements OnInit, DoCheck {

  tutorials: any = [];
  tests: any = [];
  auth = [];

  constructor(private tutorialsService: TutorialsService, private testsService: TestsService) { }

  ngOnInit() {
    this.tutorialsService.getTutorials().subscribe((data) => {
      this.tutorials = data;
    });
    this.tests = this.testsService.getTests();
  }

  ngDoCheck() {
    this.auth = Object.values(JSON.parse(localStorage.getItem('level')));
  }

}
