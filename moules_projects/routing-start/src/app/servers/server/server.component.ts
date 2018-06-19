import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, 
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    // const id = +this.route.snapshot.params['id'];
    // this.server=this.serversService.getServer(id);
    // this.route.params.subscribe((params: Params)=>{
    //   this.server=this.serversService.getServer(+params['id']);
    // });
    this.route.data.subscribe((data:Data)=>{
      this.server=data['server'];
    });
  }

  onEdit(){
    // this.router.navigate(['/servers',this.server.id,'edit']);
    // OR
    this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'});  
    // queryParamsHandling:'preserve' => By default, all query parameters are lost once we route to another component 
    // from the component where we came with queryParameters. This configuration preserves the query parameters from 
    // previous page and overwrite if provide some while redirect to some other page. 
    // If you want to combine queryparams from previous component and from this component 
    // both then use queryParamsHandling:'merge'
  }
}