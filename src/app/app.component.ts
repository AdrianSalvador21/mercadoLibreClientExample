import {Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {SEOService} from './core/providers/seo.service';
import {ActivationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mercadoLibreClient';
  public activeLang = 'es';

  constructor(private translate: TranslateService, private seoService: SEOService, private router: Router) {
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit() {
    this.updateMetadata();
  }

  updateMetadata() {
    this.router.events
      .pipe(
        filter((eventa: any) => eventa instanceof ActivationEnd),
        filter((eventb: ActivationEnd) => eventb.snapshot.firstChild === null),
        map((eventc: ActivationEnd) => eventc.snapshot.data)
      )
      .subscribe((event: any) => {
        this.seoService.updateCanonicalURL();
        this.seoService.updateTitle(event.title);
        this.seoService.updateDescription(event.description);
        this.seoService.updateKeywords(event.keywords);
        this.seoService.updateOgUrl();
      });
  }
}
