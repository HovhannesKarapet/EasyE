import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {TestsService} from '../../../shared/tests.service';
import {FormControl, FormGroup} from '@angular/forms';
import {UsersService} from '../../../shared/users.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  id;
  level;
  questions = [];
  form: FormGroup;
  formObj = {};
  count = 0;
  flag = null;

  constructor(private route: ActivatedRoute, private testsService: TestsService, private usersService: UsersService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.id = +params['id'];
    });
    for (let i = 0; i < 10; i++) {
      this.formObj['question' + i] = new FormControl('');
    }
    this.form = new FormGroup(this.formObj);
    this.testsService.getTests().subscribe((data) => {
      this.questions = data[this.id - 1];
    });
    this.level = JSON.parse(localStorage.getItem('level'));
  }

  onSubmit() {
    for (let i = 0; i < this.questions.length; i++) {
      if (this.form.get('question' + i).value == this.questions[i].rightAnswer) {
        this.count++;
      }
    }
    this.flag = true;
    if (this.count >= (this.questions.length - 2)) {
      this.level['l' + (this.id + 1)] = true;
      localStorage.setItem('level', JSON.stringify(this.level));
      this.usersService.patchLevel(localStorage.getItem('id'), this.level).subscribe();
    }
  }
  rightAnswers() {
    for (let i = 0; i < this.questions.length; i++) {
      this.form.get('question' + i).setValue(this.questions[i].rightAnswer);
    }
  }
}
