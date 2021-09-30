
import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class SEOService {
  constructor(
    private title: Title, private meta: Meta,
    @Inject(DOCUMENT) private dom
  ) { }

  createCanonicalURL() {
    const link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', this.dom.URL);
  }

  updateCanonicalURL() {
    const canonical = document.querySelector('link[rel="canonical"]');
    canonical.setAttribute('href', this.dom.URL);
  }

  updateTitle(title: string) {
    // console.log(title);
    this.title.setTitle(title);
  }


  updateOgUrl() {
    // url: string - param removed
    // this.meta.updateTag({ name: 'og:url', content: url });
    const ogURL = document.querySelector('meta[property="og:url"]');
    ogURL.setAttribute('content', this.dom.URL);
  }

  updateDescription(desc: string) {
    // console.log(desc);
    this.meta.updateTag({ name: 'description', content: desc });
  }

  updateKeywords(keywords: string) {
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }
}
