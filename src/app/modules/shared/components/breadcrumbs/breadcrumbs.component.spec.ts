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
import {BreadcrumbsComponent} from './breadcrumbs.component';
import {StoreDataMock} from '../../../../core/models/testDats/StoreDataMock';
import {AppSpinnerServiceMock} from '../../../../core/models/testDats/AppSpinnerServiceMock';

fdescribe('BreadcrumbsComponent unit test', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

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
      declarations: [ BreadcrumbsComponent ],
      providers: [
        { provide: Store, useValue: new StoreDataMock()},
        { provide: NgxSpinnerService, useValue: new AppSpinnerServiceMock() }
      ],
      imports: [
        CommonModule, FormsModule, HttpClientModule, RouterTestingModule,
        ReactiveFormsModule, NgxSpinnerModule, TranslateModule.forRoot({
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
    fixture = TestBed.createComponent( BreadcrumbsComponent );
    component = fixture.componentInstance;
  });

  it('should create BreadcrumbsComponent', () => {
    expect(component).toBeTruthy();
  });

});
