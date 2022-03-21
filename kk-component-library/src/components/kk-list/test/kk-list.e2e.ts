import { newE2EPage } from '@stencil/core/testing';

describe('kk-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kk-list></kk-list>');

    const element = await page.find('kk-list');
    expect(element).toHaveClass('hydrated');
  });
});
