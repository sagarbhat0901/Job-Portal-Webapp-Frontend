import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService, Job } from 'src/app/services/job.service';
import { SkillService } from 'src/app/services/skill.service';
import { JobTypeService } from 'src/app/services/jobtype.service';
import { WorkTypeService } from 'src/app/services/worktype.service';
import { QualificationRequiredService } from 'src/app/services/qualificationrequired.service';
import { JobExperienceService } from 'src/app/services/jobexperience.service'

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  jobForm: FormGroup;
  skills: any[];
  jobType: any[];
  workType: any[];
  qualificationRequired: any[];
  jobExperience: any[];
  postJob: Job;
  constructor(private route: ActivatedRoute,private jobService: JobService, private router: Router, private fromBuilder: FormBuilder, private skillService: SkillService, private jobTypeService: JobTypeService, private workTypeService: WorkTypeService, private qualificationRequiredService: QualificationRequiredService, private jobExperienceService: JobExperienceService) { }
  ngOnInit(): void {
    this.postJob = new Job();
    this.skillService.getAllSkills()
      .subscribe(
        data => {
          console.log("Skills - ");
          console.log(data);
          this.skills = data;
        },
        err => {
          alert(err.error);
        }
      )
      this.jobTypeService.getAllJobTypes()
      .subscribe(
        data => {
          console.log("Job Types - ");
          console.log(data);
          this.jobType = data;
        },
        err => {
          alert(err.error);
        }
      )
      this.workTypeService.getAllWorkTypes()
      .subscribe(
        data => {
          console.log("Work Types - ");
          console.log(data);
          this.workType = data;
        },
        err => {
          alert(err.error);
        }
      )
      this.qualificationRequiredService.getAllQualificationRequireds()
      .subscribe(
        data => {
          console.log("Qualification - ");
          console.log(data);
          this.qualificationRequired = data;
        },
        err => {
          alert(err.error);
        }
      )
      this.jobExperienceService.getAllJobExperiences()
      .subscribe(
        data => {
          console.log("Job Experiences - ");
          console.log(data);
          this.jobExperience = data;
        },
        err => {
          alert(err.error);
        }
      )
    this.jobForm = this.fromBuilder.group({
      jobTitle: '',
      jobDescription: '',
      jobSalary: '',
      skillId: '',
      type_id: '',
      work_id: '',
      qualification_id: '',
      exp_id:''
    })
  }

  onSubmit() {
    this.postJob = new Job();
    console.log(this.jobForm.value);
    this.postJob.jobTitle = this.jobForm.value.jobTitle;
    this.postJob.jobDescription = this.jobForm.value.jobDescription;
    this.postJob.jobSalary = this.jobForm.value.jobSalary;
    this.postJob.skillId = this.jobForm.value.skillId;
    this.postJob.type_id = this.jobForm.value.type_id;
    this.postJob.work_id = this.jobForm.value.work_id;
    this.postJob.qualification_id = this.jobForm.value.qualification_id;
    this.postJob.exp_id = this.jobForm.value.exp_id;
    this.postJob.recruiterId = Number(localStorage.getItem('recruiterId'));
    this.postJob.freelancerId = Number('2');
    console.log(this.postJob);
    this.jobService.addJob(this.postJob).subscribe(
      data=>{
        alert(data);
        // alert(data);
        this.router.navigate(['../../jobs'], {relativeTo: this.route}).then(() => { window.location.reload(); });
      },
      err=>{
        // alert(err.error);
        console.warn(err.error);  
      }
    )
  }


}
