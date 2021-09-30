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
import {NotFindedComponent} from './not-finded.component';

fdescribe('NotFindedComponent unit test', () => {
  let component: NotFindedComponent;
  let fixture: ComponentFixture<NotFindedComponent>;

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
      declarations: [ NotFindedComponent ],
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
    fixture = TestBed.createComponent( NotFindedComponent );
    component = fixture.componentInstance;
  });

  it('should create EmptyProductsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should validate that svg logo is render', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.not-finded-container>svg')).toBeDefined();
  }));

  it('should validate that title is render', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#notFindedTitleId').textContent).toBeTruthy();
  }));

});
