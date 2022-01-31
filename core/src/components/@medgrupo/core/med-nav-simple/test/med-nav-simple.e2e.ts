import { newE2EPage } from '@stencil/core/testing';

describe('med-nav-simple', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-nav-simple></med-nav-simple>');

    const element = await page.find('med-nav-simple');
    expect(element).toHaveClass('hydrated');
  });
});
