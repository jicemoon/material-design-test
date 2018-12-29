import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { State, StateGroup, stateGroups, states } from './staticData';
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  states = states;
  stateGroups = stateGroups;
  stateForm: FormGroup = this.fb.group({
    stateGroup: '',
  });

  stateGroupOptions: Observable<StateGroup[]>;


  constructor(private fb: FormBuilder) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
  }
  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterGroup(val))
      );
  }
  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
  filterGroup(val: string): StateGroup[] {
    if (val) {
      return this.stateGroups
        .map(group => ({ letter: group.letter, names: this._filter(group.names, val) }))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

  private _filter(opt: string[], val: string) {
    const filterValue = val.toLowerCase();
    return opt.filter(item => item.toLowerCase().startsWith(filterValue));
  }
}
