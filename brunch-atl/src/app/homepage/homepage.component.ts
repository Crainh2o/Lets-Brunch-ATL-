import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit { 
  brunchPlaces: any = [
    {
      description:
        "The Premiere Brunch Experience in Atlanta where the people come to play!",
      img: "https://static.wixstatic.com/media/96378a_88bcbc92c19d4335911693c211603138~mv2.jpg/v1/fill/w_471,h_386,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/CF7_6744_JPG.jpg",
      card: "Sundays at the all-new Blue Martini are redefining the brunch experience in Atlanta.  Join us every Sunday for our amazing brunch menu, bottomless mimosas, and food specials presented by Grammy-winning producer DJ BabeyDrew. Guest DJs & Musicians will be on the patio spinning the hottest tunes.",
    },
    {
      description: "Breakfast at Barney's was established in 1978.",
      img: "https://popmenucloud.com/cdn-cgi/image/width%3D1440%2Cheight%3D1440%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/qegkzjpm/ba170b66-c896-4ff7-ade3-ee968acceb35.JPG",
      card: "Breakfast at Barneys, Atlanta's premier breakfast/brunch eatery. Serving decadent comfort food in a highly designed and stylish atmosphere, that is at the same time welcoming. With great vibes, music, food, drinks and the very best service in the city; Breakfast At Barneys is committed to being a staple in the community, the culture and the city of Atlanta.",
    },
    {
      description:
        "Atlanta Breakfast Club is Good Food & Company's pride and joy.",
      img: "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/lbdavpoc/b3cc7aac-46b0-428d-868a-6ace53702875.png",
      card: "Having the best breakfast in Atlanta and the best team of people who support the business model of Good Food & Company makes us the premier spot in Mid-Town. The leadership team of Good Food & Company brings a broad and diverse set of experience and talents. Our team is united by love, loyalty, and dedication to food and the hospitality industry.",
    },
  ];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getAllPlaces().subscribe((data: any) => {
      for(let x = 0; x < 3; x++) {
        this.brunchPlaces[x].name = data[x].name;
        this.brunchPlaces[x].menu = data[x].menu.menu_URL;
      }
    })
  }

}
