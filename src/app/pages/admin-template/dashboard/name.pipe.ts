import { PipeTransform, Pipe, Injectable, NgModule } from "@angular/core";

@Pipe({
  name: "nameFilter",
  pure: false,
})

export class NamePipe implements PipeTransform {
  transform(items: any[], name: any): any {      
    if (!name) return items;
    return items.filter((item) => item.hoTen.toLowerCase().includes(name.toLowerCase().trim()));;
  }
}
