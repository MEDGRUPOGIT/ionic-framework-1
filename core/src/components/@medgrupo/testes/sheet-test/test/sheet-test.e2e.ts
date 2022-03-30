import { newE2EPage } from '@stencil/core/testing';

describe('sheet-test', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sheet-test></sheet-test>');

    const element = await page.find('sheet-test');
    expect(element).toHaveClass('hydrated');
  });
});
