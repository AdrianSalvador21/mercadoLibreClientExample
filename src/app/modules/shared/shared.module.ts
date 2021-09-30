import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {LazyImgDirective} from './directives/lazy-img.directive';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [LazyImgDirective, BreadcrumbsComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    LazyImgDirective,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbsComponent,
  ],
  providers: [],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
    };
  }
}

