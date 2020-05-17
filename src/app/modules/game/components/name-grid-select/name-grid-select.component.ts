import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-grid-select',
  templateUrl: './name-grid-select.component.html',
  styleUrls: ['./name-grid-select.component.scss']
})
export class NameGridSelectComponent implements OnInit {
  @Input() names: string[]

  constructor() { }

  ngOnInit(): void {
  }

}
