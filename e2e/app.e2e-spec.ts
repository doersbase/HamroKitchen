import { HamroKitchenPage } from './app.po';

describe('hamro-kitchen App', () => {
  let page: HamroKitchenPage;

  beforeEach(() => {
    page = new HamroKitchenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
