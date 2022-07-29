import { newE2EPage } from '@stencil/core/testing';

describe('med-check-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-check-card></med-check-card>');

    const element = await page.find('med-check-card');
    expect(element).toHaveClass('hydrated');
  });
});
