import { Component, HostListener, OnInit } from '@angular/core';
import { fadeinAnimation } from '../animations/fade-in';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [fadeinAnimation]
})
export class AppComponent implements OnInit {
  public scrollUpButtonVisible: boolean = false;
  private activeSection: string = 'about';
  private sections: string[] = ['about', 'resume', 'research'];
  private sectionElements: { [key: string]: HTMLElement } = {};

  constructor() {}

  ngOnInit(): void {
    this.checkScrollPosition();
  }

  ngAfterViewInit() {
    // Store references to all sections
    this.sections.forEach(section => {
      this.sectionElements[section] = document.getElementById(section) || 
                                     document.querySelector(`app-${section}`);
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.checkScrollPosition();
    this.updateActiveSection();
  }

  private checkScrollPosition() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.scrollUpButtonVisible = scrollPosition > 300;
  }

  private updateActiveSection() {
    // Get current scroll position
    const scrollPosition = window.scrollY + 100; // Add offset for better UX
    
    // Find the current active section
    for (const section of this.sections) {
      const element = this.sectionElements[section];
      
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        const elementTop = top + window.scrollY;
        const elementBottom = bottom + window.scrollY;
        
        // Check if current scroll position is within this section
        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          this.activeSection = section;
          return;
        }
      }
    }
  }
  public isActive(section: string): boolean {
    return this.activeSection === section;
  }
}
