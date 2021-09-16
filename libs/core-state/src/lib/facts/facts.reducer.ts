import { Fact } from "@cat-facts/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as FactActions from './facts.actions';

export const FACT_FEATURE_KEY = 'facts';

export interface FactState extends EntityState<Fact> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface FactPartialState {
    readonly [FACT_FEATURE_KEY]: FactState
};

export const factAdapter: EntityAdapter<Fact> = createEntityAdapter<Fact>({ selectId: (f) => f.fact });

export const initialFactState: FactState = factAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): FactState => ({ ...state, error});

const onDispatch = (state, action): FactState => ({
    ...state,
    loaded: false,
    error: null
});

const _factReducer = createReducer(
    initialFactState,
    on(
        FactActions.loadFactFailed,
        FactActions.loadFactsFailed,
        FactActions.createFactFailed,
        FactActions.updateFactFailed,
        FactActions.deleteFactFailed,
        onFailed
    ),
    on(
        FactActions.loadFact,
        FactActions.loadFacts,
        FactActions.createFact,
        FactActions.updateFact,
        FactActions.deleteFact,
        onDispatch
    ),
    on(
        FactActions.loadFactSuccess, (state, { fact }) =>
        factAdapter.upsertOne(fact, {...state, loaded: true})
    ),
    on(
        FactActions.selectFact, (state, { factId }) => ({
            ...state,
            selectedId: factId
        })
    ),
    on(
        FactActions.loadFactsSuccess, (state, { facts }) =>
        factAdapter.setAll(facts, {...state, loaded: true})
    ),
    on(
        FactActions.deleteFactSuccess, (state, { fact }) =>
        factAdapter.removeOne(fact.fact, {...state, loaded: true})
    ),
    on(
        FactActions.updateFactSuccess, (state, { fact }) =>
        factAdapter.updateOne(
            {id: fact.fact, changes: fact},
            {...state, loaded: true}
        )
    ),
    on(
        FactActions.createFactSuccess, (state, {fact }) =>
        factAdapter.addOne(fact, {...state, loaded: true})
    ),
)

export function factReducer(
    state: FactState | undefined,
    action: Action
) {
    return _factReducer(state, action)
}