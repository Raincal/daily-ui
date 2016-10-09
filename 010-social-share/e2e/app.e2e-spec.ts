import { SocialSharePage } from './app.po';

describe('social-share App', function() {
  let page: SocialSharePage;

  beforeEach(() => {
    page = new SocialSharePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
