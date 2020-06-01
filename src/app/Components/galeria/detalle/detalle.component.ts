// ------------------------------------FrameWork imports
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
// ------------------------------------Libs

// --------------------------Services and Models
import { ArticuloModel } from '../../../shared/Models';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit, OnDestroy {
  articulo: ArticuloModel;
  constructor(

    public dialogRef: MatDialogRef<DetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ArticuloModel,
    public dialog: MatDialog
  ) {
    this.articulo = data;
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
