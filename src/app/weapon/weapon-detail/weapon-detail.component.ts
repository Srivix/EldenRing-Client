import { Component, Inject, OnInit } from '@angular/core';
import { Weapon } from '../model/Weapon';
import  { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-weapon-detail',
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.scss']
})
export class WeaponDetailComponent implements OnInit {

  weapon: Weapon = new Weapon();

  constructor(
    public dialogRef: MatDialogRef<WeaponDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    if(this.data.weapon != null){
      this.weapon = Object.assign({}, this.data.weapon);
    }
  }

  onClose(){
    this.dialogRef.close();
  }

}
