import { emptyFact } from "@cat-facts/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { factAdapter, FactState, FACT_FEATURE_KEY } from "./facts.reducer";

export const getFactState = createFeatureSelector<FactState>(FACT_FEATURE_KEY);

const { selectAll, selectEntities } = factAdapter.getSelectors();

export const getFactsLoaded = createSelector(
    getFactState,
    (state: FactState) => state.loaded
);

export const getFactError = createSelector(
    getFactState,
    (state: FactState) => state.error
);

export const getAllFacts = createSelector(
    getFactState,
    (state: FactState) => selectAll(state)
);

export const getFactEntities = createSelector(
    getFactState,
    (state: FactState) => selectEntities(state)
);

export const getSelectedFactId = createSelector(
    getFactState,
    (state: FactState) => state.selectedId
);

export const getSelectedFact = createSelector(
    getFactEntities,
    getSelectedFactId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyFact
);