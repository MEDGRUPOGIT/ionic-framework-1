import { newSpecPage } from '@stencil/core/testing';
import { MedAlertFixed } from '../med-alert-fixed';

describe('med-alert-fixed', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedAlertFixed],
      html: `<med-alert-fixed></med-alert-fixed>`,
    });
    expect(page.root).toEqualHtml(`
      <med-alert-fixed>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-alert-fixed>
    `);
  });
});
