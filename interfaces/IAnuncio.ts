export interface IAnuncio {
    id?: number;
    token?: string;
    tipoveiculo?:Array<any>;
    categoria?:Array<any>;    
    titulo:string;
    descricao?:string;
    imagem?:string;
    valor:number;
    publicar?:boolean;
}