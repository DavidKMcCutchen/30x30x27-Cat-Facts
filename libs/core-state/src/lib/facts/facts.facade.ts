import { Injectable } from "@angular/core";
import { Fact } from "@cat-facts/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as FactActions from './facts.actions';
import * as FactSelectors from './facts.selectors';
import * as fromFacts from './facts.reducer';


@Injectable({
    providedIn: 'root'
})

export class FactFacade {
    allFacts$ = this.store.pipe(
        map((state) => FactSelectors.getAllFacts(state)),
    )
    selectedFacts$ = this.store.pipe(select(FactSelectors.getSelectedFact));
    loaded$ = this.store.pipe(select(FactSelectors.getFactsLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === FactActions.createFact({} as any) .type ||
        action.type === FactActions.updateFact({} as any) .type ||
        action.type === FactActions.deleteFact({} as any) .type 
        ))

        selectFact(factId: string) {
            this.dispatch(FactActions.selectFact({ factId }));
        };

        loadFacts() {
            this.dispatch(FactActions.loadFacts())
        };

        loadFact(factId: string) {
            this.dispatch(FactActions.loadFact({ factId }))
        };

        saveFact(fact: Fact) {
            fact.fact ? this.updateFact(fact) : this.createFact(fact)
        };

        createFact(fact: Fact) {
            this.dispatch(FactActions.createFact({ fact }))
        };

        updateFact(fact: Fact) {
            this.dispatch(FactActions.updateFact({ fact }))
        };

        deleteFact(fact: Fact) {
            this.dispatch(FactActions.deleteFact({ fact }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromFacts.FactPartialState>,
            private actions$: ActionsSubject
        ) {}
}