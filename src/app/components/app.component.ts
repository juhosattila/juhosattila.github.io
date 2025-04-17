import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public scrollUpButtonVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.checkScrollPosition();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.checkScrollPosition();
  }

  checkScrollPosition() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      // Get the position of the about section
      const aboutPosition = aboutSection.getBoundingClientRect().top;
      
      // Show button if we've scrolled past the about section
      this.scrollUpButtonVisible = aboutPosition < -100;
    }
  }
}
