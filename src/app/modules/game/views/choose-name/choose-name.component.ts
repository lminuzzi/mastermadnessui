import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-name',
  templateUrl: './choose-name.component.html',
  styleUrls: ['./choose-name.component.scss']
})
export class ChooseNameComponent implements OnInit {
  images = ['fig-1.png', 'fig-2.png', 'fig-3.png', 'fig-4.png', 'fig-5.png', 'fig-6.png']
  imgRootSource = '/assets/images/carousel/template1'

  constructor() { }

  ngOnInit(): void {
  }

}
