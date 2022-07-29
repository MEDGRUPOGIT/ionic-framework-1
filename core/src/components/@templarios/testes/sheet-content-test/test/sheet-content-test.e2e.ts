import { newE2EPage } from '@stencil/core/testing';

describe('sheet-content-test', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sheet-content-test></sheet-content-test>');

    const element = await page.find('sheet-content-test');
    expect(element).toHaveClass('hydrated');
  });
});
