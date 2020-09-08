import { Component, OnInit } from '@angular/core';
import { SanphamModel } from '../model/SanphamModel';
import { SanphamService } from '../services/sanpham.service';

@Component({
  selector: 'app-sanpham-add',
  templateUrl: './sanpham-add.component.html',
  styleUrls: ['./sanpham-add.component.scss']
})
export class SanphamAddComponent implements OnInit {

  model: SanphamModel = new SanphamModel();

  constructor(
    private SanphamService: SanphamService
  ) { }

  ngOnInit(): void {
  }

  submitData(){
    if (this.model.formGroup.valid){
      this.SanphamService.add({
        "categoryName": this.model.categoryName
      }).subscribe((res) => {

      }, err => {
        alert("Thêm mới không thành công");
      }, () => {
        alert("Thêm mới thành công");
        this.model.categoryName = "";
      });
    }
  }

}
