import { Component, OnInit } from "@angular/core";
import { Language } from "@enums/language.enum";
import { LocalStorageService } from "@services/local-storage.service";

@Component({
  selector: "app-language-selector",
  templateUrl: "./language-selector.component.html",
  styleUrls: ["./language-selector.component.scss"]
})
export class LanguageSelectorComponent implements OnInit {
  languages: Language[] = [Language.PT_BR, Language.EN_US, Language.ES_ES];
  activeLanguage: string = "";

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.activeLanguage = this.localStorageService.getItem("lang");
    this.languages = this.languages.filter(
      lang => lang !== this.activeLanguage
    );
  }

  changeLanguage = (language: string): void => {
    this.localStorageService.saveItem("lang", language);
    window.location.reload();
  };
}
