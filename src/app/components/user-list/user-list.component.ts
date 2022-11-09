import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';


export interface DbUser {
        full_name: string,
        username: string,
        email_address: string,
        street: string,
        suite: string,
        city: string,
        zip_code: string,
        geo_lat: string,
        geo_lng: string,
        com_name: string,
        com_catch_phrase: string,
        com_bs: string
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  

  displayedColumns: string[] = ['name', 'username', 'email'];
  dataSource = new Array<DbUser>;

  constructor(private http: HttpService) {
    this.http.getDbUsers().subscribe((data) => {
      console.log(data)
      //this.dataSource = data as unknown as Array<DbUser>;
    });
  }

  ngOnInit(): void {
  }

}
