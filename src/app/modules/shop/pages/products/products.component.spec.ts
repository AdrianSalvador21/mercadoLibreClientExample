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
import {ProductsComponent} from './products.component';
import {SearchBoxComponent} from '../../components/search-box/search-box.component';

fdescribe('ProductsComponent unit test', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

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
      declarations: [ ProductsComponent, SearchBoxComponent ],
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
    fixture = TestBed.createComponent( ProductsComponent );
    component = fixture.componentInstance;
  });

  it('should create ProductsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should validate that searchBoxComponent is render', () => {
    expect(component.searchBoxComponent).toBeDefined();
  });

});
