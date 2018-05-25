import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FoodItem, getFoods, AnimalItem, getAnimals, getStates, PokemonGroup, getPokemonGroups, getToppingList } from './staticDatas';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from './MyErrorStateMatcher';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectComponent implements OnInit {
  foods: FoodItem[];
  way2Selected: string;
  selectedInfForm: string;
  animals: AnimalItem[];
  pokemonGroups: PokemonGroup[];
  states: string[];
  toppingList: string[];

  animalControl = new FormControl('', [Validators.required]);
  disableSelect = new FormControl(false);
  pokemonControl = new FormControl();
  toppings = new FormControl();
  toppingsControl = new FormControl();
  panelColor = new FormControl('green');

  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();

  constructor() {
    this.foods = getFoods();
    this.animals = getAnimals();
    this.states = getStates();
    this.pokemonGroups = getPokemonGroups();
    this.toppingList = getToppingList();
    this.way2Selected = 'option2';
  }

  ngOnInit() {
  }

}
