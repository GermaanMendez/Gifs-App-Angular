import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

//ProvderIn indica en que secciones de mi codigo estara disponile, en este caso al ser root esta disponible en TODOS los archivo
@Injectable({providedIn: 'root'})
export class GifsService {


    public gifList:Gif[]=[];

    private _tagsHistory    :string[]=[];
    private apiKey          :string = '16CTm4RdaVlH0i6Y06Rl0bvlpWfMH3Md';
    private serviceGiphyURL :string='https://api.giphy.com/v1/gifs/';

    //HttpClient es una clase propia de Angular que me permite trabajar con peticiones, como en c#, esta clase debo importarla en el app.ts y luego en cada componente que vaya a usarlo
    private httpClient:HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient=httpClient;
        this.loadLocalStorage();
     }


    public get tagsHistory() : string[] {
        //Creo una copia con el spread para no pasar la propiedad original ya que como se pasa por referencia esta puede ser modificada desde afuera de la clase y no quiero eso entonces paso una copia de tal forma que el array original no se vea afectado ante cambios
        return [...this._tagsHistory];
    }


    //Metodo que se encarga de organizar mi array de historial. Valida que si el tag ya existe lo manda a la primer posicion en el historial, sino lo agrega y siempre mantiene un limite de maximo 10 elementos en el array
    private organizeHistory(tag:string){
        tag=tag.toLowerCase();
        if(this._tagsHistory.includes(tag)){
            this._tagsHistory=this._tagsHistory.filter((element) => element !== tag);
        }
        this._tagsHistory.unshift(tag);
        this._tagsHistory=this._tagsHistory.slice(0,10);
        this.saveLocalStorage();
    }

     async searchTag(tag:string):Promise<void>{
        if(tag.trim().length===0)return;
        this.organizeHistory(tag);

        //Este objeto se crea usando la clase HttpClient en este caso HttpParams para setear los parametros, para eso se usa el valor set con el nombre y valor
        //En este caso los parametros son estos porque asi lo pide la api de giphy pero para otras apis los parametros seran diferentes
        const params = new HttpParams().set('api_key',this.apiKey).set('limit',10).set('q',tag)

        //Esto es un Observable que emite un valor cuando tenga la respuesta de la llamada a la api
        //Es por eso que debo suscribirme al evento que se emite cuando obtengo la respuesta de la api.
        //Usando el httpclient genero una peticion get a la api haciendo uso del objeto params
        //Como estoy en TypeScript debo poner de que tipo son los datos, en este caso digo que la respuesta de la api sera del tipo interfaz SearchRespone, para saber mas ir a la interfaz
        this.httpClient.get<SearchResponse>(`${this.serviceGiphyURL}search`,{params:params})
            .subscribe((resp) => {
                this.gifList=resp.data;
                console.log(this.gifList)
            })
    }

    private saveLocalStorage():void{
        localStorage.setItem('history',JSON.stringify(this._tagsHistory));
    }


    private loadLocalStorage():void{
        if (typeof localStorage !== 'undefined' && localStorage.getItem('history')) {
            this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
            if(this.tagsHistory.length===0)return;
            this.searchTag(this._tagsHistory[0])
          }
    }


}

