import { newE2EPage } from '@stencil/core/testing';

describe('med-piechart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-piechart></med-piechart>');

    const element = await page.find('med-piechart');
    expect(element).toHaveClass('hydrated');
  });
});
