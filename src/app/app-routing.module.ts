import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientSidePaginationComponent } from './clientside/clientsidepagination.component';
import { ServerSidePaginationComponent } from './serverside/serversidepagination.component';

const routes: Routes = [
  { path: 'serverside', component: ServerSidePaginationComponent},
  { path: 'clientside', component: ClientSidePaginationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }