import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  profiles!: Profile[]; 
  
  constructor(private ap:ApiService) { }

  ngOnInit(): void {
    this.ap.getAllBlocked().subscribe(b => this.profiles = b);    
  }
}
