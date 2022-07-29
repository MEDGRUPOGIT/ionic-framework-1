import { newE2EPage } from '@stencil/core/testing';

describe('med-carregamento', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-carregamento></med-carregamento>');

    const element = await page.find('med-carregamento');
    expect(element).toHaveClass('hydrated');
  });
});
