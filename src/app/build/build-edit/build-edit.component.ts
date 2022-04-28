import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BuildService } from '../build.service';
import { Build } from '../model/Build';
import { BuildState } from '../model/BuildState';

@Component({
  selector: 'app-build-edit',
  templateUrl: './build-edit.component.html',
  styleUrls: ['./build-edit.component.scss']
})
export class BuildEditComponent implements OnInit {

  build: Build = new Build;
  buildStates: BuildState[] = [];
  state: BuildState = new BuildState;

  constructor(
    public dialogRef: MatDialogRef<BuildEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private buildService: BuildService,
  ) { }

  ngOnInit(): void {

    this.build = this.data.build;

    this.buildService.getBuildStates().subscribe(buildStates =>{
      this.buildStates = buildStates;
    });

    this.state = this.build.state;
  }

  onSave() {

    this.build.state = this.state;

    this.buildService.saveBuild(this.build).subscribe(result => {
      this.dialogRef.close();
    });    
  }  

  onClose() {
    this.dialogRef.close();
  }

}
