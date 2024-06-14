import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  // url: string = 'https://jsonplaceholder.typicode.com/users'  // contains 10 data
  url: string = 'https://jsonplaceholder.typicode.com/photos'  // contains 5000 data

  getObservableData(): Observable<any> {
    ///////       Evaluation is Lazy until you subscribe it will not going to emit the data

    return this.http.get(this.url).pipe(
      map((data: any) => data), catchError((error: any) => {
        console.error('Ob fetching error', error);
        throw error;
      })

      // tap((data:any)=>data)
    )
  }

  getPromiseData(): Promise<any> {
    console.log('without then',this.http.get(this.url).toPromise()); ///////     Evaluation is Eager 
    
    return this.http.get(this.url).pipe(map((res: any) => res), catchError(error => error)).toPromise();
  }

  // getPromiseData(): Promise<any> {
  //   return this.http.get(this.url)
  //     .pipe(
  //       map((res: any) => res),
  //       catchError((error: any) => {
  //         console.error('pr Error fetching data:', error);
  //         throw error;
  //       })
  //     )
  //     .toPromise();
  // }

}
