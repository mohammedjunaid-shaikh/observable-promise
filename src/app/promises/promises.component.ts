import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getPromisesData();
  }

  getPromisesData() {
    console.time('p start')
    this.httpService.getPromiseData().then((pResponse: any) => {
      console.log('Promise-Data', pResponse);
      // console.timeEnd('p end')
    })
  }
}
