import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { HerosDetailsComponent } from './heros-details/heros-details.component';
import { HerosListComponent } from './heros-list/heros-list.component';
import { NavbarComponent } from './navbar/navbar.component';
<<<<<<< HEAD

=======
import {RouterModule} from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
>>>>>>> add-router: ajout des routes
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SearchComponent,
    HerosDetailsComponent,
    HerosListComponent,
<<<<<<< HEAD
    NavbarComponent
=======
    NavbarComponent,
    FavoriteComponent
>>>>>>> add-router: ajout des routes
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([ 
      {path: '', component:HomeComponent},
      {path: 'favorite', component:FavoriteComponent},
      {path: 'search', component:SearchComponent},
      {path: 'heros-details', component:HerosDetailsComponent},
      {path: 'profile/:id', component:ProfileComponent},
      {path: '**', component:HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
