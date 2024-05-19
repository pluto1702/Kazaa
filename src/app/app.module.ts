import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Dropdown } from './shared/dropdown.directive';
import { AppRouterModule } from './routers.module';
import { PageNotFoundComponent } from './PageNotFound/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth/auth.component';
import { LoadingSpinner } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './shared/alert/alert.component';
import { KazaaMainComponent } from './kazaa-main/kazaa-main.component';
import { SearchAreaComponent } from './kazaa-main/search-area/search-area.component';
import { FileAreaComponent } from './kazaa-main/file-area/file-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Dropdown,
    PageNotFoundComponent,
    KazaaMainComponent,
    SearchAreaComponent,
    FileAreaComponent,
    AuthComponent,
    LoadingSpinner,
    AlertComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AppRouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
