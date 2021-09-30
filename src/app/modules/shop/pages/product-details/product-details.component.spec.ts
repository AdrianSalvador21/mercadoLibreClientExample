import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {Store} from '@ngrx/store';

import {NgxSpinnerModule, NgxSpinnerService} from 'ngx-spinner';
import {StoreDataMock} from '../../../../core/models/testDats/StoreDataMock';
import {AppSpinnerServiceMock} from '../../../../core/models/testDats/AppSpinnerServiceMock';
import {ProductDetailsComponent} from './product-details.component';
import {BreadcrumbsComponent} from '../../../shared/components/breadcrumbs/breadcrumbs.component';

fdescribe('ProductListItemComponent unit test', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  const routerSpy = {
    navigate: jasmine.createSpy('navigate'),
    url: {
      match: () => {
        return true;
      }
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent, BreadcrumbsComponent ],
      providers: [
        { provide: Store, useValue: new StoreDataMock()},
        { provide: NgxSpinnerService, useValue: new AppSpinnerServiceMock() }
      ],
      imports: [CommonModule, FormsModule, HttpClientModule, RouterTestingModule, ReactiveFormsModule, NgxSpinnerModule, TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => {
            return new TranslateHttpLoader(http);
          },
          deps: [HttpClient]
        }
      })
      ],
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [],
      }
    });
    fixture = TestBed.createComponent( ProductDetailsComponent );
    component = fixture.componentInstance;
  });

  it('should create ProductDetailsComponent', () => {
    expect(component).toBeTruthy();
  });

});
