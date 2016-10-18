import { TechTalkPage } from './app.po';

describe('tech-talk App', function() {
  let page: TechTalkPage;

  beforeEach(() => {
    page = new TechTalkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
