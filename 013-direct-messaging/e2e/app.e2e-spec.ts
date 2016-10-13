import { DirectMessagingPage } from './app.po';

describe('direct-messaging App', function() {
  let page: DirectMessagingPage;

  beforeEach(() => {
    page = new DirectMessagingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
