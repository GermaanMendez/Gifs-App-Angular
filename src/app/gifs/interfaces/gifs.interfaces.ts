// Generated by https://quicktype.io

//La respuesta de la api es un objeto que tiene muchos atributos donde algunos son mas objetos
//que dentro tienen mas objetos o mas listas etc entonces hacer una interfa a mano es imposible por lo tanto lo que debo hacer
//es utilizar https://quicktype.io donde lo que hare sera hacer una llamada a la api por postman y copiarme toda la respuesta
//luego voy a esta web, selecciono typeScript y copio el codigo esto me generar de forma automatica una interfaz que dentro tenga todos los tipos de datos
//Esto me permitira setearle un tipo de dato a la respuesta de la api ademas me facilitara el acceso a los aributos y variables que puedan haber dentro de la respuestas
// como por ejemplo el atributo data que es un objeto que contiene un array con cada uno de los gifs y sus respectivos atributos
//Por eso la web me lo genero asi= data : gif[] es un array de tipo gif donde tambien gneero la interfaz gif que tiene todos los atributos que tiene el objeto gif

export interface SearchResponse {
    data:       Gif[];
    pagination: Pagination;
    meta:       Meta;
}

export interface Gif {
    type:                       Type;
    id:                         string;
    url:                        string;
    slug:                       string;
    bitly_gif_url:              string;
    bitly_url:                  string;
    embed_url:                  string;
    username:                   Username;
    source:                     string;
    title:                      string;
    rating:                     Rating;
    content_url:                string;
    source_tld:                 string;
    source_post_url:            string;
    is_sticker:                 number;
    import_datetime:            string;
    trending_datetime:          TrendingDatetime;
    images:                     Images;
    user:                       User;
    analytics_response_payload: string;
    analytics:                  Analytics;
}

export interface Analytics {
    onload:  Onclick;
    onclick: Onclick;
    onsent:  Onclick;
}

export interface Onclick {
    url: string;
}

export interface Images {
    original:                 { [key: string]: string,url:string };
    downsized:                The480_WStill;
    downsized_large:          The480_WStill;
    downsized_medium:         The480_WStill;
    downsized_small:          DownsizedSmall;
    downsized_still:          The480_WStill;
    fixed_height:             { [key: string]: string };
    fixed_height_downsampled: { [key: string]: string };
    fixed_height_small:       { [key: string]: string };
    fixed_height_small_still: The480_WStill;
    fixed_height_still:       The480_WStill;
    fixed_width:              { [key: string]: string };
    fixed_width_downsampled:  { [key: string]: string };
    fixed_width_small:        { [key: string]: string };
    fixed_width_small_still:  The480_WStill;
    fixed_width_still:        The480_WStill;
    looping:                  { [key: string]: string };
    original_still:           The480_WStill;
    original_mp4:             DownsizedSmall;
    preview:                  DownsizedSmall;
    preview_gif:              The480_WStill;
    preview_webp:             The480_WStill;
    "480w_still":             The480_WStill;
    hd?:                      DownsizedSmall;
}

export interface The480_WStill {
    height: string;
    width:  string;
    size:   string;
    url:    string;
}

export interface DownsizedSmall {
    height:   string;
    width:    string;
    mp4_size: string;
    mp4:      string;
}

export enum Rating {
    G = "g",
    PG = "pg",
}

export enum TrendingDatetime {
    The00000000000000 = "0000-00-00 00:00:00",
}

export enum Type {
    GIF = "gif",
}

export interface User {
    avatar_url:    string;
    banner_image:  string;
    banner_url:    string;
    profile_url:   string;
    username:      Username;
    display_name:  DisplayName;
    description:   Description;
    instagram_url: string;
    website_url:   string;
    is_verified:   boolean;
}

export enum Description {
    TheGiphyChannelForTOEIAnimation = "The Giphy channel for TOEI Animation",
}

export enum DisplayName {
    ToeiAnimation = "Toei Animation",
}

export enum Username {
    ToeiAnimation = "ToeiAnimation",
}

export interface Meta {
    status:      number;
    msg:         string;
    response_id: string;
}

export interface Pagination {
    total_count: number;
    count:       number;
    offset:      number;
}