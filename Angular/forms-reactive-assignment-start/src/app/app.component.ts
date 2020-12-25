import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  ProjectStatuses = ['Stable', 'Critical', 'Finished']
  ngOnInit() {
    this.form = new FormGroup({
      'ProjectName': new FormControl(null , Validators.required, this.validProjectName),
      'Mail': new FormControl(null , [Validators.required , Validators.email]),
      'ProjectStatus': new FormControl('Stable')
    })
  }
  validProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test') {
          resolve({'inValidProjectName': true});
        } else {
          resolve({'inValidProjectName': false});
        }
      }, 1500);
    });
    return promise;
  }
  onSubmit() {
    console.log(this.form.value)
  }
}
