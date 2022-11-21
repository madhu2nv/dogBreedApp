import { Component, AfterViewInit, Inject, ViewChild, OnInit, OnChanges } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../services/api.service';

export interface Employee {
  id: number,
  name: string,
  image: object

}

export interface DialogData {
  Image: string;
  name: string;
  description: string
  life_span: string;
  temperament: string;
  weight: string;
  height: string
  bred_for: string,
  breed_group: string,
  country_code: string,
  origin: string
}


@Component({
  selector: 'app-dogbreed',
  templateUrl: './dogbreed.component.html',
  styleUrls: ['./dogbreed.component.css']
})
export class DogbreedComponent implements OnInit{

  mewDogsAttay = []
  dataSourceWithPageSize: any;
  dataSource: any;
  constructor(public dialog: MatDialog, private apiService: ApiService) {

  }
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('paginatorPageSize') paginatorPageSize: MatPaginator;

  ngOnInit() {
    this.apiService.getData().subscribe((data: any) => {
      console.log(data);
      this.mewDogsAttay = data
      this.callTable(this.mewDogsAttay)
    });

  }
  callTable(mewDogsAttay: any[]) {
    this.dataSource = new MatTableDataSource(this.mewDogsAttay);
    this.dataSourceWithPageSize = new MatTableDataSource(this.mewDogsAttay);
    this.loadData();
  }

  displayedColumns: string[] = ['Sl.No', 'Name', 'Image'];

  openDialog(data: any) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '450px',
      height: '700px',
      data: {
        name: data.name,
        Image: data.image.url,
        life_span: data.life_span,
        temperament: data.temperament,
        weight: data.weight.imperial,
        height: data.height.imperial,
        bred_for: data.bred_for,
        breed_group: data.breed_group,
        country_code: data.country_code,
        origin: data.origin

      },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  loadData() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './dialog-elements-example-dialog.html'
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}