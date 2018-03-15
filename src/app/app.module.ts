import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { LocalStorageService } from "./services/local-storage.service";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { LanguageSelectorComponent } from "./components/language-selector/language-selector.component";
import { MenuComponent } from "./components/menu/menu.component";
import { ListComponent } from "./components/list/list.component";

import { ListingComponent } from "./views/listing/listing.component";
import { HomeComponent } from "./views/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LanguageSelectorComponent,
    MenuComponent,
    HomeComponent,
    ListingComponent,
    ListComponent
  ],
  imports: [NgbModule.forRoot(), BrowserModule, AppRoutingModule],
  providers: [
    LocalStorageService, // ler novamente o uso
    {
      provide: LOCALE_ID,
      useValue: "pt"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
