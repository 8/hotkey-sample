import { HotkeysamplePage } from './app.po';

describe('hotkeysample App', () => {
  let page: HotkeysamplePage;

  beforeEach(() => {
    page = new HotkeysamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
