import { newE2EPage } from '@stencil/core/testing';

describe('med-add-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-add-card></med-add-card>');

    const element = await page.find('med-add-card');
    expect(element).toHaveClass('hydrated');
  });
});
