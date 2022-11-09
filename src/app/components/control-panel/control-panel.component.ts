import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CpDialogComponent } from '../cp-dialog/cp-dialog.component';

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
    { id: '1', cols: 3, rows: 4, color: 'rgb(225, 250, 255, 0.5)' },
    { id: '2', cols: 1, rows: 1, color: '' },
    { id: '3', cols: 1, rows: 1, color: '' },
    // {id: '4', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

  getTile1Cols(size: number): number {
    if (size > 1200) {
      return 3
    }
    else if (1200 > size && size > 900) {
      return 2
    }
    else {
      return 4
    }
  }
  getTile2Cols(size: number): number {
    if (size > 1200) {
      return 1
    }
    else if (1200 > size && size > 900) {
      return 2
    }
    else {
      return 3
    }
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

    this.tiles[0].cols = this.getTile1Cols(window.innerWidth)
    this.tiles[1].cols = this.getTile2Cols(window.innerWidth)
    this.tiles[2].cols = this.getTile2Cols(window.innerWidth)
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {

    this.tiles[0].cols = this.getTile1Cols(window.innerWidth)
    this.tiles[1].cols = this.getTile2Cols(window.innerWidth)
    this.tiles[2].cols = this.getTile2Cols(window.innerWidth)
  }

  openDialog(source: string) {
    const dialogRef = this.dialog.open(CpDialogComponent);

    dialogRef.componentInstance.source = source;

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  clickedPushBtn() {
    this.openDialog('Push')
  }

  clickedClearAllBtn() {
    // console.log("clicked clear all")
    this.openDialog('Clear')
  }

}
