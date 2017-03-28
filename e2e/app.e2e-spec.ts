import { SckPage } from './app.po';

describe('sck App', () => {
  let page: SckPage;

  beforeEach(() => {
    page = new SckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
