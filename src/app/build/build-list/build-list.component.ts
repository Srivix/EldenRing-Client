import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BuildService } from '../build.service';
import { Build } from '../model/Build';

@Component({
  selector: 'app-build-list',
  templateUrl: './build-list.component.html',
  styleUrls: ['./build-list.component.scss']
})
export class BuildListComponent implements OnInit {

  dataSource = new MatTableDataSource<Build>();
  displayedColumns: string[] = ['name', 'level', 'dexterity', 'strength', 'intelect', 'faith', 'arcane', 'weapon1', 'weapon2'];

  constructor(
    private buildService: BuildService,
  ) { }

  ngOnInit(): void {

    this.buildService.getBuilds().subscribe(
      builds => this.dataSource.data = builds
    );
  }

}
