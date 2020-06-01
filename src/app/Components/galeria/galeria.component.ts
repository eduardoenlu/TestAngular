import { Component, OnInit } from '@angular/core';

import { CardModel, ArticuloModel } from '../../Shared/models';
import { DetalleComponent } from './detalle/detalle.component';
import { MatDialog } from '@angular/material/dialog';

const hebillas = [
  'BAND-003 20MM N FINA',
  'BILL-028-CF',
  'BILL-031-CF',
  'CON-015 ORO-NEG',
  'CONCHO 012 3PCS N-NG',
  'CONCHO-06-B PLATA-ORO',
  'GL-004 40MM western',
  'GL-027 40MM western',
  'GL-060 40MM',
  'GL-191 20MM NS',
  'GL-204 35MM REV',
  'GL-254 40MM',
  'GL-264 45MM CAB CABALLO',
  'GL-290 45MM LV',
  'GL-343 30mm Oro-N',
  'GL-456 40MM NS',
  'GL-495 45MM PLATA-ORO',
  'GL-522 30MM NS',
  'GL-538 SET 40MM NEG-ORO-PLAT',
  'GL-554 45MM NEG-ORO-PLAT',
  'GL-573 45MM PLATA-NEG',
  'GL-580 25MM PLATA-ORO',
  'GL-631 20MM NS',
  'GL-796 30MM PP',
  'GL-804 35MM P LASER',
  'GL-827 40MM P LASER',
  'GL-863 45MM FLAG',
  'GL-869 45MM NEGRO-ORO',
  'GL-889 50MM ORO-PLATA',
  'GL-970 30MM NQ',
  'GL-997 40MM P-PP',
  'GL-1025 35MM P L',
  'GL-1039 35MM PP',
  'GL-1059 35MM P+LASER',
  'GL-1065 40MM N+LASER',
  'GL-1076 50MM CAB TORO',
  'GL-1088 40MM PLATA CROMO SATIN',
  'GL-1114 30MM NQ',
  'GL-1119 21MM ORO',
  'GL-1144 50MM PLATA-O-NEG',
  'GL-1160 50MM N-O-NEG',
  'GL-1176 45MM PLATA-ORO',
  'GL-1246 35MM PAV+L',
  'GTD-1755 45MM LV'
];



@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  arrPageOfItems: Array<any>;
  arrArticulosFull = [];
  arrArticulos: CardModel[] = [];
  intPageInit = 1;
  intSelectedCategory = 0;
  constructor(
    public dialog: MatDialog) {
      this.returnHebillas();
      this.arrArticulos=this.convertToCard(this.arrArticulosFull);
      console.log(this.arrArticulos);
     }

  ngOnInit(): void {
  }

  onChangePage(pageOfItems: Array<any>) {

    this.arrPageOfItems = [];
    this.arrPageOfItems = pageOfItems;
  }

  convertToCard(items: Array<any>) {
    const cards: CardModel[] = [];
    items.forEach(current => {
      const card: CardModel = {
        lngIdentificador: current.lngIdentificador,
        strClave: current.strClave,
        strDescripcion: current.strDescripcion,
        strImgSrc: current.strImageSrc,
        strExtraInfo: ['Precio de venta: $' + current.dblPrecioVenta.toString()],
        strParams: [current.lngIdentificador]
      };
      cards.push(card);
    });
    return cards;
  }

  returnHebillas(){
    this.arrArticulosFull = hebillas.map((current,index)=> {
      let articulo: ArticuloModel = {
        strClave: current.substr(0,4),
        dblPrecioVenta: 150,
        strDescripcion: current,
        strImageSrc: current +'.jpg',
        lngIdentificador: index
      }
      return articulo;
    });
  }

  gotoDetalle(articulo: CardModel) {

    const art = this.arrArticulosFull[this.arrArticulosFull.findIndex(x => x.lngIdentificador === articulo.lngIdentificador)];
    localStorage.setItem('articulo', JSON.stringify(art));
    this.openDialog(art);

  }

  openDialog(art: ArticuloModel): void {
    const dialogRef = this.dialog.open(DetalleComponent, {
      panelClass: ['dark', 'no-padding'],
      data: art
    });
  }

}
