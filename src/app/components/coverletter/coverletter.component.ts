import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobApplication, JobapplicationService } from 'src/app/services/jobapplication.service';

@Component({
  selector: 'app-coverletter',
  templateUrl: './coverletter.component.html',
  styleUrls: ['./coverletter.component.css']
})
export class CoverletterComponent implements OnInit {

  jobId: number;
  jobTitle: string;
  coverLetter: string;
  freelancerId: number;

 

 jobApplication: any[];

  constructor(private jobApplicationService: JobapplicationService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {


    
    this.freelancerId = +this.router.snapshot.paramMap.get('freelancerId');
    this.jobId = +this.router.snapshot.paramMap.get('jobId');
   
    
    console.log(this.freelancerId);
    console.log(this.jobId);
    this.jobApplicationService.findByFreelancerId(this.jobId, this.freelancerId)
      .subscribe(
        data=>{
          console.log(data);
          this.jobApplication = data;

          
        },
        err=>{
          alert(err.error);
        }
      )
  }

}
