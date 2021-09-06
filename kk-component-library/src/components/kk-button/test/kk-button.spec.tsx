import { newSpecPage } from '@stencil/core/testing';
import { KkButton } from '../kk-button';

describe('kk-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KkButton],
      html: `<kk-button></kk-button>`,
    });
    expect(page.root).toEqualHtml(`
      <kk-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kk-button>
    `);
  });
});
