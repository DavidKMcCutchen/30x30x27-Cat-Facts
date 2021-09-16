import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Fact } from "@cat-facts/api-interfaces";
import { FactsService } from "@cat-facts/core-data";
import * as FactActions from './facts.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class FactEffects{
    loadFact$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FactActions.loadFact),
            fetch({
                run: (action) =>
                    this.factsService
                        .getOne(action.factId)
                        .pipe(map((fact: Fact) => FactActions.loadFactSuccess({ fact }))),
                    onError: (action, error) => FactActions.loadFactFailed({ error })    
            })
        ));
    loadFacts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FactActions.loadFacts),
            fetch({
                run: () =>
                    this.factsService
                    .getAll()
                    .pipe(
                        map((facts: Fact[]) => FactActions.loadFactsSuccess({ facts }))
                    ),
                onError: (action, error) => FactActions.loadFactsFailed({ error })    
            })
        ));
    //     createFact$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(FactActions.createFact),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.factsService
    //                     .create(action.fact)
    //                     .pipe(map((fact: Fact) => FactActions.createFactSuccess({ fact }))),
    //                 onError: (action, error) => FactActions.createFactFailed({ error })    
    //         })
    // ));

    // updateFact$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(FactActions.updateFact),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.factsService
    //                     .update(action.fact)
    //                     .pipe(map((fact: Fact) => FactActions.updateFactSuccess({ fact}))),
    //                 onError: (action, error) => FactActions.updateFactFailed({ error })    
    //         })
    // ));

    // deleteFact$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(FactActions.deleteFact),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.factsService
    //                     .delete(action.fact)
    //                     .pipe(
    //                         map(() => FactActions.deleteFactSuccess({ fact: action.fact }))
    //                     ),
    //                 onError: (action, error) => FactActions.deleteFactFailed({ error })    
    //         })
    //     ));    


    constructor(
        private actions$: Actions,
        private factsService: FactsService
    ) {}    
}