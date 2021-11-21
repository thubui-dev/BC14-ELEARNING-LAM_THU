import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserInfoRoutingModule } from "./user-info-routing.module";
import { UserInfoComponent } from "./user-info.component";
import { ShareModuleModule } from "src/app/_core/shares/share-module/share-module.module";
import { MaterialExampleModule } from "src/app/_core/shares/material-module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    UserInfoRoutingModule,
    ShareModuleModule,
    MaterialExampleModule,
    FormsModule,
  ],
})
export class UserInfoModule {}
