import { newE2EPage } from '@stencil/core/testing';

describe('med-chart-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-chart-bar></med-chart-bar>');

    const element = await page.find('med-chart-bar');
    expect(element).toHaveClass('hydrated');
  });
});
