import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FetchApiService } from '../../services/fetch-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, InputIconModule, IconFieldModule, InputTextModule, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
  movies: any[] = []; 
  webseries: any[] = [];
  showMovies: boolean = true; // State variable to toggle between movies and web series

  constructor(private fetchApiService: FetchApiService) {}

  // Fetch movies
  movieApi() {
    this.fetchApiService.getMovies().subscribe(
      (data) => {
        this.movies = data.results; 
        console.log(this.movies); 
        this.showMovies = true; // Set state to show movies
      }
    );
  }

  // Fetch web series
  webSeries() {
    this.fetchApiService.getWebSeries().subscribe(
      (test) => {
        this.webseries = test.results;
        console.log(this.webseries);
        this.showMovies = false; // Set state to show web series
      }
    );
  }
}