import { Component ,OnInit,Input} from '@angular/core';
import { IUser } from 'src/app/shared/interfaces';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {
  @Input() users: IUser[] = [];
  public searchText : string;
  ngOnInit() {
    this.listAllUsers();
   
  }
 
  constructor (private service:UserService ){}
   // user:IUser;
    model=new IUser();
    user:IUser[]=[];

  
  listAllUsers(){
    this.service.listUsers().subscribe(
      data => {
       this.users = data;
       
        console.log("--------------"+this.user)	;	// FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
}

deleteUser(id){
  this.service.deleteUser(id).subscribe(
    data => {
        console.log("-----deleteEmployee---data----");
          
    //  this.model = data as string[];		// FILL THE ARRAY WITH DATA.
    },
    (err: HttpErrorResponse) => {
      console.log("-----updateEmployee----errr-");
      console.log (err.message);
    }
  );
}
}




