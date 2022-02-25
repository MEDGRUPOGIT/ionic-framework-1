import { newE2EPage } from '@stencil/core/testing';

describe('med-download-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-download-button></med-download-button>');

    const element = await page.find('med-download-button');
    expect(element).toHaveClass('hydrated');
  });
});
