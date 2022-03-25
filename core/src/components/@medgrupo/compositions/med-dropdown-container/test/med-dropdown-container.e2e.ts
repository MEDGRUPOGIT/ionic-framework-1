import { newE2EPage } from '@stencil/core/testing';

describe('med-dropdown-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-dropdown-container></med-dropdown-container>');

    const element = await page.find('med-dropdown-container');
    expect(element).toHaveClass('hydrated');
  });
});
