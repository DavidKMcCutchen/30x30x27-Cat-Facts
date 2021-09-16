import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Fact } from '@cat-facts/api-interfaces';

@Component({
  selector: 'cat-facts-fact-list',
  templateUrl: './fact-list.component.html',
  styleUrls: ['./fact-list.component.scss']
})
export class FactListComponent {
  @Input() facts: Fact[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() factViewed = new EventEmitter();
}
