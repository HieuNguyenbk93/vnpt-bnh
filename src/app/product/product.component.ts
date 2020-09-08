import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service'
//import { SanPhamComponent } from '../san-pham/san-pham.component'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: [];
  //loaisanpham: [];
  total:number = 0;
  //totalType: number = 0;
  constructor(
    private ProductService: ProductService,
    //private SanphamComponent: SanPhamComponent
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    var result: any;
    this.ProductService.getList().subscribe((res) => {
      result = res;
    }, err => {
      console.log(err);
    }, () => {
      this.product = result.object.items;
      this.total = result.object.total;
    });
  }

  remove(Id: number){
    if (window.confirm('Bạn thực sự muốn xóa')){
      console.log(Id);
    this.ProductService.delete(Id).subscribe((res) => {

    }, err => {
      console.log(err);
      alert('Xóa không thành công');
    }, () => {
      alert('Xóa thành công');
      this.getProduct();
    });
    }
    else{
      alert('Hủy xóa');
    }
  }
}
