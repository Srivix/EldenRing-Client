import { registerLocaleData } from '@angular/common';
import { HttpEventType } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Weapon } from '../model/Weapon';
import { WeaponType } from '../model/WeaponType';
import { WeaponService } from '../weapon.service';

@Component({
  selector: 'app-weapon-edit',
  templateUrl: './weapon-edit.component.html',
  styleUrls: ['./weapon-edit.component.scss']
})
export class WeaponEditComponent implements OnInit {

  weapon: Weapon = new Weapon();
  weaponTypes: WeaponType[] = [];
  selectedPhoto: File|null = null;
  progress: number = 0;
  color: ThemePalette = 'warn';

  constructor(
    public dialogRef: MatDialogRef<WeaponEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private weaponService: WeaponService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    if(this.data.weapon != null){
      this.weapon = this.data.weapon;
    }else{
      this.weapon = new Weapon();
    }

    this.weaponService.getWeaponTypes().subscribe( weaponTypes => {
      this.weaponTypes = weaponTypes;
      this.weapon.weaponType = this.weaponTypes[0];
    });
  }

  selectPhoto(event: any){
    this.selectedPhoto = event.target.files[0];
    this.progress = 0;
    if(this.selectedPhoto!=null)
      if (this.selectedPhoto.type.indexOf('image') < 0) {
        this.snackBar.open("Error: Seleccionar una imagen.","cerrar",{
          duration: 2000,
          verticalPosition: 'top'
        });
        this.selectedPhoto = null;
    }
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

        if(this.selectedPhoto!=null)
        this.weaponService.uploadPhoto(this.selectedPhoto, this.weapon.name)
        .subscribe(event =>{
          if(event.type === HttpEventType.UploadProgress){
            if(event.total)
              this.progress = Math.round((event.loaded/event.total)*100);
          }else if(event.type === HttpEventType.Response){
            let response: any = event.body;
            this.weapon = response.weapon as Weapon;
          }
        })
      })
  }

  onClose(){
    this.dialogRef.close();
  }

}
