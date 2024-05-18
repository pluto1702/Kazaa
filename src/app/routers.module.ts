import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './PageNotFound/page-not-found.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Route[] = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
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
