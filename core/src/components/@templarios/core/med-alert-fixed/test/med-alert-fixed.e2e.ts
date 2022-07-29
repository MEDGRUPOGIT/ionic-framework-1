import { newE2EPage } from '@stencil/core/testing';

describe('med-alert-fixed', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-alert-fixed></med-alert-fixed>');

    const element = await page.find('med-alert-fixed');
    expect(element).toHaveClass('hydrated');
  });
});
