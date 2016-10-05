import { ErrorPagePage } from './app.po';

describe('error-page App', function() {
  let page: ErrorPagePage;

  beforeEach(() => {
    page = new ErrorPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
