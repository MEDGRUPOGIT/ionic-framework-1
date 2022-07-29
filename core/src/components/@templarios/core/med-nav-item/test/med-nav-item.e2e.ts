import { newE2EPage } from '@stencil/core/testing';

describe('med-nav-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-nav-item></med-nav-item>');

    const element = await page.find('med-nav-item');
    expect(element).toHaveClass('hydrated');
  });
});
