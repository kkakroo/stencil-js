import { newSpecPage } from '@stencil/core/testing';
import { KkList } from '../kk-list';

describe('kk-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KkList],
      html: `<kk-list></kk-list>`,
    });
    expect(page.root).toEqualHtml(`
      <kk-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kk-list>
    `);
  });
});
