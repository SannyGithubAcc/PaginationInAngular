import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { PostsApiService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-clientsidepagination',
  templateUrl: './clientsidepagination.component.html',
})
export  class ClientSidePaginationComponent implements OnInit {
  public posts = [];
  public postsoutsOrig = [];
  public loading = false;
  public totals = {};
  public pageSize = 5;
  public currPage = 1;
  public count;
  constructor(private api: PostsApiService) {}
  ngOnInit() {
    this.loading = true;
    this.api
      .getpoststotal()
      .subscribe((totalRecords) => {
        this.postsoutsOrig = totalRecords;
        this.count = totalRecords.length;
        console.log(this.count);
        this.refreshGrid();
        this.loading = false;
      });
  }
  refreshGrid() {
    let offset = (this.currPage - 1) * this.pageSize;
    this.posts = _.drop(this.postsoutsOrig, offset).slice(0, this.pageSize);
  }
}
