import { newE2EPage } from '@stencil/core/testing';

describe('med-chart-bar-horizontal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-chart-bar-horizontal></med-chart-bar-horizontal>');

    const element = await page.find('med-chart-bar-horizontal');
    expect(element).toHaveClass('hydrated');
  });
});
