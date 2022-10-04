import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  url = "https://www.youtube.com/embed/2tDh9TJnPec";

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getSafeurl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
