import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //các thuộc tính của class, data-binding các data này với view
  message = '';
  username: string = '';
  password: string = '';

  constructor(
    // Khai báo khi sử dụng ở trong class
    private router: Router,
    private accountService: AccountService // khai báo thêm để dùng service account
  ) { }

  // method của class, khi click từ view sẽ gọi hàm này
  signIn(){
    // if (this.username == 'admin' && this.password == 'admin'){
    //   //Chuyển hướng đến component sanpham khi đăng nhập đúng
    //   this.router.navigateByUrl('sanpham');
    // }else{
    //   this.message = 'Sai thông tin';
    // }

    var result: any;
    // Hàm promiss, phải xử lý bất đồng bộ
    this.accountService.login(this.username, this.password)
    .subscribe(
      (res) => {
        result = res;
      }, err => {
        console.log('Có lỗi đăng nhập');
        console.log(err);
        this.message = err.error.message; // căn cứ vào gói tin trả về
      }, () => {
        console.log('Đăng nhập thành công');
        console.log(result);
        this.message = "Đăng nhập thành công";
        this.accountService.setToken(result.object.accessToken);
        this.router.navigateByUrl('admin');
      }
    );
  }

  ngOnInit(): void {
  }

}
