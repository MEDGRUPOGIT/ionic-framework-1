import { newE2EPage } from '@stencil/core/testing';

describe('med-search-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-search-bar></med-search-bar>');

    const element = await page.find('med-search-bar');
    expect(element).toHaveClass('hydrated');
  });
});
