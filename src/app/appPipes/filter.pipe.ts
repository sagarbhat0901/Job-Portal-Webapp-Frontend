import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skillfilter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any):any {
    console.log(value)
    if(value.length===0){

       return value;
      
      }
      
      return value.filter(function(search: {job:{ skillName:any;};}){
      
      return search.job.skillName.toLowerCase().indexOf(searchTerm.toLowerCase())>-1;
      
       });
  }

}
