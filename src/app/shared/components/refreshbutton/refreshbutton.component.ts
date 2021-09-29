import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-refreshbutton',
  templateUrl: './refreshbutton.component.html',
  styleUrls: ['./refreshbutton.component.css']
})
export class RefreshbuttonComponent implements OnInit {
  @Output() refreshSomething = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.refreshSomething.emit('refreshing');
  }
}
