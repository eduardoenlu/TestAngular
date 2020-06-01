
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

const paginate = require('jw-paginate');

@Component({
  moduleId: module.id,
  selector: 'app-cardpaginator',
  template: `<ul style="justify-content: center;" *ngIf="pager.pages && pager.pages.length" class="pagination">
  <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item first-item">
      <a (click)="setPage(1)" class="page-link"><<</a>
  </li>
  <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item previous-item">
      <a (click)="setPage(pager.currentPage - 1)" class="page-link"><</a>
  </li>
  <li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}" class="page-item number-item">
      <a (click)="setPage(page)" class="page-link">{{page}}</a>
  </li>
  <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item next-item">
      <a (click)="setPage(pager.currentPage + 1)" class="page-link">></a>
  </li>
  <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item last-item">
      <a (click)="setPage(pager.totalPages)" class="page-link">>></a>
  </li>
</ul>`
})

export class CardpaginatorComponent implements OnInit, OnChanges {
  @Input() items: Array<any>;
  @Output() changePage = new EventEmitter<any>(true);
  @Output() changeSize = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 5;
  @Input() maxPages = 5;

  pager: any = {};

  ngOnInit() {
    // set page if items array isn't empty
    if (this.items && this.items.length) {
      this.setPage(this.initialPage);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // reset page if items array has changed
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.initialPage);
    }
  }

   setPage(page: number) {
    // get new pager object for specified page
    this.pager = paginate(this.items.length, page, this.pageSize, this.maxPages);

    // get new page of items from items array
    const pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);

    // console.log(page,this.items.length,this.pager.startIndex, this.pager.endIndex);
    // if (this.items.length - (this.pager.startIndex) <= this.pageSize ) {
    //     this.changeSize.emit(page)
    // }
    //  if (pageOfItems.length < (this.pager.startIndex )

    // call change page function in parent component
    this.changePage.emit(pageOfItems);
  }
}