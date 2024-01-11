import { newE2EPage } from '@stencil/core/testing';

describe('snackbar-test', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<snackbar-test></snackbar-test>');

    const element = await page.find('snackbar-test');
    expect(element).toHaveClass('hydrated');
  });
});
