import { newE2EPage } from '@stencil/core/testing';

describe('med-semanas', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-semanas></med-semanas>');

    const element = await page.find('med-semanas');
    expect(element).toHaveClass('hydrated');
  });
});
