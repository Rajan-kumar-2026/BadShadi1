import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  profiles!: Profile[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllFafourites().subscribe(p => this.profiles = p);
  }

}
