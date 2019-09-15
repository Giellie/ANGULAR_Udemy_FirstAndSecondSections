import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Input() customServerId: number;
  @Input() customServerStatus: string;

  private serverStatus: boolean = true;
  private serverId: string = "1";

  constructor() { }

  ngOnInit() {
  }

  getServerStatus():string{
    // this.serverStatus = !this.serverStatus;
    // return this.serverStatus;
    //return this.getRandomBoolean();
    return this.customServerStatus;
  }

  getRandomBoolean(): boolean{
    return Math.random() < 0.5;
  }

  getColor(): string{
    return this.customServerStatus === 'offline' ? 'red' : 'green';
  }

}
