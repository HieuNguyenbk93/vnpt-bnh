import { NgForm, FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';

export class ProductModel{

  productId: number = 0;
  productName: string="";
  productIdType: number = 0;
  productType: string = "";
  productPrice: number = 0;
  productAmount: number = 0;
  productSupplier: string = "";
  productDate: string = "";

  formGroup: FormGroup = null;

  constructor(){
    var fb = new FormBuilder();
    this.formGroup = fb.group({});
    this.formGroup.addControl('productName', new FormControl('',Validators.required));
    this.formGroup.addControl('price', new FormControl('',Validators.required));
    this.formGroup.addControl('amount', new FormControl('',Validators.required));
    this.formGroup.addControl('supplier', new FormControl('',Validators.required));
  }
}
