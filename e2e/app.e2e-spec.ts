import { ImageValidatorWebPage } from './app.po';

describe('image-validator-web App', function() {
  let page: ImageValidatorWebPage;

  beforeEach(() => {
    page = new ImageValidatorWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
