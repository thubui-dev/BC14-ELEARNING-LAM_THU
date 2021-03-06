import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeTemplateRoutingModule } from "./home-template-routing.module";
import { HomeTemplateComponent } from "./home-template.component";
import { NavbarHomeComponent } from "./_components/navbar-home/navbar-home.component";
import { ShareModuleModule } from "src/app/_core/shares/share-module/share-module.module";

import { FooterComponent } from "./_components/footer/footer.component";
import { MaterialExampleModule } from "src/app/_core/shares/material-module";

@NgModule({
  declarations: [HomeTemplateComponent, NavbarHomeComponent, FooterComponent],
  imports: [
    CommonModule,
    HomeTemplateRoutingModule,
    ShareModuleModule,
    MaterialExampleModule,
  ],
})
export class HomeTemplateModule {}
