import { AppPage } from './app.po';

describe('mes-angular App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Olá, seja bem vindo!');
  });
});
