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
import {EmptyProductsComponent} from './empty-products.component';

fdescribe('EmptyProductsComponent unit test', () => {
  let component: EmptyProductsComponent;
  let fixture: ComponentFixture<EmptyProductsComponent>;

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
      declarations: [ EmptyProductsComponent ],
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
    fixture = TestBed.createComponent( EmptyProductsComponent );
    component = fixture.componentInstance;
  });

  it('should create EmptyProductsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should validate that ML brand logo is render', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.empty-products-container>img').src).toContain('/images/brand/Logo_ML_brand.png');
  }));

  it('should validate that title is render', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#emptyProductsTitle').textContent).toBeTruthy();
  }));

  it('should validate that label is render', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#emptyProductsLabel').textContent).toBeTruthy();
  }));
});
