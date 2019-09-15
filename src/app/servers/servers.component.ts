import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private serverAmount: any[] = [];
  private serverId: number = 0;
  private activateButton: boolean = false;
  private typedText: string = "MOOOOOOO";
  private serverAdded: boolean = false;
  private serverStatus: string = "offline";

  constructor() { 
    setTimeout(() => {
      this.activateButton = true;
    },2000);    
  }

  ngOnInit() {
  }

  onInputTyping(event: Event): void{
    this.typedText = (<HTMLInputElement>event.target).value;
    console.log("TYPED", this.typedText);
  }

  addServer(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverAdded = true;
    this.serverId++;
    this.serverAmount.push({serverId:this.serverId, serverStatus: this.serverStatus})
  }

}
