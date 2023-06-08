import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  place: any;
  constructor(private apiService: ApiService, private router: ActivatedRoute){}
  ngOnInit(): void {
    this.router.paramMap.subscribe((params: any)=>{
      this.apiService.getPlaceById(params.params.id).subscribe((data:any)=> {
        this.place = data;
      })
    })
  }

}






