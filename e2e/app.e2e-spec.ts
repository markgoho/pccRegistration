import { PccRegistrationPage } from './app.po';

describe('pcc-registration App', function() {
  let page: PccRegistrationPage;

  beforeEach(() => {
    page = new PccRegistrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
