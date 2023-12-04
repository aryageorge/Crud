import { Component, OnInit } from '@angular/core';
import { Service } from '../service.service';

@Component({
  selector: 'app-homelist',
  templateUrl: './homelist.component.html',
  styleUrls: ['./homelist.component.scss']
})
 
  export class HomelistComponent implements OnInit {
 

    isbound:boolean=false;
    
  // allusersArray:any[]=[];
  
  //inject service into the constructor
  constructor(private service:Service){}
  
  public tableData: any[] = [];
  
    ngOnInit() {
    //  this.service.getAlluserdetails().subscribe((res:any)=>{
    //   console.log(res);
    //   this.allusersArray=res;
      
    //  },
    //  (error) => {
    //    console.error('Error fetching data:', error);
    //  })
  
    this.service.getAlluserdetails().subscribe((data) => {
      console.log(data);
      
      this.tableData = data;
    },(error) => {
      console.error('Error fetching data:', error);
    });
  
    }
    
  
    fetchData() {
      this.service.getAlluserdetails().subscribe((data) => {
        console.log(data);
        
        this.tableData = data;
      },(error) => {
        console.error('Error fetching data:', error);
      });
  
      this.isbound=!this.isbound;
    }
  
  
    searchUserId!: string;
    user: any;
  
   
  
    searchUser() {
      if (this.searchUserId) {
        this.service.getUserById(this.searchUserId).subscribe(
          (data) => {
            this.user = data;
          },
          (error) => {
            console.error('Error fetching user:', error);
          }
        );
      }
    }
  
    deleteUser(userId:any) {
    {
        this.service.deleteUser(userId).subscribe(
          (deletedUser) => {
            console.log(`user with id ${userId}deleted `);
            
            this.deletedUser = deletedUser;
            this.tableData=this.tableData.filter((user)=>user.id !==userId);
          },
          (error) => {
            console.error('Error deleted user:', error);
          }
        );
      }
    }
  deletedUser:any| null=null;
  
  }

