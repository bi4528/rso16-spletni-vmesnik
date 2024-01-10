import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CocktailService } from '../cocktail.service';
import { UsersService } from '../users.service';
import { UsercocktailService } from '../usercocktail.service';
import { Cocktail } from '../cocktail.model';
import {Usercocktail} from "../usercocktail.model";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seznam-koktejlov',
  templateUrl: './seznam-koktejlov.component.html',
  styleUrls: ['./seznam-koktejlov.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule] // Dodajte HttpClientModule tukaj
})
export class SeznamKoktejlovComponent implements OnInit {
  cocktails: Cocktail[] = [];
  users: string[] = [];
  usercocktails: Usercocktail[] = [];
  searchQuery: string = '';

  constructor(private cocktailService: CocktailService, private usersService: UsersService, private usercocktailService: UsercocktailService) { }

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe(data => {
      this.cocktails = data.drinks;
    });
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
      this.selectedUser = this.users[0]
      this.usercocktailService.getUsercocktails(this.selectedUser).subscribe(data1 => {
        this.usercocktails = data1;
      });
    });
  }

  selectedUser: string | null = null;

  selectUser(user: string): void {
    this.selectedUser = user;
    this.usercocktailService.getUsercocktails(user).subscribe(data => {
      this.usercocktails = data;
    });
  }

  searchCocktails(): void {
    this.cocktailService.getCocktails(this.searchQuery).subscribe(data => {
      this.cocktails = data.drinks;
    });
  }

}
