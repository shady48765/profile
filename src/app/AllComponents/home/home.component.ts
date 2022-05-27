import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quotes: string[];
  constructor() { 
    this.quotes = [];
    addQuotes(this.quotes);
  }

  ngOnInit(): void {
  }

}
function addQuotes(quotes: string[]) {
  quotes.push("Copy-and-Paste was programmed by programmers for programmers actually");
  quotes.push("Algorithm: Word used by programmers when they don’t want to explain what they did.");
  quotes.push("Software and cathedrals are much the same — first we build them, then we pray.");
}


