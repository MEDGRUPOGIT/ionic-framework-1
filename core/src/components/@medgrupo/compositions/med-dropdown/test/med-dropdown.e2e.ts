import { newE2EPage } from '@stencil/core/testing';

describe('med-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-dropdown></med-dropdown>');

    const element = await page.find('med-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
