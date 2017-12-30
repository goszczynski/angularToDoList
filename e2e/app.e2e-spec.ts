import { AngularAplicationPage } from './app.po';

describe('angular-aplication App', function() {
  let page: AngularAplicationPage;

  beforeEach(() => {
    page = new AngularAplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
