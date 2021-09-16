import { createAction, props } from "@ngrx/store";
import {  Fact } from "@cat-facts/api-interfaces";

// Select Entity

export const selectFact = createAction(
    '[FACT] Select Fact',
    props<{ factId: string }>()
);

// Load all Entities

export const loadFacts = createAction(
    '[FACT] Load Facts'
);

export const loadFactsSuccess = createAction(
    '[FACT] Load Facts Success',
    props<{ facts: Fact[]}>()
);

export const loadFactsFailed = createAction(
    '[FACT] Load Facts Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadFact = createAction(
    '[FACT] Load Fact',
    props<{ factId: string}>()
);

export const loadFactSuccess = createAction(
    '[FACT] Load Fact Success',
    props<{ fact: Fact}>()
);

export const loadFactFailed = createAction(
    '[FACT] Load Fact Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createFact = createAction(
    '[FACT] Create Fact',
    props<{ fact: Fact}>()
);

export const createFactSuccess = createAction(
    '[FACT] Create Fact Success',
    props<{ fact: Fact}>()
);

export const createFactFailed = createAction(
    '[FACT] Create Fact Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateFact = createAction(
    '[FACT] Update Fact',
    props<{ fact: Fact}>()
);

export const updateFactSuccess = createAction(
    '[FACT] Update Fact Success',
    props<{ fact: Fact}>()
);

export const updateFactFailed = createAction(
    '[FACT] Create Fact Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteFact = createAction(
    '[FACT] Delete Fact',
    props<{ fact: Fact}>()
);

export const deleteFactSuccess = createAction(
    '[FACT] Delete Fact Success',
    props<{ fact: Fact}>()
);

export const deleteFactFailed = createAction(
    '[FACT] Create Fact Failed',
    props<{ error: any}>()
);