import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "src/app/components/button/button.component";
import { CarouselComponent } from "src/app/components/carousels/carousel/carousel.component";
import { TabsComponent } from "src/app/components/tabs/tabs.component";

@NgModule({
  declarations: [ButtonComponent, CarouselComponent, TabsComponent],
  exports: [ButtonComponent, CarouselComponent, TabsComponent],
  imports: [CommonModule],
})
export class ShareModuleModule {}
