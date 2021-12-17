import { newE2EPage } from '@stencil/core/testing';

describe('med-tab-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-tab-button></med-tab-button>');

    const element = await page.find('med-tab-button');
    expect(element).toHaveClass('hydrated');
  });
});
