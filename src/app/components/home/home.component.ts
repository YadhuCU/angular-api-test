import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allRecipes: any[] = [];
  allRecipesGlobal: any[] = [];
  searchKey: string = '';
  selections: string[] = ['Dinner', 'Snack', 'Lunch', 'All'];
  page: number = 1;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.api.getAllRecipes().subscribe((res: any) => {
      this.allRecipes = res.recipes;
      this.allRecipesGlobal = res.recipes;
    });
  }

  sortRecipes(option: string) {
    if (option === 'All') {
      this.allRecipes = this.allRecipesGlobal;
      return;
    }
    this.allRecipes = this.allRecipesGlobal.filter((item) =>
      item.mealType.includes(option),
    );
  }
}
