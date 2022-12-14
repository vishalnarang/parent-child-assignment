import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expand-child',
  templateUrl: './expand-child.component.html',
  styleUrls: ['./expand-child.component.css'],
})
export class ExpandChildComponent implements OnInit {
  @Input() childData: any;

  constructor() {}

  ngOnInit() {}
}
