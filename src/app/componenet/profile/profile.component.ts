import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Profile } from '../../models/profile';
import { ApiService } from '../../service/api.service';
// import { CommonService } from '../../service/common.service';
import { UtilService } from '../../service/util.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile!: Profile | null;
  isFavourite!: boolean | null;
  isBlocked!: boolean | null;

  constructor(private ap: ApiService,
    private ar: ActivatedRoute,
    public us: UtilService,
    ) { }

  ngOnInit(): void {
    const ob$ = this.ar.paramMap.pipe(
      switchMap(pm => {
        const email = pm.get('email');
        return !!email ? this.ap.getByEmail(email) : of(null);
      }),
      tap(p => this.profile = p),
      switchMap(p => {
        if (!!p?.id) {
          return forkJoin([
            this.ap.isFavourite(p.id),
            this.ap.isBlocked(p.id)
          ])
        }

        return of([null, null]);
      })
    );

    ob$.subscribe(([isF, isB]) => {
      this.isFavourite = isF;
      this.isBlocked = isB;
    });
  }

  makeFavourite() {
    if (!!this.profile?.id) {
      this.ap.makeFafourite(this.profile.id).subscribe(n => {
        this.isFavourite = true;

        alert("Favourite made successfully");
      })
    }
  }

  removeFavourite() {
    if (!!this.profile?.id) {
      this.ap.removeFafourite(this.profile.id).subscribe(n => {
        this.isFavourite = false;

        alert("Favourite removed successfully");        
      })
    }
  }

  block() {
    if (!!this.profile?.id) {
      this.ap.block(this.profile.id).subscribe(n => this.isBlocked = true)
    }
  }

  unblock() {
    if (!!this.profile?.id) {
      this.ap.unblock(this.profile.id).subscribe(n => this.isBlocked = false)
    }
  }
}
