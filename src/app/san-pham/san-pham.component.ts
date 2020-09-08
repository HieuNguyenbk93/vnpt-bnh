import { Component, OnInit } from '@angular/core';
// Thực hiện import model
import { SanphamService } from '../services/sanpham.service';

@Component({
  selector: 'app-san-pham',
  templateUrl: './san-pham.component.html',
  styleUrls: ['./san-pham.component.scss']
})
export class SanPhamComponent implements OnInit {

  // Truyền one-way từ ts -> view quan biến message
  message = "Trang quản lý loại sản phẩm";
  //Khai báo 1 biến kiểu Sanpham được định nghĩa trong folder model (như là 1 class có các thuộc tính)
  //SanPham : Sanpham = new Sanpham();

  // Khai báo biến list trực tiếp để đổ ra view
  // list = [
  //   {"id":1, "name":"Hieu"},
  //   {"id":2, "name":"Nguyen"},
  //   {"id":3, "name":"Ba"}
  // ];

  san_pham: [];
  total: number = 0;

  constructor(
    private SanphamService: SanphamService
  ) { }

  ngOnInit(): void {
    this.getSanPham(); //Load data khi load trang luôn
  }

  getSanPham(){
    var result: any;
    this.SanphamService.getList().subscribe((res) => {
      result = res;
    }, err => {
      console.log(err);
    }, () => {
      this.san_pham = result.object.items;
      this.total = result.object.total;
    });
  }

  remove(id: number){
    if (window.confirm('Bạn thực sự muốn xóa')){
      console.log(id);
    this.SanphamService.delete(id).subscribe((res) => {

    }, err => {
      console.log(err);
      alert('Xóa không thành công');
    }, () => {
      alert('Xóa thành công');
      this.getSanPham();
    });
    }
    else{
      alert('Hủy xóa');
    }

  }

}
