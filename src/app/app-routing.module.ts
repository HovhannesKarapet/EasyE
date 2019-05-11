import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';

import {HomePageComponent} from './components/home-page/home-page.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {AuthGuard} from './shared/auth.guard';
import {NotFoundComponent} from './components/not-found/not-found.component';

const appRoutes = [
  {path: '', component: HomePageComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'tutorial', /*canActivate: [AuthGuard],*/ loadChildren: './components/tutorial-page/tutorial.module#TutorialModule' },
  {path: 'notFound', component: NotFoundComponent},
  {path: '**', redirectTo: 'notFound'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
