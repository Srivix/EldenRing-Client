import { Component, Inject, OnInit } from '@angular/core';
import { Weapon } from '../model/Weapon';
import  { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WeaponEditComponent } from '../weapon-edit/weapon-edit.component';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-weapon-detail',
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.scss']
})
export class WeaponDetailComponent implements OnInit {

  role: string = 'ADMIN';
  weapon: Weapon = new Weapon();

  constructor(
    public dialogRef: MatDialogRef<WeaponDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    if(this.data.weapon != null){
      this.weapon = Object.assign({}, this.data.weapon);
    }
  }

  onClose(){
    this.dialogRef.close();
  }

  openModify(weapon: Weapon){
    const dialogRef = this.dialog.open(WeaponEditComponent,{
      data: { weapon: weapon}
    });

    dialogRef.afterClosed().subscribe(result =>{
      this.onClose();
    })
  }

}
