import { Component, OnInit } from '@angular/core';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';

@Component({
  selector: 'mv-stepper',
  standalone: true,
  imports: [CdkStepperModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }],
})
export class StepperComponent extends CdkStepper implements OnInit {
  ngOnInit(): void {}

  toStep(index: number): void {
    this.selectedIndex = index;
  }
}
