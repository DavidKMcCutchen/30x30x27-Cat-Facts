import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { FactsComponent } from './facts/facts.component';
import { LoginComponent, WildComponent } from "@cat-facts/ui-login";
import { FactComponent } from './fact/fact.component';

const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'wild', component: WildComponent},
  {path: 'facts', component: FactsComponent},
  {path: 'facts/:id', component: FactComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }