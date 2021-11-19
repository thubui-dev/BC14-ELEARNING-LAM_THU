import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ChildHomeComponent } from "./child-home/child-home.component";
import { FormsModule } from "@angular/forms";
import { ShareModuleModule } from "src/app/_core/shares/share-module/share-module.module";

import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  declarations: [HomeComponent, ChildHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ShareModuleModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
})
export class HomeModule {}
