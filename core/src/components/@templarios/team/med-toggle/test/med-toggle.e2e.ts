import { newE2EPage } from '@stencil/core/testing';

describe('med-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-toggle></med-toggle>');

    const element = await page.find('med-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
