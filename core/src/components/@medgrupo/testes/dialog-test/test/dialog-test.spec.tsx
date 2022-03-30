import { newSpecPage } from '@stencil/core/testing';
import { DialogTest } from '../dialog-test';

describe('dialog-test', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DialogTest],
      html: `<dialog-test></dialog-test>`,
    });
    expect(page.root).toEqualHtml(`
      <dialog-test>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dialog-test>
    `);
  });
});
