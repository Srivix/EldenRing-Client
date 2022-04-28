import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Weapon } from '../model/Weapon';
import { WeaponType } from '../model/WeaponType';
import { WeaponTypeService } from '../weapon-type.service';
import { WeaponService } from '../weapon.service';

@Component({
  selector: 'app-weapon-edit',
  templateUrl: './weapon-edit.component.html',
  styleUrls: ['./weapon-edit.component.scss']
})
export class WeaponEditComponent implements OnInit {

  weapon: Weapon = new Weapon();
  weaponTypes: WeaponType[] = [];

  constructor(
    public dialogRef: MatDialogRef<WeaponEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private weaponService: WeaponService,
    private weaponTypeService: WeaponTypeService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    if(this.data.weapon != null){
      this.weapon = this.data.weapon;
      console.log(this.weapon.description)
    }else{
      this.weapon = new Weapon();
    }

    this.weaponTypeService.getWeaponTypes().subscribe( weaponTypes => {
      this.weaponTypes = weaponTypes;
    });
  }

  onSave(){

    if(this.weapon != null)

      if(this.weapon.dexReq<0||this.weapon.dexReq>50||this.weapon.strengReq<0||this.weapon.strengReq>50||this.weapon.intReq<0||this.weapon.intReq>50||this.weapon.faithReq<0||this.weapon.faithReq>50||this.weapon.arcaneReq<0||this.weapon.arcaneReq>50){
        this.snackBar.open("Error: Requisito minimo = 0 y máximo = 50.","cerrar",{
          duration: 2000,
          verticalPosition: 'top'
        });

        return;
      }

      if(this.weapon.weight<1 || this.weapon.weight>9 || this.weapon.weight%0.5!=0 ){
        this.snackBar.open("Error: Peso minimo 1 y máximo 9. El paso es de 0.5","cerrar",{
          duration: 2000,
          verticalPosition: 'top'
        });

        return;
      }

       this.weaponService.saveWeapon(this.weapon).subscribe(result =>{
        this.snackBar.open("Arma guardada.","cerrar",{
          duration: 2000,
          verticalPosition: 'top'
        });
        this.dialogRef.close();
      })
  }

  onClose(){
    this.dialogRef.close();
  }

}
