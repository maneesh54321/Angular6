import { Component} from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private storageService: DataStorageService,
              public authService: AuthService){}

  onSaveData(){
    this.storageService.storeRecipes().subscribe((response:Response)=>{
      console.log(response);
    },(error)=>{
      console.log(error);
    });
  }

  onFetchData(){
    this.storageService.getRecipes();
  }

  onLogout(){
    this.authService.logout();    
  }
}
