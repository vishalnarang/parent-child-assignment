import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { interval, mergeMap } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent implements OnInit {
  public childDetails: any = { name: 'Jack', money: 10 };
  public childDetails1: any = { name: 'Jill', money: 15 };
  public intervalTimeSubscription;
  public favoriteSeason: string;
  public operation: string[] = ['row', 'column'];
  public orientationForm: FormGroup;
  public layout: string = 'row';
  public childrenArray = [
    { name: 'Child A', list: ['A', 'B', 'C', 'D'] },
    { name: 'Child B', list: ['A', 'B', 'C', 'D'] },
    { name: 'Child C', list: ['A', 'B', 'C', 'D'] },
    { name: 'Child D', list: ['A', 'B', 'C', 'D'] },
  ];

  constructor(
    public sharedService: SharedService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
    // this.intervalTimeSubscription = interval(60000)
    //   .pipe(mergeMap((res) => this.sharedService.increment()))
    //   .subscribe((x) => {
    //     console.log('>>>> 11');
    //     this.sharedService.child1.next(x);
    //   });
  }

  initForm() {
    this.orientationForm = this.formBuilder.group({
      operation: ['row'],
    });
  }

  getMoney(index) {
    if (index == 1) {
      this.sharedService.child1.next({ value: 10, operation: 'subtract' });
    } else {
      this.sharedService.child2.next({ value: 10, operation: 'subtract' });
    }
  }

  sendMoney(index) {
    if (index == 1) {
      this.sharedService.child1.next({ value: 10, operation: 'addition' });
    } else {
      this.sharedService.child2.next({ value: 10, operation: 'addition' });
    }
  }

  onChangeOrientation(event) {
    this.layout = this.orientationForm.controls.operation.value;
  }

  ngOnDestroy() {
    this.intervalTimeSubscription.unsubscribe();
  }
}
