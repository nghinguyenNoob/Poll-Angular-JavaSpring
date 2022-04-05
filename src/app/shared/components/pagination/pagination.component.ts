import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'brc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() totalRecords: number = 0;
  @Input() recordsPerPage: number = 0;
  @Input() eventResetPagination : Observable<void>;
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();

  public pages: Array<string | number> = [];
  pageCount: number = 0;
  activePage: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.eventResetPagination.subscribe( () => {
      console.log("minh")
      this.activePage = 1;
    })
   
  }

  ngOnChanges(): void {
    this.pageCount = this.getPageCount();
    this.pages = this.pageCount <= 10 ? this.getArrayShort(this.pageCount, 1) : this.getArrayOfPageFirst(this.pageCount, 1);
   }

  private getPageCount(): number {
    let toTalPage: number = 0;

    if (this.totalRecords > 0 && this.recordsPerPage > 0) {
      const pageCount = this.totalRecords / this.recordsPerPage;
      const roundedPageCount = Math.floor(pageCount);
      toTalPage = roundedPageCount < pageCount ? roundedPageCount + 1 : roundedPageCount;
    }
    return toTalPage;
  }
  // Lấy danh sách khi tổng số trang dưới 10
  private getArrayShort(pageCount: number, pageStart: number): number[] {
    let pageArray: number[] = [];
    for (var i = 1; i <= pageCount; i++) {
      pageArray.push(i);
    }
    return pageArray;
  }
  // Lấy danh sách trang khi ở 5 trang đầu hoặc 5 trang cuối
  private getArrayOfPageFirst(pageCount: number, pageStart: number): Array<string | number> {
    let pageArray: Array<string | number> = [];
    if (pageStart === 1) {
      for (var i = 1; i <= 5; i++) {
        pageArray.push(i)
      }
      pageArray.push("...");
      pageArray.push(pageCount);
    }
    else {
      pageArray.push(1);
      pageArray.push("...")
      for (var i = pageStart; i <= pageCount; i++) {
        pageArray.push(i)
      }
    }
    return pageArray;
  }
  // Lấy danh sách trang khi trang ở giữa
  private getArrayOfPageMiddle(pageCount: number, pageStart: number): Array<string | number> {
    let pageArrayMiddle: Array<string | number> = [];
    pageArrayMiddle.push(1);
    pageArrayMiddle.push("...")
    for (var i = 1; i <= 3; i++) {

      pageArrayMiddle.push(pageStart);
      pageStart++;
    }
    pageArrayMiddle.push("...");
    pageArrayMiddle.push(pageCount);
    return pageArrayMiddle;
  }
  onClickPage(pageNumber: number | string, i: number) {
    if (pageNumber < 1) return;
    if (pageNumber > this.pageCount) return;
    if (this.pageCount <= 10) {
      this.activePage = Number(this.pages[i]);
      this.onPageChange.emit(this.activePage);
    }
    else {
      if (i >= 4) {
        let value = this.pages[i - 1] === "..." ? Number(this.pages[i]) : Number(this.pages[i - 1]) + 1;
        this.pages = (this.pageCount - value < 4) ? this.getArrayOfPageFirst(this.pageCount, this.pageCount - 4) : this.getArrayOfPageMiddle(this.pageCount, value - 1);
        this.activePage = value;
        this.onPageChange.emit(this.activePage);
      }
      else if (i <= 2) {
        let value = this.pages[i + 1] === "..." ? Number(this.pages[i]) : Number(this.pages[i + 1]) - 1;
        this.pages = value < 5 ? this.getArrayOfPageFirst(this.pageCount, 1) : this.getArrayOfPageMiddle(this.pageCount, value - 1)
        this.activePage = value;
        this.onPageChange.emit(this.activePage);
      }
      else {
        this.activePage = Number(this.pages[i]);
        this.onPageChange.emit(this.activePage);
      }
    }
  }
  onClickArrow(pageNumber: number) {
    if (pageNumber < 1) { return; }
    else if (pageNumber > this.pageCount) { return; }
    else {
      for (let i = 0; i < this.pages.length; i++) {
        if (pageNumber == this.pages[i]) {
          this.onClickPage(pageNumber, i);
          return;
        }
      }
    }
  }
}
