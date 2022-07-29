import { newE2EPage } from '@stencil/core/testing';

describe('dialog-test', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dialog-test></dialog-test>');

    const element = await page.find('dialog-test');
    expect(element).toHaveClass('hydrated');
  });
});
