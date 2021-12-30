import { newSpecPage } from '@stencil/core/testing';
import { MedInput } from '../med-input';

describe('med-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedInput],
      html: `<med-input></med-input>`,
    });
    expect(page.root).toEqualHtml(`
      <med-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-input>
    `);
  });
});
