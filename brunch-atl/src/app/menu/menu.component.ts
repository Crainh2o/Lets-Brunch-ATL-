import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: any;
  constructor(private apiService: ApiService, private router: ActivatedRoute){

  }
ngOnInit(): void {
  this.router.paramMap.subscribe((params: any)=> {
    console.log(params.params.id);
    console.log("string");  
  this.apiService.getBrunchMenu(params.params.id).subscribe((data:any)=>{
  this.menu = data;  
  console.log(this.menu);
  
  })
  })
}
}
