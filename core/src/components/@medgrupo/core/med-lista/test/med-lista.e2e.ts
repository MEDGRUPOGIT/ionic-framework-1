import { newE2EPage } from '@stencil/core/testing';

describe('med-lista', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-lista></med-lista>');

    const element = await page.find('med-lista');
    expect(element).toHaveClass('hydrated');
  });
});
