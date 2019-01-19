import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {FwModule} from '../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import {appRoutes} from './app.routing';
import {CountryListComponent} from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import {AuthenticatedUserComponent} from './authenticated-user/authenticated-user.component';
import { UserService } from './services/user.service';
import { UserApi } from '../fw/users/user-api';
import { AuthGuard } from './services/auth.service';
import { AppDataservice } from './services/app.data.service';
import { CountryPanelComponent } from './panels/country-panel/country-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CountryListComponent,
    CountryDetailComponent,
    CountryMaintComponent,
    SettingsComponent,
    AuthenticatedUserComponent,
    CountryPanelComponent,
  ],
  imports: [
    BrowserModule,
    FwModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,{provide:UserApi,useExisting:UserService},AuthGuard,AppDataservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
