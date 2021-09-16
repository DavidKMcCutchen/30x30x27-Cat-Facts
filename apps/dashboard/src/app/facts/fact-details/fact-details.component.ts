import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Fact } from '@cat-facts/api-interfaces';

@Component({
  selector: 'cat-facts-fact-details',
  templateUrl: './fact-details.component.html',
  styleUrls: ['./fact-details.component.scss']
})
export class FactDetailsComponent {
  currentFact: Fact;
  originalTitle: string;
  

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set fact(value) {
    if (value) this.originalTitle = value.fact;
    this.currentFact = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  }
}
