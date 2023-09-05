import { NgModule } from '@angular/core';
import { PermissionDirective } from './permission.directive';
import { NumbersOnlyDirective } from './numbers-only.directive';
@NgModule({
  imports: [],
  declarations: [PermissionDirective,NumbersOnlyDirective],
  exports: [PermissionDirective,NumbersOnlyDirective]
})
export class CoreDirectivesModule {}

