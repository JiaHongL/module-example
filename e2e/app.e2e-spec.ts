import { ModuleExamplePage } from './app.po';

describe('module-example App', () => {
  let page: ModuleExamplePage;

  beforeEach(() => {
    page = new ModuleExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
