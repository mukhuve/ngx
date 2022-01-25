import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepComponent } from './components/step/step.component';
import { CdkStepperModule } from '@angular/cdk/stepper';

@NgModule({
  declarations: [StepperComponent, StepComponent],
  imports: [CommonModule, CdkStepperModule],
})
export class StepperModule {}
