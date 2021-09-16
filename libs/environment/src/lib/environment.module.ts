import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FACT_ENVIRONMENT } from './facts.token';
import { FactEnvironment } from "./facts.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: FactEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: FACT_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
