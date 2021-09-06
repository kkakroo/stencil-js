import { newE2EPage } from '@stencil/core/testing';

describe('kk-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kk-button></kk-button>');

    const element = await page.find('kk-button');
    expect(element).toHaveClass('hydrated');
  });
});
