import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backbutton',
  templateUrl: './backbutton.component.html',
  styleUrls: ['./backbutton.component.css']
})
export class BackbuttonComponent implements OnInit {

  constructor(
    private location:Location
  ) { }

  ngOnInit(): void {
  }
  goBack(){
    this.location.back()
  }
}
