import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http.service';
import { ControlPanelComponent } from '../control-panel/control-panel.component';

export interface Dialog {
  title: string;
  content: string;
}


@Component({
  selector: 'app-cp-dialog',
  templateUrl: './cp-dialog.component.html',
  styleUrls: ['./cp-dialog.component.css']
})
export class CpDialogComponent implements OnInit {

  @Input() source = 'source'; // decorate the property with @Input()
  dialog: Dialog = { title: "", content: "" };

  constructor(private http: HttpService,
    public dialogRef: MatDialogRef<ControlPanelComponent>) {

  }

  ngOnInit(): void {
    // console.log(this.source);
    switch (this.source) {
      case 'Push':
        this.dialog.title = "Push Placeholder Users";
        this.dialog.content = "Do you want to push all placeholder users into database?";
        break;
      case 'Clear':
        this.dialog.title = "Delete All DB Users";
        this.dialog.content = "Do you want to delete all users and their data?";
        break;
    }
  }

  clickedYes() {
    switch (this.source) {
      case 'Push':
        this.http.getPhUsers().subscribe(data => {
          // console.log(JSON.stringify(data));
          this.http.postPhUsers(JSON.stringify(data)).subscribe(data => {
            console.log("pushed")
          })
        })
        break;
      case 'Clear':
        this.http.deleteAllDbUsers().subscribe(d => {
          console.log("cleared")
        })
        break;
      default:
        break;
    }
  }

}
