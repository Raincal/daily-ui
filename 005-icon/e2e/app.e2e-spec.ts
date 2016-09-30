import { IconPage } from './app.po';

describe('icon App', function() {
  let page: IconPage;

  beforeEach(() => {
    page = new IconPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
