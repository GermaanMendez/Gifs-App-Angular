
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'homePage-component',
  standalone: false,
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.css',

})
export class HomePageComponent {

  private gifService:GifsService;

  constructor(gifService:GifsService){
    this.gifService=gifService;
  }

  get gifs():Gif[]{
      return this.gifService.gifList;
  }

 }
