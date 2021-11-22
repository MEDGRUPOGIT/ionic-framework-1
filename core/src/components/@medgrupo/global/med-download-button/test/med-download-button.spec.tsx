import { newSpecPage } from '@stencil/core/testing';
import { MedDownloadButton } from '../med-download-button';

describe('med-download-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedDownloadButton],
      html: `<med-download-button></med-download-button>`,
    });
    expect(page.root).toEqualHtml(`
      <med-download-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-download-button>
    `);
  });
});
