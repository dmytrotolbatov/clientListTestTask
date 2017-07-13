import { ClientListPage } from './app.po';

describe('client-list App', () => {
  let page: ClientListPage;

  beforeEach(() => {
    page = new ClientListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
