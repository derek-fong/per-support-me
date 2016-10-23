import { PerSupportMePage } from './app.po';

describe('per-support-me App', function() {
  let page: PerSupportMePage;

  beforeEach(() => {
    page = new PerSupportMePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
