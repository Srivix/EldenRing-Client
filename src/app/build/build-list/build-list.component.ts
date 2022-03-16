import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
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
    
  searchText: string = '';

  property: string = 'id';
  direction: string = 'asc';

  pageNumber: number = 0;
  pageSize: number = 9;
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
            property: this.property,
            direction: this.direction
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

  sortPage(sort: Sort){

    if(!sort.active || sort.direction === ''){
      this.direction = 'asc';
      this.property = 'id';
      this.loadPage();
      return
    }

    switch(sort.active){
      case 'name':
          this.property = 'name';
          break;
      case 'createdby':
          this.property = 'createdby';
          break;
      case 'level':
          this.property = 'level';
          break;
      case 'dexterity':
          this.property = 'dexterity';
          break;
      case 'strength':
          this.property = 'strength';
          break;
      case 'intelect':      
          this.property = 'intelect';
          break;
      case 'faith':      
          this.property = 'faith';
          break;
      case 'arcane':      
          this.property = 'arcane';
          break;
      case 'weapon1':      
          this.property = 'weapon1.name';
          break;
      case 'weapon2':      
          this.property = 'weapon2.name';
          break;
      case 'created':      
          this.property = 'created';
          break;
      case 'state':      
          this.property = 'state.name';
          break;
      default:
        this.property = 'id';
    }

    this.direction = sort.direction;

    this.loadPage();
  }

  onCleanFilter(){
    this.searchText = '';
  }

}
