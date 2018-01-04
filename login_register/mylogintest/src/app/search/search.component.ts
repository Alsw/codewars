import { Component, OnInit } from '@angular/core';

import { SearchService } from './search.service';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Rx';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/interval';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  items: Array<string> = [];
  term = new FormControl();
  subject = new Subject();
  timer1 = new Subject();
  timer2 = new Subject();
  timer3 = new Observable();
  constructor(private searchService: SearchService) {
    const $term = this.term.valueChanges.debounceTime(400).distinctUntilChanged();
    $term.subscribe(res => {
      this.items.push(res);
    });
    $term.switchMap((item) => this.searchService.search(item)).subscribe(res => {
      console.log(res);
    });
    const timers2 = this.timer2.asObservable();
    this.timer1.concat(this.timer2, timers2).take(2).subscribe(res => console.log(res));
  }

  ngOnInit() {
    this.subject.subscribe(res => console.log(res));
    this.timer2.next(2);
    // this.timer2.complete();
  }
  search(value) {
    // this.subject.next(value);
    // this.subject.next(0);
    this.timer1.next(1);
  }
}
