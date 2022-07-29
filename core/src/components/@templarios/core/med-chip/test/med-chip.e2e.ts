import { newE2EPage } from '@stencil/core/testing';

describe('med-chip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-chip></med-chip>');

    const element = await page.find('med-chip');
    expect(element).toHaveClass('hydrated');
  });
});
