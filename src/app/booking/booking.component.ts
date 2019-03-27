import { Component, OnInit } from '@angular/core';
import { BookingService } from "../booking.service";
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  constructor(private router: Router,private BookingService:BookingService,private route:ActivatedRoute ) { }
movie:any;
private sub:any;
id:number;
data={
  tickets:0
}
movies={
  customer_id :0,
  tickets :0,
  movie_id :0,
  movie_name:'', 
  movie_time:'',
  theatre:'',
  screen :'',
  city :'',
  movie_date:'',
  date :'',
  amount :0,
  ticket_price :0,
}
  ngOnInit() {
    this.sub=this.router.params.subscribe(params ==>{
      this.id= +params['id'];
      this.BookingService.getMovieById(this.id).subscribe((movie)==>{
        this.movie=movie;
        console.log(this.movie);
        
      })
    });
  }
  amount=this.data.tickets*100
  addBooking(movie,t){
    console.log(movie,t);
    this.movies={
      customer_id :3,
  tickets :t,
  movie_id :movie.id,
  movie_name:movie.name, 
  movie_time:'1:20',
  theatre:'tulsi theater',
  screen :'screen 1',
  city :'Bangalore',
  movie_date:'2019-06-07',
  date :'2019-02-01',
  amount :this.amount,
  ticket_price :100,
    }
    this.BookingService.addRemotebooking(this.movies).subscribe((e)=>{
      console.log(JSON.stringify(e));
      this.router.navigate(['/payment'])
    })
  }
  
  
}
