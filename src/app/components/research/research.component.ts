import { Component, OnInit } from '@angular/core';
import { Conference, Publication, StudentConference } from 'src/app/models/conference.type';
import { Research } from 'src/app/models/research.type';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  constructor(private resumeService: ResumeService) { }
  
  publications: Publication[]
  research: Research[]  
  conferences: Conference[]
  studentConferences: StudentConference[]

  ngOnInit(): void {    
    this.conferences = this.resumeService.getConferences()
    this.studentConferences = this.resumeService.getStudentConferences()    
    this.publications = this.resumeService.getPublications()
    this.research = this.resumeService.getResearch()
  }

}
