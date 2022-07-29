import { newSpecPage } from '@stencil/core/testing';
import { MedAlert } from '../med-alert';

describe('med-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedAlert],
      html: `<med-alert></med-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <med-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-alert>
    `);
  });
});
