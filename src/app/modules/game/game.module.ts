import { CarouselComponent } from './components/carousel/carousel.component';
import { ChooseNameComponent } from './views/choose-name/choose-name.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';


@NgModule({
  declarations: [
    ChooseNameComponent, 
    CarouselComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
