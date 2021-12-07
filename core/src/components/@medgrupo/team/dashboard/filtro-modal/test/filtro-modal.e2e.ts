import { newE2EPage } from '@stencil/core/testing';

describe('filtro-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<filtro-modal></filtro-modal>');

    const element = await page.find('filtro-modal');
    expect(element).toHaveClass('hydrated');
  });
});
