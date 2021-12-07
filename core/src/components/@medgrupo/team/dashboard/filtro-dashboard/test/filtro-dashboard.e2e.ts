import { newE2EPage } from '@stencil/core/testing';

describe('filtro-dashboard', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<filtro-dashboard></filtro-dashboard>');

    const element = await page.find('filtro-dashboard');
    expect(element).toHaveClass('hydrated');
  });
});
