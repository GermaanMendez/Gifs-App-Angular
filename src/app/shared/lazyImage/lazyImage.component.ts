import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: false,
  templateUrl: './lazyImage.component.html',
  styleUrl: './lazyImage.component.css',
})
export class LazyImageComponent implements OnInit {
  
  public hasLoaded:boolean=false;

  @Input()
  public url!:string;

  @Input()
  public alt!:string;

  ngOnInit(): void {
    if(!this.url)throw new Error('URL property is required')
  }

  OnLoad(){
    this.hasLoaded=true;
  }

 }
