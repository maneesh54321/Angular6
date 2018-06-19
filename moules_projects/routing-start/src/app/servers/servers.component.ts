import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    // this.router.navigate(['servers'],{relativeTo:this.route});
    // this.router doesnt have information about current component loaded. so ['/servers'] or ['servers'] is always absolute.
    // To remedy that, we use {relativeTo:this.route}. this.route has all the metadata about the currently loaded component.
  }
}
