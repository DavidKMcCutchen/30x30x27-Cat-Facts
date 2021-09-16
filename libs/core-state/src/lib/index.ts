import { ActionReducerMap } from "@ngrx/store";
import * as fromFacts from './facts/facts.reducer';

export interface AppState {
    [fromFacts.FACT_FEATURE_KEY]: fromFacts.FactState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromFacts.FACT_FEATURE_KEY]: fromFacts.factReducer
};