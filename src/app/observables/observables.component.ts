import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {

  subscription: Subscription | any;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getObserData()
  }


  // getObserData() {
  //   this.httpService.getObservableData().subscribe((obData: any) => {
  //     console.log('Observable-Data', obData);
  //   })
  // }

  getObserData() {
    this.subscription = this.httpService.getObservableData().subscribe((obData: any) => {
      console.log('Observable-Data', obData);
    })
  }


  ngOnDestroy(): void {
    // if (this.subscription) {
    //   console.log('ee1', this.subscription.closed)
    //   this.subscription.unsubscribe();
    //   console.log('ee2', this.subscription.closed)
    // }
  }

}
