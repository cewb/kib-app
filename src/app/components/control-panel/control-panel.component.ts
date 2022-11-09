import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  id: string;
}

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  tiles: Tile[] = [
    {id: '1', cols: 3, rows: 4, color: 'rgb(205, 236, 255)'},
    {id: '2', cols: 1, rows: 1, color: ''},
    {id: '3', cols: 1, rows: 1, color: ''},
    // {id: '4', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private http:HttpService) { }

  ngOnInit(): void {
  }

  clickedPushBtn() {
    this.http.getPhUsers().subscribe(data=>{
      // console.log(JSON.stringify(data));
      this.http.postPhUsers(JSON.stringify(data)).subscribe(data=>{
        console.log(data)
      })
    })
    
  }

  clickedClearAllBtn() {
    // console.log("clicked clear all")
    this.http.deleteAllDbUsers()
  }

}
