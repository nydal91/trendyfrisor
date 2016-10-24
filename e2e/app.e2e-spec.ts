import { TrendyfrisorPage } from './app.po';

describe('trendyfrisor App', function() {
  let page: TrendyfrisorPage;

  beforeEach(() => {
    page = new TrendyfrisorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
