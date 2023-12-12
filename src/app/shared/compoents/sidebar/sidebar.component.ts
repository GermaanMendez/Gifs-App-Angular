import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: false,
  templateUrl:'./sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  private gifsService:GifsService;
  
  constructor(gifsService:GifsService){
    this.gifsService=gifsService;
  }

  get tagsHistory():string[]{
    return this.gifsService.tagsHistory;
  }

  sendResearch(tag:string){
    this.gifsService.searchTag(tag);
  }

 }
