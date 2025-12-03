import { Component, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css',
})
export class Pagination implements OnInit {
  currentPage = input.required<number>();
  totalPages = input.required<number>();
  pagesToShow = input.required<number>();
  pageChange = output<number>();

  ngOnInit(): void {
    const pagesCount = this.totalPages() - this.pagesToShow();
    console.log(pagesCount);
  }

  get pages(): (number | string)[] {
    const pages: (number | string)[] = [];

    const start = Math.max(2, this.currentPage() - Math.floor(this.pagesToShow() / 2));
    const end = Math.min(
      this.totalPages() - 1,
      this.currentPage() + Math.floor(this.pagesToShow() / 2),
    );

    pages.push(1);

    if (start > 2) {
      pages.push('...');
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < this.totalPages() - 1) {
      pages.push('...');
    }

    if (this.totalPages() > 1) {
      pages.push(this.totalPages());
    }

    return pages;
  }

  goToPage(page: number | string) {
    console.log(page);
    // console.log(this.currentPage());
    // console.log(page);
    // if (page === '...' || page === this.currentPage()) return;
    this.pageChange.emit(Number(page));
  }
}
