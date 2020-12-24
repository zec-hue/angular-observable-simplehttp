import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { JobsService } from '../jobs.service';
import { Job } from '../jobsobject';
import { Human } from '../humanobject';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  public jobs: Job[] = [];
  public humans: Human[] = [];
  private myHumans: Human[] = [];
  private mySubsription: Subscription[] = []

  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {

    console.log("===== Jobs Component ngOnInit =====");

    // this.jobsService.get_jobs().subscribe(result => {
    //   var jobs = result as Job[];
    //   for(var i=0; i<jobs.length; i++){
    //     this.jobs.push(jobs[i]);
    //   }
    // });

    this.mySubsription.push(this.jobsService.get_humans().subscribe(result => {
      this.myHumans = result as Human[];
      console.log("===== =====");
      console.log(JSON.stringify(this.myHumans));
      console.log("===== =====");
      console.log("my humans count = " + this.myHumans.length);
      console.log("===== =====");
      for(var i=0; i<this.myHumans.length; i++){
        this.humans.push(this.myHumans[i]);
      }
    }));

  }

  ngOnDestroy(): void{

    console.log("===== Jobs Component ngOnDestroy =====");

    this.mySubsription.forEach(x => x.unsubscribe());
  }

}
