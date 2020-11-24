import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchField = new FormControl();

  results: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.searchField.valueChanges.subscribe((value) => {
      this.getData(value);
    });
  }

  private getData(query: string) {
    const API = 'AcWqSU3ZyWNNwWoJcy8R1qvOrOd2OgPu';
    this.http
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${query}$api_key=${API}&lmit=12`
      )
      .pipe(
        map((response: any) => {
          return response.data.map(item => item.images.downsized)
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
