import { newE2EPage } from '@stencil/core/testing';

describe('med-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-item></med-item>');

    const element = await page.find('med-item');
    expect(element).toHaveClass('hydrated');
  });
});
