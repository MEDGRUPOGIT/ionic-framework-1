import { newSpecPage } from '@stencil/core/testing';
import { SelectTest } from '../select-test';

describe('select-test', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SelectTest],
      html: `<select-test></select-test>`,
    });
    expect(page.root).toEqualHtml(`
      <select-test>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </select-test>
    `);
  });
});
