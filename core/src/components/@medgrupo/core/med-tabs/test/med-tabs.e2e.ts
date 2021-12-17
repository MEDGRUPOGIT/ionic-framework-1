import { newE2EPage } from '@stencil/core/testing';

describe('med-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-tabs></med-tabs>');

    const element = await page.find('med-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
