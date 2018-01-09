import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: Http) {

  }
  url = 'http://localhost:4200/apiservice/ticker?key=fKzwJM05YBzhkKnRujj5vZPtnexjSz&label=ethbtc-ltcbtc&fiat=btc';
  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      console.info(res);
    });
  }
  title = 'app';

}
