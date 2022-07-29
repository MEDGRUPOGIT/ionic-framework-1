import { newE2EPage } from '@stencil/core/testing';

describe('med-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-alert></med-alert>');

    const element = await page.find('med-alert');
    expect(element).toHaveClass('hydrated');
  });
});
