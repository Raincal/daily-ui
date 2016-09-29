import { DailyUiPage } from './app.po';

describe('daily-ui App', function() {
  let page: DailyUiPage;

  beforeEach(() => {
    page = new DailyUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
