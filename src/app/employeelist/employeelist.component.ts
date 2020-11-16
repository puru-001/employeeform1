import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  
  allEmployee: Object;
  isEdit = false;
  employeeObj= {
    name:"",
    position:"",
    email:"",
    contact:"",
    gender: "",
    city:"",
    date:"",
    id:""
  }

  constructor(private service: EmployeeService) { }

  ngOnInit(){
    this.getLatestEmployee();
  }

  addEmployee(formObj){
    console.log(formObj);
    this.service.createEmployee(formObj).subscribe((response)=>{
this.getLatestEmployee();
    })
    
    
  }
  getLatestEmployee(){
    this.service.getAllEmployee().subscribe((response)=> {
      this.allEmployee = response
    });
  }
  editEmployee(employee){
    this.isEdit = true;
    this.employeeObj=employee;
  };
deleteEmployee(employee){
  this.service.deleteEmployee(employee).subscribe(()=>{
    this.getLatestEmployee();
  })
}

updateEmployee(){
  this.isEdit = !this.isEdit;
  this.service.updateEmployee(this.employeeObj).subscribe(()=> {
    this.getLatestEmployee();
  });
}
}
