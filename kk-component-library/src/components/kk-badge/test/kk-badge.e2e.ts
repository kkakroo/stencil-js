import { newE2EPage } from '@stencil/core/testing';

describe('kk-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kk-badge></kk-badge>');

    const element = await page.find('kk-badge');
    expect(element).toHaveClass('hydrated');
  });
});
