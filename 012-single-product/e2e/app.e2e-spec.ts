import { SingleProductPage } from './app.po';

describe('single-product App', function() {
  let page: SingleProductPage;

  beforeEach(() => {
    page = new SingleProductPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
