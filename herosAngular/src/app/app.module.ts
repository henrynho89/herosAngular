import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { HerosDetailsComponent } from './heros-details/heros-details.component';
import { HerosListComponent } from './heros-list/heros-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavoriteComponent } from './favorite/favorite.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes : Routes =[
  {path: '', component:HomeComponent},
  {path: 'favorite', component:FavoriteComponent},
  {path: 'search', component:SearchComponent},
  {path: 'heros-details', component:HerosDetailsComponent},
  {path: 'profile/:id', component:ProfileComponent},
  {path: '**', component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SearchComponent,
    HerosDetailsComponent,
    HerosListComponent,
    NavbarComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
