import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookmarkedjobService } from 'src/app/services/bookmarkedjob.service';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-list-bookmarked-jobs',
  templateUrl: './list-bookmarked-jobs.component.html',
  styleUrls: ['./list-bookmarked-jobs.component.css']
})
export class ListBookmarkedJobsComponent implements OnInit {
  bookmarksList: any[] = [];
  freelancerId: number = Number(localStorage.getItem('freelancerId'));
  freelancerName: string;
  jList: any[] = [];
 
  
  constructor(private bookmarkedJobService: BookmarkedjobService, private freelancerService: FreelancerService, private router: Router, private route: ActivatedRoute,
    private jService: JobService) { }

  ngOnInit(): void {
    this.freelancerService.getById(this.freelancerId)
      .subscribe(
        data=>{
          this.freelancerName=data.userName;
          localStorage.setItem('freelancerUName', this.freelancerName);
        },
        err=>{
          alert(err.error);
        }
      );

      this.jService.getAllActive().subscribe(
        data=>{
          console.log(data);
          this.jList=data;
        },
        err=>{
          alert(err.error);
        }
      );

      console.log(this.freelancerId);
      this.bookmarkedJobService.getAll(this.freelancerId)
        .subscribe(
          data =>{
            this.bookmarksList=data;
            console.log(data);
          },
          err =>{
            alert(err.error);
          }
        );
        
        
  }

  applyToJob(jobId: number){
    this.router.navigate(['apply', jobId], {relativeTo: this.route.parent});
    
  }

  printJobDetails(job1: any) {
    // retrieve the job details from the server
    
          // display the job details in the job-details element
          const jobDetails = document.querySelector('.job-details');
          jobDetails.innerHTML = `
          <h1> CONGRATULATIONS , YOU HAVE THE OFFER !!!!!</h1>
            <h3>${job1.jobTitle}</h3>
            <p><strong>Job ID:</strong> ${job1.jobId}</p>
            <p><strong>Description:</strong> ${job1.jobDescription}</p>
            <p><strong>Skills Required:</strong> ${job1.skillName}</p>
            <p><strong>Salary:</strong> ${job1.jobSalary}</p>
            <p><strong>Experience Required:</strong> ${job1.jobExperienceName}</p>
            <p><strong>Qualification Required:</strong> ${job1.qualificationRequiredName}</p>
            <p><strong>Job Type:</strong> ${job1.jobTypeName}</p>
            <p><strong>Work Type:</strong> ${job1.workTypeName}</p>
            
          `;
          
          // print the job details
          const printContents = jobDetails.innerHTML;
          const originalContents = document.body.innerHTML;
          document.body.innerHTML = printContents;
          window.print();
          document.body.innerHTML = originalContents;
  }
        
      

// printJobDetails(jobDetails: any) {
//   let printContents = jobDetails.innerHTML;
//   let originalContents = document.body.innerHTML;

//   document.body.innerHTML = printContents;

//   window.print();

//   document.body.innerHTML = originalContents;
// }

  
      }   



