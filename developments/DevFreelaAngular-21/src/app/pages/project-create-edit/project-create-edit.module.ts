import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCreateEditComponent } from './project-create-edit.component';
import { ProjectCreateEditRoutingModule } from './project-create-edit-routing.module';
import { LdWrapperModule } from 'src/app/features/ld-wrapper/ld-wrapper.module';



@NgModule({
  declarations: [
    ProjectCreateEditComponent
  ],
  imports: [
    CommonModule,
    ProjectCreateEditRoutingModule,
    LdWrapperModule
  ]
})
export class ProjectCreateEditModule { }
