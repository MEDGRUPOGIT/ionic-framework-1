import { newE2EPage } from '@stencil/core/testing';

describe('select-test', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<select-test></select-test>');

    const element = await page.find('select-test');
    expect(element).toHaveClass('hydrated');
  });
});
