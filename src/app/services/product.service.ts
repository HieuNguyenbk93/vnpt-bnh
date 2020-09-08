import { Injectable } from '@angular/core';
import { API } from './api'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private api: API
  ) { }

  getList(){
    return this.api.get('/api/Product/list-by-user');
  }

  add(data:any){
    return this.api.post('/api/Product/add',data);
  }

  edit(data:any){
    return this.api.put('/api/Product/edit',data);
  }

  delete(id:number){
    return this.api.delete(`/api/Product/delete/${id}`);
  }

  getById(id:number){
    return this.api.get(`/api/Product/get-by-id/${id}`);
  }

}
