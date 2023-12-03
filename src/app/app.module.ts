import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './adduser/adduser.component';
import { HomelistComponent } from './homelist/homelist.component';
import{HttpClientModule}from'@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    HomelistComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
