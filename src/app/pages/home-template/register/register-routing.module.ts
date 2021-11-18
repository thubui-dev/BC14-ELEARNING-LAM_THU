import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandeactivateGuard } from 'src/app/_core/guards/candeactivate.guard';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    canDeactivate: [CandeactivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
