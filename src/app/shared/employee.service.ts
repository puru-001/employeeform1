import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { FormControl, FormGroup ,Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http:HttpClient) { }

  // form: FormGroup= new FormGroup({
  //   $key: new FormControl(null),
  //   employeeName: new FormControl('' , Validators.required),
  //   position: new FormControl('',Validators.required),
  //   email: new FormControl('' , Validators.required),
  //   contact: new FormControl('', [Validators.required , Validators.minLength(8)]),
  //   city: new FormControl('',Validators.required),
  //   gender : new FormControl(''),
  //   joining_date: new FormControl('',Validators.required),
  //   isPermanent : new FormControl('')
  // })

  createEmployee(employee){
    return this._http.post("http://localhost:3000/employees" , employee)
  }
  getAllEmployee(){
    return this._http.get("http://localhost:3000/employees")
  }
  updateEmployee(employee){
    return this._http.put("http://localhost:3000/employees/" +employee.id ,employee)
  }
  deleteEmployee(employee){
    return this._http.delete("http://localhost:3000/employees/" +employee.id)
  }
}
