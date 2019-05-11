import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {TutorialPageComponent} from './tutorial-page.component';
import {TutorialComponent} from './tutorial/tutorial.component';
import {TestComponent} from './test/test.component';
import {TutorialRoutingModule} from './tutorial-routing.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    TutorialPageComponent,
    TutorialComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule,
    ReactiveFormsModule,
  ],

})
export class TutorialModule { }
