import { Component, OnInit } from '@angular/core';

import { ChooseNameService } from './../../services/choose-name-service/choose-name.service';

@Component({
  selector: 'app-choose-name',
  templateUrl: './choose-name.component.html',
  styleUrls: ['./choose-name.component.scss']
})
export class ChooseNameComponent implements OnInit {
  //Carousel Component
  images : string[] = ['fig-1.png', 'fig-2.png', 'fig-3.png', 'fig-4.png', 'fig-5.png', 'fig-6.png']
  imgRootSource : string = '/assets/images/carousel/template1'
  //Choose Name Component
  listOfNames : string[]
  numberOfNames : number = 15

  constructor(
    private chooseNameService: ChooseNameService
  ) { }

  ngOnInit(): void {
    this.listOfNames = this.chooseNameService.getNames(this.numberOfNames)
  }
}
