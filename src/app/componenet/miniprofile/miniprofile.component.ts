import { Component,Input ,OnInit } from '@angular/core';
import { UtilService } from '../../service/util.service';
import { Profile } from '../../models/profile';

@Component({
  selector: 'app-miniprofile',
  templateUrl: './miniprofile.component.html',
  styleUrls: ['./miniprofile.component.css']
})
export class MiniprofileComponent implements OnInit {

  @Input() profile!: Profile;
  
  constructor(public util: UtilService) { }

  ngOnInit(): void {
  }

}
