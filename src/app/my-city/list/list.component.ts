import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IPlace } from '../interfaces/place.interface';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit {
  public term: string;

  @ViewChild('c')
  public lableRef: any;

  @ViewChild('refmy')
  public refmy: any;

  public isAdmin = false;
  public list = 'list';
  public viewMode: 'grid' | 'list' | 'lol' = 'lol';
  public place = null;
  public isLoading = true;


  public places: Observable<IPlace[]> = of([
    {
      "id": 0,
      "title": "Freedom Square",
      "description": "The Freedom Square is the main square of Kharkov and an architectural landmark. It is the second largest city-center square in Europe and the ninths in the world. It is the place of every possible events: concerts, demonstrations, fairs, meetings. From the moment of foundation (1925) till 1996 it was known as Dzerzhinskogo square.",
      "address": "Украина, 61022, Харьков, пл. Свободы, 7",
      "picture": "http://www.kharkovinfo.com/media/General/original/vex0zl48.jpg",
      "pictures": [
        "http://www.kharkovinfo.com/media/General/original/vex0zl48.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-s/01/a3/fc/d5/across-the-square-to.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzBkUA4Oqa1Dz0EcvsG9UdPwdTuNDNkYz8VpFrQtSJWTTQqm0NKg"
      ],
      "shareLink": "https://facebook.com",
      "createdBy": {
        "createdDate": 1553100277741,
        "userData": {
          "name": "Elon Musk",
          "avatar": "https://psychologist.com.ua/wp-content/uploads/2014/08/20140822_avatar.jpg"
        }
      },
      "updated": {
        "lastModifiedDate": 1553100277741,
        "modifiedBy": {
          "name": "admin",
          "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58yUcpDD04YdErb_ylQ2arXUUm6L91IELljTt1sLCahVALpWV"
        }
      },
      "rating": 3
    },
    {
      "id": 1,
      "title": "Gorky Park",
      "description": "130-acre green space with an amusement park offering rides for kids & adults, plus paths & eateries.",
      "address": "Sumska St, 81, Kharkiv, Kharkivs'ka oblast, 61000",
      "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Spring_in_Kharkiv.jpg/1920px-Spring_in_Kharkiv.jpg",
      "pictures": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Swan_House_-_Kharkiv_Gorky_Park.jpg/400px-Swan_House_-_Kharkiv_Gorky_Park.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%D0%9B%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE_%D0%91%D0%B8%D0%BB%D0%BB%D0%B8_%D0%9A%D0%B8%D0%B4%D0%B0.jpg/2560px-%D0%9B%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE_%D0%91%D0%B8%D0%BB%D0%BB%D0%B8_%D0%9A%D0%B8%D0%B4%D0%B0.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/%D0%A1%D0%BA%D0%B0%D0%B7%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B0%D0%BA%D0%B0%D1%82.JPG/1024px-%D0%A1%D0%BA%D0%B0%D0%B7%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B0%D0%BA%D0%B0%D1%82.JPG"
      ],
      "shareLink": "https://facebook.com",
      "createdBy": {
        "createdDate": 1553100277741,
        "userData": {
          "name": "Elon Musk",
          "avatar": "https://psychologist.com.ua/wp-content/uploads/2014/08/20140822_avatar.jpg"
        }
      },
      "updated": {
        "lastModifiedDate": 1553100277741,
        "modifiedBy": {
          "name": "admin",
          "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58yUcpDD04YdErb_ylQ2arXUUm6L91IELljTt1sLCahVALpWV"
        }
      },
      "rating": 4
    },
    {
      "id": 2,
      "title": "Mirror Stream KHARKIV",
      "description": "Zerkalʹnaya struya or Dzerkalʹnyi struminʹ is a fountain in Kharkiv, Ukraine. It is near the Kharkiv Philharmonic. It was built in 1947. It remains one of the most remarkable architectural monuments in Kharkiv and, due to that, has been listed in UNESCO's Encyclopedi",
      "address": "Sumska St, 28/2, Kharkiv, Kharkivs'ka oblast, 61000",
      "picture": "http://mykharkov.info/wp-content/uploads/2012/10/zerkalnaya_struya_2.jpg",
      "pictures": [
        "https://kharkovgo.com/wp-content/uploads/2016/08/3wBKjUfKmtw-551x368.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPkwdu3WPPXY3mQ1mKdSdO_XYQX49C088soDij4vacD1CTYiZr"
      ],
      "shareLink": "https://facebook.com",
      "createdBy": {
        "createdDate": 1553100277741,
        "userData": {
          "name": "Elon Musk",
          "avatar": "https://psychologist.com.ua/wp-content/uploads/2014/08/20140822_avatar.jpg"
        }
      },
      "updated": {
        "lastModifiedDate": 1553100277741,
        "modifiedBy": {
          "name": "admin",
          "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58yUcpDD04YdErb_ylQ2arXUUm6L91IELljTt1sLCahVALpWV"
        }
      },
      "rating": 2
    }
  ]);
  constructor() { }

  ngOnInit() {

    // setTimeout(()=> {
    //   this.place =   {
    //     "id": 1,
    //     "title": "Gorky Park 10000",
    //     "description": "130-acre green space with an amusement park offering rides for kids & adults, plus paths & eateries.",
    //     "address": "Sumska St, 81, Kharkiv, Kharkivs'ka oblast, 61000",
    //     "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Spring_in_Kharkiv.jpg/1920px-Spring_in_Kharkiv.jpg",
    //     "pictures": [
    //       "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Swan_House_-_Kharkiv_Gorky_Park.jpg/400px-Swan_House_-_Kharkiv_Gorky_Park.jpg",
    //       "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%D0%9B%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE_%D0%91%D0%B8%D0%BB%D0%BB%D0%B8_%D0%9A%D0%B8%D0%B4%D0%B0.jpg/2560px-%D0%9B%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE_%D0%91%D0%B8%D0%BB%D0%BB%D0%B8_%D0%9A%D0%B8%D0%B4%D0%B0.jpg",
    //       "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/%D0%A1%D0%BA%D0%B0%D0%B7%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B0%D0%BA%D0%B0%D1%82.JPG/1024px-%D0%A1%D0%BA%D0%B0%D0%B7%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B0%D0%BA%D0%B0%D1%82.JPG"
    //     ],
    //     "shareLink": "https://facebook.com",
    //     "createdBy": {
    //       "createdDate": 1553100277741,
    //       "userData": {
    //         "name": "Elon Musk",
    //         "avatar": "https://psychologist.com.ua/wp-content/uploads/2014/08/20140822_avatar.jpg"
    //       }
    //     },
    //     "updated": {
    //       "lastModifiedDate": 1553100277741,
    //       "modifiedBy": {
    //         "name": "admin",
    //         "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58yUcpDD04YdErb_ylQ2arXUUm6L91IELljTt1sLCahVALpWV"
    //       }
    //     },
    //     "rating": 4
    //   }
    // }, 1500)
  }


  search(event) {
    this.term = event.target.value;
  }

  changeColor(event) {
    console.log('event', event);
  }


  ngAfterViewInit() {
    setTimeout(() => {
      this.refmy.even = false;
    }, 100);

    console.log(this.lableRef);
    console.log(this.refmy);
  }


}
