import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CocktailService } from '../cocktail.service';
import { UsersService } from '../users.service';
import { AddCocktailService } from '../addcocktail.service';
import { UsercocktailService } from '../usercocktail.service';
import { Cocktail } from '../cocktail.model';
import {Usercocktail} from "../usercocktail.model";
import { FormsModule } from '@angular/forms';
import {SeznamMetadataRequest} from "../seznam-metada-request.model";

@Component({
  selector: 'app-seznam-koktejlov',
  templateUrl: './seznam-koktejlov.component.html',
  styleUrls: ['./seznam-koktejlov.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule] // Dodajte HttpClientModule tukaj
})
export class SeznamKoktejlovComponent implements OnInit {
  cocktails: Cocktail[] | null = null;
  errorMessage: string = '';
  errorUserMessage: string = '';
  users: string[] | null = null;
  usercocktails: Usercocktail[] | null = null;
  searchQuery: string = '';

  constructor(private cocktailService: CocktailService, private usersService: UsersService, private usercocktailService: UsercocktailService,
  private addCocktailService: AddCocktailService) { }

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe(data => {
      this.cocktails = data ? data.drinks : null;
      this.errorMessage = '';
    },
    error => {
      this.cocktails = null;
      this.usercocktails = null;
      this.errorMessage = 'Service not available';
    }
    );
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
      this.selectedUser = this.users ? this.users[0] : null;
      if (this.selectedUser != null){
        this.usercocktailService.getUsercocktails(this.selectedUser).subscribe(data1 => {
          this.usercocktails = data1;
        });
      }
        this.errorUserMessage = '';
    },
      error => {
        this.users = null;
        this.usercocktails = null;
        this.errorUserMessage = 'Service not available';
      }
    );
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
        this.cocktails = data ? data.drinks : null;
        this.errorMessage = '';
      },
      error => {
        this.cocktails = null;
        this.errorMessage = 'Service not available';
      }
    );
  }

  addToFavourites(cocktailId: string): void {
    if (!this.selectedUser) {
      alert('No user selected');
      return;
    }
    const metadata = new SeznamMetadataRequest(Number(cocktailId), this.selectedUser);
    this.addCocktailService.addCocktail(metadata).subscribe(
      response => {
        console.log('Cocktail added to favourites', response);
        this.usersService.getUsers().subscribe(data => {
            this.users = data;
            if (this.selectedUser != null){
              this.usercocktailService.getUsercocktails(this.selectedUser).subscribe(data1 => {
                this.usercocktails = data1;
              });
            }
            this.errorUserMessage = '';
          },
          error => {
            this.users = null;
            this.usercocktails = null;
            this.errorUserMessage = 'Service not available';
          }
        );
      },
      error => {
        console.error('Error adding cocktail to favourites', error);
      }
    );
  }

}
