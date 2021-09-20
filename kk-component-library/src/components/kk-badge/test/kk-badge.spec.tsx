import { newSpecPage } from '@stencil/core/testing';
import { KKBadge } from '../kk-badge';

describe('kk-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KKBadge],
      html: `<kk-badge></kk-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <kk-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kk-badge>
    `);
  });
});
