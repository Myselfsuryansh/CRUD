import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileComponent } from './file/file.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'update/:ID', component: UpdateComponent },
  { path: 'form', component: FileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
