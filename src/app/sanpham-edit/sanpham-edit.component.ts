import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SanphamModel } from '../model/SanphamModel';
import { SanphamService } from '../services/sanpham.service';

@Component({
  selector: 'app-sanpham-edit',
  templateUrl: './sanpham-edit.component.html',
  styleUrls: ['./sanpham-edit.component.scss']
})
export class SanphamEditComponent implements OnInit {

  categoryId: number = 0;
  model: SanphamModel = new SanphamModel();

  constructor(
    private router: ActivatedRoute,
    private SanphamService: SanphamService
  ) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){
    this.router.params.subscribe((params) => {
      this.categoryId = params.id;
    });
    //console.log(this.categoryId);
    var result: any;
    this.SanphamService.getById(this.categoryId).subscribe((res) => {
      result = res;
    }, err => {
      alert('Sửa thất bại');
    }, () => {
      this.model.categoryName = result.object.categoryName;
      //console.log(this.model.categoryName);
    });
  }

  submitData(){
    if (this.model.formGroup.valid){
      this.SanphamService.edit({
        id: this.categoryId,
        categoryName: this.model.categoryName
      }).subscribe((res) => {

      }, err => {
        alert('Sửa không thành công');
      }, () => {
        alert('Sửa thành công');
      });
    }
  }
  // getCategory(){
  //   this.router.params.subscribe((param) => {
  //     this.categoryId = param.id
  //   }, err => {

  //   }, () => {
  //     console.log(this.categoryId);
  //   });

  //   console.log(this.categoryId);
  //   var result: any;
  //   this.SanphamService.getById(this.categoryId).subscribe((res) => {
  //     result = res;
  //   }, err => {
  //     alert('Không tồn tại danh mục');
  //   }, () => {
  //     this.model.categoryName = result.object.categoryName;
  //   });
  // }

  // submitData(){
  //   if (this.model.formGroup.valid){
  //     this.SanphamService.edit({
  //       id: this.categoryId,
  //       categoryName: this.model.categoryName
  //     }).subscribe((res) => {

  //     }, err => {
  //       alert("Sửa không thành công");
  //     }, () => {
  //       alert("Sửa thành công");
  //       this.model.categoryName = "";
  //     });
  //   }
  // }

}
