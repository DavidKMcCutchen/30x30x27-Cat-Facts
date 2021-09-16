import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FactsComponent } from './facts/facts.component';
import { FactDetailsComponent } from './facts/fact-details/fact-details.component';
import { FactListComponent } from './facts/fact-list/fact-list.component';
import { MaterialModule } from "@cat-facts/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@cat-facts/core-data";
import { CoreStateModule } from "@cat-facts/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@cat-facts/environment';
import { UiLoginModule } from '@cat-facts/ui-login';
import { FactComponent } from './fact/fact.component';
import { FactInfoComponent } from './fact/fact-info/fact-info.component';

@NgModule({
  declarations: [AppComponent, FactsComponent, FactDetailsComponent, FactListComponent, FactInfoComponent, FactComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}