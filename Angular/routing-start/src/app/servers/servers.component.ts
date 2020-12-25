import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService , private Router:Router , private Route :ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  ReloadPage() {
    //this.Router.navigate(['servers'] , {relativeTo:this.Route})
  }
}
