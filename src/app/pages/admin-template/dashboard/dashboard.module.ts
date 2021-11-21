import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { NamePipe } from './name.pipe';

@NgModule({
  declarations: [DashboardComponent, NamePipe],
  imports: [CommonModule, DashboardRoutingModule, FormsModule],
})
export class DashboardModule {}
