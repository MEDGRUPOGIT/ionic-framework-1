import { newE2EPage } from '@stencil/core/testing';

describe('med-calendar-day', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-calendar-day></med-calendar-day>');

    const element = await page.find('med-calendar-day');
    expect(element).toHaveClass('hydrated');
  });
});
