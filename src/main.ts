import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Language } from "@enums/language.enum";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

declare const require;

const selectTranslation = () => {
  const lang = JSON.parse(localStorage.getItem("lang"))
  switch (lang) {
    case Language.EN_US:
      return require('raw-loader!./locale/messages.en.xlf');
    
    case Language.ES_ES:
      return require('raw-loader!./locale/messages.es.xlf')
      
    default:
      return require('raw-loader!./locale/messages.pt.xlf')
  }
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    { provide: TRANSLATIONS, useValue: selectTranslation() },
    { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }
  ]
})
  .catch(err => console.log(err));
