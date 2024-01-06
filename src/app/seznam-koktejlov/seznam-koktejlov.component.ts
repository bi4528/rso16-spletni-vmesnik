import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../cocktail.model';

@Component({
  selector: 'app-seznam-koktejlov',
  templateUrl: './seznam-koktejlov.component.html',
  styleUrls: ['./seznam-koktejlov.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule] // Dodajte HttpClientModule tukaj
})
export class SeznamKoktejlovComponent implements OnInit {
  cocktails: Cocktail[] = [];

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe(data => {
      this.cocktails = data.drinks;
    });
  }
}
