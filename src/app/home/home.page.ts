import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemons: any[] = [
    { id: 1, name: 'Bulbasaur' },
    { id: 2, name: 'Charmander' },
    { id: 3, name: 'Squirtle' }
  ];
  filteredPokemons: any[] = [];

  constructor() {}

  ngOnInit() {
    this.filteredPokemons = [...this.pokemons];
  }

  filterPokemons(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredPokemons = this.pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchTerm);
    });
  }
}
