import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BookmarkedJob, BookmarkedjobService } from 'src/app/services/bookmarkedjob.service';
import { Job, JobService } from 'src/app/services/job.service';
import { JobTypeService } from 'src/app/services/jobtype.service';
import { QualificationRequiredService } from 'src/app/services/qualificationrequired.service';
import { SkillService } from 'src/app/services/skill.service';
import { WorkTypeService } from 'src/app/services/worktype.service';
import { JobExperienceService } from 'src/app/services/jobexperience.service';


@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {
  activeJobsList: any[];
  job: Job;
  filterNameDropdown: string = 'Select Filter';
  filterName: string = '';
  filterCategory: number = 0;

  filterValue: string = "";

  allSkills: any[] = [];
  allWorkTypes: any[] = [];
  allJobTypes: any[] = [];
  allQualifications: any[] = [];
  allJobExperiences: any[] = [];

  setFilterName(num: number) {
    switch (num) {
      case 1: {
        this.filterNameDropdown = "Skills";
        this.filterName = "skillName";
        this.filterCategory = num;
        break;
      }
      case 2: {
        this.filterNameDropdown = "Job Type";
        this.filterName = "jobTypeName";
        this.filterCategory = num;
        break;
      }
      case 3: {
        this.filterNameDropdown = "Work Type";
        this.filterName = "workTypeName";
        this.filterCategory = num;
        break;
      }
      case 4: {
        this.filterNameDropdown = "Qualification";
        this.filterName = "qualificationRequiredName";
        this.filterCategory = num;
        break;
      }
    }
  }


  constructor(private skillsService: SkillService, private jobTypeServices: JobTypeService, private workTypeService: WorkTypeService, private qualificationRequiredService: QualificationRequiredService,private jobExperienceServices: JobExperienceService, private bookmarkedJobService: BookmarkedjobService, private jobService: JobService) { }
  bookmarkedJob: BookmarkedJob = new BookmarkedJob();
  ngOnInit(): void {
    this.jobService.getAllActive()
      .subscribe(
        data => {
          
          console.log(data);
          this.activeJobsList = data;
          
        },
        err => {
          alert(err.error);
        }
      )

    this.skillsService.getAllSkills().subscribe({
      next: (response) => {
        this.allSkills = response;
        console.log(this.allSkills)
      }
    })
    this.jobTypeServices.getAllJobTypes().subscribe({
      next: (response) => {
        this.allJobTypes = response;
        console.log(this.allJobTypes)
      }
    })
    this.workTypeService.getAllWorkTypes().subscribe({
      next: (response) => {
        this.allWorkTypes = response;
        console.log(this.allWorkTypes)
      }
    })
    this.qualificationRequiredService.getAllQualificationRequireds().subscribe({
      next: (response) => {
        this.allQualifications = response;
        console.log(this.allQualifications)
      }
    })
    this.jobExperienceServices.getAllJobExperiences().subscribe({
      next: (response) => {
        this.allJobExperiences = response;
        console.log(this.allJobExperiences)
      }
    })

  }

  addBookmark(jobId: number, skillId: number) {
    console.log("Add Bookmark Method Invoked");
    this.bookmarkedJob.jobId = jobId;
    this.bookmarkedJob.skillId = skillId;
    this.bookmarkedJob.freelancerId = Number(localStorage.getItem('freelancerId'));
    console.log(this.bookmarkedJob);
    this.bookmarkedJobService.createBookmark(this.bookmarkedJob)
      .subscribe(
        data => {
          alert('Bookmarked Successfully');
          console.log(data);
        },
        err => {
          alert(err.error);
        }
      );
  }


  setFilterValue(value: string) {
    console.log(value);
    this.filterValue = value;
  }

  filterData(){
    this.jobService.getFilterData(this.filterName,this.filterValue).subscribe({
      next:(response)=>{
        console.log(response);
        this.activeJobsList = response;
      }
    });
  }
  onSortChange(event: any) {

     const sortBy = event.target.value;
    
     console.log('inside sorting function');
    
     if (sortBy === 'salary') {
    
     this.jobService.sortBySalary().subscribe((response) => {
    
    this.activeJobsList=response;
    
     });
    
     }
     if (sortBy === 'experience') {
    
      this.jobService.sortByExp().subscribe((response) => {
     
     this.activeJobsList=response;
     
      });
     
      }
      if (sortBy === 'salarydesc') {
    
        this.jobService.sortBySalaryDesc().subscribe((response) => {
       
       this.activeJobsList=response;
       
        });
       
        }
        if (sortBy === 'experiencedesc') {
       
         this.jobService.sortByExpDesc().subscribe((response) => {
        
        this.activeJobsList=response;
        
         });
        
         }
     

 
}}
