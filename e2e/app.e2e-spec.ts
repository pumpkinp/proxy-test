import { TestPoxyPage } from './app.po';

describe('test-poxy App', () => {
  let page: TestPoxyPage;

  beforeEach(() => {
    page = new TestPoxyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
