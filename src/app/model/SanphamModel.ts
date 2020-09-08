import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

export class SanphamModel{

  categoryName: string="";
  categoryId: number = 0;

  formGroup: FormGroup = null;

  constructor(){
    var fb = new FormBuilder();
    this.formGroup = fb.group({});
    this.formGroup.addControl('categoryName', new FormControl('',Validators.required));
  }
}
