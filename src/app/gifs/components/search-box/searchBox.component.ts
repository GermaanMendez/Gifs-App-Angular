import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'gifs-search-box-component',
    template:`
        <h5>Buscar:</h5>
        <input type="text" 
               class="form-control" 
               placeholder="Search Gifs..."
               (keyup.enter)="searchTag()"
               #txtTagInput>
    ` 
})
// (keyup.enter)= solo se ejecuta el evento keyup pero de la tecla enter
//Ese #txtTagInput es una referencia que solo vive dentro del propio template es decir dentro del codigo del input
//La genero para poder tener una referencia al input dentro del input y asi obtener el valor cuando se pulsa una tecla y llamar ala funcion


export class SearchBoxComponent  {

    @ViewChild('txtTagInput')
    public tagInput!:ElementRef<HTMLInputElement>;
    private gifsService:GifsService;

    constructor(gifsService:GifsService) {
        this.gifsService=gifsService;
     }

    searchTag(){
        const newTag = this.tagInput.nativeElement.value;
        this.gifsService.searchTag(newTag);
        this.tagInput.nativeElement.value='';
    }
}