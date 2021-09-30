import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxComponent } from './search-box.component';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {Store} from '@ngrx/store';
import {StoreDataMock} from '../../../../core/models/testDats/StoreDataMock';

fdescribe('SearchBoxComponent unit test', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

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
      declarations: [ SearchBoxComponent ],
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
    fixture = TestBed.createComponent( SearchBoxComponent );
    component = fixture.componentInstance;
  });

  it('should create SearchBoxComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should validate that ML logo is render', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.search-box-container>img').src).toContain('/images/brand/Logo_ML.png');
  }));

  it('should validate that search logo is render', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span.search-icon-container>img').src).toContain('/images/shared/ic_Search.png');
  }));

  it('should validate that input value is valid', async(() => {
    fixture.detectChanges();
    component.queryData = 'search data';
    expect(component.isInputValid()).toBeTruthy();
    component.queryData = '';
    expect(component.isInputValid()).toBeFalsy();
  }));
});
