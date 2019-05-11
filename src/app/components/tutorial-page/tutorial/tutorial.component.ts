import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {TutorialsService} from '../../../shared/tutorials.service';

declare var $: any;

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  id;
  tutorial;
  lessons = [];

  constructor(private route: ActivatedRoute, private tutorialsService: TutorialsService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.lessons = [];
    this.tutorialsService.getTutorials().subscribe((data) => {
      this.lessons = data[this.id - 1];
    });
  }

  @HostListener('document:click')
  clickout() {
    for (let i = 0; i < this.lessons.length; i++) {
      $(`#l${i}`).on('hide.bs.modal', function () {
        $('audio').each(function () {
          this.pause();
        });
      });
    }
  }
}
