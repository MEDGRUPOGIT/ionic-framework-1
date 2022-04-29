import { newE2EPage } from '@stencil/core/testing';

describe('med-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-nav></med-nav>');

    const element = await page.find('med-nav');
    expect(element).toHaveClass('hydrated');
  });
});
