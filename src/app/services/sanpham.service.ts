import { Injectable } from '@angular/core';
import { API } from './api';

@Injectable({
  providedIn: 'root'
})
export class SanphamService {

  constructor(
    private api: API
  ) { }

  getList(){
    return this.api.get('/api/Category/list-by-user');
  }

  add(data:any){
    return this.api.post('/api/Category/add',data);
  }

  edit(data:any){
    return this.api.put('/api/Category/edit',data);
  }

  delete(id:number){
    return this.api.delete(`/api/Category/delete/${id}`);
  }

  getById(id:number){
    return this.api.get(`/api/Category/get-by-id/${id}`);
  }
}
