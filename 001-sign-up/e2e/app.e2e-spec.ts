import { SignUpPage } from './app.po';

describe('sign-up App', function() {
  let page: SignUpPage;

  beforeEach(() => {
    page = new SignUpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
