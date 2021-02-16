import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Profile } from '../../models/profile';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  profiles!: Profile[];

  constructor(private ap: ApiService) { }

  ngOnInit(): void {
    this.ap.search().subscribe(p => this.profiles = p);
    
  }

}
