import { newE2EPage } from '@stencil/core/testing';

describe('med-scheme', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-scheme></med-scheme>');

    const element = await page.find('med-scheme');
    expect(element).toHaveClass('hydrated');
  });
});
