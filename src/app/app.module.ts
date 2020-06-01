import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DemoMaterialModule } from './demo-material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardComponent} from './Shared/card/card.component';
import {CardpaginatorComponent} from './Shared/cardpaginator/cardpaginator.component';
import { GaleriaComponent} from './Components/galeria/galeria.component';
import { DetalleComponent } from './Components/galeria/detalle/detalle.component';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,CardComponent,CardpaginatorComponent,GaleriaComponent, DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
