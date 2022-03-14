import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Pageable } from 'src/app/core/model/page/Pageable';
import { BuildService } from '../build.service';
import { Build } from '../model/Build';

@Component({
  selector: 'app-build-list',
  templateUrl: './build-list.component.html',
  styleUrls: ['./build-list.component.scss']
})
export class BuildListComponent implements OnInit {

  pageNumber: number = 0;
  pageSize: number = 10;
  totalElements: number = 0;

  dataSource = new MatTableDataSource<Build>();
  displayedColumns: string[] = ['name', 'createdby', 'level', 'dexterity', 'strength', 'intelect', 'faith', 'arcane', 'weapon1', 'weapon2', 'created', 'state'];

  builds: Build[] = [];

  constructor(
    private buildService: BuildService,
  ) { }

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(event?: PageEvent) {

    let pageable : Pageable =  {
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
        sort: [{
            property: 'id',
            direction: 'ASC'
        }]
    }

    if (event != null) {
        pageable.pageSize = event.pageSize
        pageable.pageNumber = event.pageIndex;
    }

    this.buildService.getBuilds(pageable).subscribe(data => {
        this.dataSource.data = data.content;
        this.pageNumber = data.pageable.pageNumber;
        this.pageSize = data.pageable.pageSize;
        this.totalElements = data.totalElements;
    });

} 

}
