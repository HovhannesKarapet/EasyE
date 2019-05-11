import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {TutorialPageComponent} from './tutorial-page.component';
import {TutorialComponent} from './tutorial/tutorial.component';
import {TestComponent} from './test/test.component';
import {Auth1Guard} from '../../shared/auth1.guard';
import {Auth2Guard} from '../../shared/auth2.guard';
import {Auth3Guard} from '../../shared/auth3.guard';
import {Auth4Guard} from '../../shared/auth4.guard';
import {Auth5Guard} from '../../shared/auth5.guard';
import {Auth7Guard} from '../../shared/auth7.guard';
import {Auth6Guard} from '../../shared/auth6.guard';


const tutorialRoutes = [
  {
    path: '', component: TutorialPageComponent, children: [
      {path: 'lesson1', canActivate: [Auth1Guard], component: TutorialComponent},
      {path: 'test1', canActivate: [Auth1Guard], component: TestComponent},
      {path: 'lesson2', canActivate: [Auth2Guard], component: TutorialComponent},
      {path: 'test2', canActivate: [Auth2Guard], component: TestComponent},
      {path: 'lesson3', canActivate: [Auth3Guard], component: TutorialComponent},
      {path: 'test3', canActivate: [Auth3Guard], component: TestComponent},
      {path: 'lesson4', canActivate: [Auth4Guard], component: TutorialComponent},
      {path: 'test4', canActivate: [Auth4Guard], component: TestComponent},
      {path: 'lesson5', canActivate: [Auth5Guard], component: TutorialComponent},
      {path: 'test5', canActivate: [Auth5Guard], component: TestComponent},
      {path: 'lesson6', canActivate: [Auth6Guard], component: TutorialComponent},
      {path: 'test6', canActivate: [Auth6Guard], component: TestComponent},
      {path: 'lesson7', canActivate: [Auth7Guard], component: TutorialComponent},
      {path: 'test7', canActivate: [Auth7Guard], component: TestComponent}
    ]
  },
];

@NgModule({

  imports: [
    RouterModule.forChild(tutorialRoutes),

  ],
  exports: [
    RouterModule
  ]
})
export class TutorialRoutingModule {
}
