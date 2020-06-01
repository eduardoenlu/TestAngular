export interface BaseDescripcionModel {
    lngIdentificador: number;
    strClave: string;
    strDescripcion: string;
}

export interface CardModel extends BaseDescripcionModel {
    strImgSrc: string;
    strExtraInfo: string[];
    strParams: string[];
}

export interface ArticuloModel extends BaseDescripcionModel {
    dblPrecioVenta: number;
    strImageSrc: string;
}