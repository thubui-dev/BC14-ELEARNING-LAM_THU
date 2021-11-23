import { PipeTransform, Pipe, Injectable, NgModule } from "@angular/core";

@Pipe({
  name: "courseFilter",
  pure: false,
})

export class NamePipe implements PipeTransform {
  transform(items: any[], name: any): any {      
    if (!name) return items;
    return items.filter((item) => item.tenKhoaHoc.toLowerCase().includes(name.toLowerCase().trim()));;
  }
}
