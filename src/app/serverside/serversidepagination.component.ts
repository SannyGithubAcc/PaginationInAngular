import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PostsApiService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-serversidepagination',
  templateUrl: './serversidepagination.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ServerSidePaginationComponent implements OnInit {
  public posts = [];
  public loading = false;
  public totals = {};
  public pageSize = 5;
  public currPage = 1;
  public count ;
  constructor(private api: PostsApiService) {}
  ngOnInit() {
    this.loading = true;
    forkJoin(
      this.api.getpoststotal(),
      this.api.getpostsPaged(this.currPage, this.pageSize),
    ).subscribe(([totalRecords,postsresults]) => {
      this.posts = postsresults;
      this.count = totalRecords.length;
      console.log(this.count);
      this.loading = false;
    });
}

  refreshGrid() {
       this.api.getpostsPaged(this.currPage, this.pageSize).subscribe(data => this.posts = data);
  }
}

