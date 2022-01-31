import { newE2EPage } from '@stencil/core/testing';

describe('med-nav-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-nav-accordion></med-nav-accordion>');

    const element = await page.find('med-nav-accordion');
    expect(element).toHaveClass('hydrated');
  });
});
