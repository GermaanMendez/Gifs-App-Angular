import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/homePage.component';
import { SearchBoxComponent } from './components/search-box/searchBox.component';
import { CardListComponent } from './components/card-list/card-list/card-list.component';
import { CardComponent } from './components/card/card/card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent,CardListComponent,CardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent
  ]
})
export class GifsModule { }
