import { newE2EPage } from '@stencil/core/testing';

describe('med-calendar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-calendar></med-calendar>');

    const element = await page.find('med-calendar');
    expect(element).toHaveClass('hydrated');
  });
});
