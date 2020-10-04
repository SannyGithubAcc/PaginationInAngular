import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Third party imports
import { NgxLoadingModule } from 'ngx-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsApiService } from 'src/app/shared/services/posts.service';
import { ServerSidePaginationComponent } from './serverside/serversidepagination.component';
import { ClientSidePaginationComponent } from './clientside/clientsidepagination.component';

@NgModule({
  declarations: [AppComponent, ServerSidePaginationComponent, ClientSidePaginationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    FormsModule,
  ],
  providers: [PostsApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
