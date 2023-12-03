import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from '../service.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})

  export class AddUserComponent implements OnInit{

    constructor(private fb: FormBuilder,private service:Service){}
  
    recordForm!: FormGroup;
    
    public userData: any[] = [];
  
    ngOnInit() {
      this.createForm();
    }
  
    createForm() {
      this.recordForm = this.fb.group({
        id: ['', Validators.required],
        name: ['', Validators.required],
        username: ['', Validators.required],
        address: ['', Validators.required],
        email: ['', Validators.required],
       
      });
    }
  
    onSubmit() {
      if (this.recordForm.valid) {
        const recordData = this.recordForm.value;
        this.service.createRecord(recordData).subscribe(
          (response) => {
            console.log('Record created successfully:', response);
            this.userData = response;
            
  
            // Reset the form after successful submission
            this.recordForm.reset();
          },
          (error) => {
            console.error('Error creating record:', error);
          }
        );
      }
    }
   
  
  }

