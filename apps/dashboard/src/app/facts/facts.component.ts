import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Fact, emptyFact } from '@cat-facts/api-interfaces';
import { FactFacade } from '@cat-facts/core-state';
import { Observable } from 'rxjs';


@Component({
  selector: 'cat-facts-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {
  allFacts$: Observable<Fact[]> = this.factFacade.allFacts$;
  selectedFact$: Observable<Fact> = this.factFacade.selectedFacts$;

  form: FormGroup;

  constructor(
    private factFacade: FactFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.factFacade.mutations$.subscribe((_) => this.resetFact());
  }

  ngOnInit() {
    this.initForm();
    this.factFacade.loadFacts();
    this.resetFact()

    const factRouteId = this.route.snapshot.params['id'];

    if (factRouteId) {
      this.loadFact((factRouteId))
    }
  }

  viewFact(factId: string) {
    this.router.navigate(["facts", factId])
  }

  loadFact(factId: string) {
    this.factFacade.selectFact(factId);
    this.factFacade.loadFact(factId);
  }

  selectFact(fact: Fact) {
    this.factFacade.selectFact(fact.fact)
    this.form.patchValue(fact);
  }

  saveFact(fact: Fact) {
    this.factFacade.saveFact(fact);
  }

  deleteFact(fact: Fact) {
    this.factFacade.deleteFact(fact);
  }

  resetFact() {
    this.form.reset();
    this.selectFact(emptyFact)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      dateOfBirth: [''],
      placeOfBirth: [''],
      occupation: [''],
      iq: [''],
      banished: ['']
    })
  }
}
