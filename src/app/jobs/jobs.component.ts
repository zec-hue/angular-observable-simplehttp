import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, of } from 'rxjs';

import { JobsService } from '../jobs.service';
import { Job } from '../jobsobject';
import { Human } from '../humanobject';

import { NumberService } from '../number.service';
import { Numbers } from '../numberobject';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  public jobs: Job[] = [];
  public humans: Human[] = [];
  public numbers: Numbers[] = [];
  private mySubsription: Subscription[] = []

  constructor(private jobsService: JobsService, private numberService: NumberService) {}

  ngOnInit(): void {

    console.log("===== Jobs Component ngOnInit =====");

    // this.jobsService.get_jobs().subscribe(result => {
    //   var jobs = result as Job[];
    //   for(var i=0; i<jobs.length; i++){
    //     this.jobs.push(jobs[i]);
    //   }
    // });

    this.mySubsription.push(this.jobsService.get_humans().subscribe(result => {

      console.log("===== Retrieved Humans successful =====");
      let myHumans = <Human[]> result;
      for(var i=0; i < myHumans.length; i++){
        this.humans.push(myHumans[i]);
      }

      console.log("===== then subscribing to numbers service =====");
      this.numberService.get_numbers().subscribe(numbersResult => {
        console.log("===== Retrieved Numbers successful =====");
        let myNumbers = <Numbers[]> numbersResult;
        for(var i=0; i < myNumbers.length; i++){
          this.numbers.push(myNumbers[i]);
        }
      });

    }));

  }

  ngOnDestroy(): void{

    console.log("===== Jobs Component ngOnDestroy =====");

    this.mySubsription.forEach(x => x.unsubscribe());
  }

}
