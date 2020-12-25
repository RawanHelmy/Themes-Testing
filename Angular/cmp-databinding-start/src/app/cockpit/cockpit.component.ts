import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName :string , serverContent : string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName :string , serverContent : string}>();
  //newServerName = '';
  @ViewChild('ServerContent' , { static: true }) serverContent: ElementRef;
  newServerContent = '';
  constructor() { }
  onAddServer(inputName : HTMLInputElement) {
    this.serverCreated.emit({
      serverName: inputName.value,
      serverContent: this.serverContent.nativeElement.value
    })
  }

  onAddBlueprint(inputName : HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: inputName.value,
      serverContent: this.serverContent.nativeElement.value
    })
  }
  ngOnInit(): void {
  }

}
