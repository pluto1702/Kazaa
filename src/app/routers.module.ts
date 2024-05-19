import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './PageNotFound/page-not-found.component';
import { AuthComponent } from './auth/auth.component';
import { KazaaMainComponent } from './kazaa-main/kazaa-main.component';

const appRoutes: Route[] = [
  { path: 'landing', component: LandingPageComponent, pathMatch: 'full' },
  { path: '', component: KazaaMainComponent },
  { path: 'auth', component: AuthComponent },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRouterModule {}
