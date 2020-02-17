import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public type: string;
  public title: string;
  public description: string;
  public bgTitle: string;
  public icon: string;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
      this.title = this.data.title;
      this.description = this.data.description;
      this.type =  this.data.type;
      this.bgTitle =  (this.type === 'info') ? 'bg-info text-white rounded' : 'bg-danger bg-danger text-white rounded';
      this.icon = (this.type === 'info') ? 'info' : 'help';
    }

  ngOnInit() {
  }

  close(confirm: boolean) {
    this.dialogRef.close({ confirm });
  }

}
