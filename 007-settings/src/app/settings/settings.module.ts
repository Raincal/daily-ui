import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { ImageContainerComponent } from './image-container';
import { FilterListComponent } from './filter-list';
import { SidebarComponent } from './sidebar';

import { FilterImageDirective } from './filter-image.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SettingsComponent,
    FilterListComponent,
    SidebarComponent,
    FilterImageDirective
  ],
  declarations: [
    FilterImageDirective,
    SettingsComponent,
    ImageContainerComponent,
    SidebarComponent,
    FilterListComponent
  ]
})
export class SettingsModule { }
