import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {Store} from '@ngrx/store';
import {StoreDataMock} from '../../../../core/models/testDats/StoreDataMock';
import {HomeComponent} from './home.component';
import {EmptyProductsComponent} from '../../components/empty-products/empty-products.component';

fdescribe('HomeComponent unit test', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

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
      declarations: [ HomeComponent, EmptyProductsComponent ],
      providers: [
        { provide: Store, useValue: new StoreDataMock()},
      ],
      imports: [CommonModule, FormsModule, HttpClientModule, RouterTestingModule, ReactiveFormsModule, TranslateModule.forRoot({
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
    fixture = TestBed.createComponent( HomeComponent );
    component = fixture.componentInstance;
  });

  it('should create HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should validate that emptyProductsComponent is render', () => {
    expect(component.emptyProductsComponent).toBeDefined();
  });

});
