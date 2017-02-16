import { OptionpricePage } from './app.po';

describe('optionprice App', function() {
  let page: OptionpricePage;

  beforeEach(() => {
    page = new OptionpricePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
