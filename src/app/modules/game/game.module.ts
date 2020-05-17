import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { ChooseNameComponent } from './views/choose-name/choose-name.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NameGridSelectComponent } from './components/name-grid-select/name-grid-select.component';


@NgModule({
  declarations: [
    ChooseNameComponent, 
    CarouselComponent, 
    NameGridSelectComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
