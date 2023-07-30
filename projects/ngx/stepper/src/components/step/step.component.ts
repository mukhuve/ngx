import { CdkStep, CdkStepperModule } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mv-step',
  standalone: true,
  imports: [CdkStepperModule],
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css'],
  providers: [{ provide: CdkStep, useExisting: StepComponent }],
})
export class StepComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
