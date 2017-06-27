import { GoogleKeepLikeAppPage } from './app.po';

describe('google-keep-like-app App', () => {
  let page: GoogleKeepLikeAppPage;

  beforeEach(() => {
    page = new GoogleKeepLikeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to dl!!');
  });
});
