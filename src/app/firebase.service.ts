import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Recipe } from './shared/recipe.model';
import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { exhaustMap, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  recipesUrl: string =
    'https://mini-recipe-app-default-rtdb.firebaseio.com/recipes.json';
  constructor(private http: HttpClient, private authService: AuthService) {}

  fetchRecipes() {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.get<Recipe[]>(
          'https://mini-recipe-app-default-rtdb.firebaseio.com/recipes.json?auth=' +
            user?.token,
          {}
        );
      })
    );
  }

  saveRecipe(body: Recipe) {
    this.http.post(this.recipesUrl, body).subscribe((responseData) => {
      console.log(responseData);
    });
  }
}
