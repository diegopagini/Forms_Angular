import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models/category.model';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public data$: Observable<Category[]>

  constructor(
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.getAllInfo()
  }

  getAllInfo(): void {
    this.data$ = this.categoriesService.getAllCategories();
  }

}
