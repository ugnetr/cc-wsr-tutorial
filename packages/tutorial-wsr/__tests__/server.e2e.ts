import { testEnv } from '../environment';

describe('When rendering', () => {
  const { httpClient, mainApp } = testEnv.beforeAndAfter();

  it('should display a title', async () => {
    const url = mainApp.getUrl('/');
    const response = await httpClient.get(url);

    expect(response.data).toContain('Wix Full Stack Project Boilerplate');
  });
});
