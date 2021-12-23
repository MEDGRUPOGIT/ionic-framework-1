import { newSpecPage } from '@stencil/core/testing';
import { MedTabButton } from '../med-tab-button';

describe('med-tab-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedTabButton],
      html: `<med-tab-button></med-tab-button>`,
    });
    expect(page.root).toEqualHtml(`
      <med-tab-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-tab-button>
    `);
  });
});
