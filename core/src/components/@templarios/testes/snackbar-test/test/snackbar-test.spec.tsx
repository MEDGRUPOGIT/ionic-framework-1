import { newSpecPage } from '@stencil/core/testing';
import { SnackbarTest } from '../snackbar-test';

describe('snackbar-test', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SnackbarTest],
      html: `<snackbar-test></snackbar-test>`,
    });
    expect(page.root).toEqualHtml(`
      <snackbar-test>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </snackbar-test>
    `);
  });
});
