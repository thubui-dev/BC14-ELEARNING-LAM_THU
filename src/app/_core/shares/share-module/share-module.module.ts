import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { CarouselComponent } from 'src/app/components/carousels/carousel/carousel.component';

@NgModule({
  declarations: [ButtonComponent, CarouselComponent],
  exports: [ButtonComponent, CarouselComponent],
  imports: [CommonModule],
})
export class ShareModuleModule {}
