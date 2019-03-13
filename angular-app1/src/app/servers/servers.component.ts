import { Component, OnInit } from '@angular/core';

@Component({
  /*selector: '[app-servers]',*/
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverId: number = 10;
  status: string='Offline';
  allowNewServer= true;
  serverCreationStatus = 'No server is created yet!';
  serverName='';
  serverCreated=false;

  constructor() { 
    this.status = Math.random()>.5 ? 'Online' : 'Offline';
  }

  ngOnInit() {
  }

  getServerStatus() {
    return this.status;
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.status === 'Online' ? 'green' : 'red';
  }

}
