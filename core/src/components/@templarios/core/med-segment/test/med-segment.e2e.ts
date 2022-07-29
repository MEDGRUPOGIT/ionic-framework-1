import { newE2EPage } from '@stencil/core/testing';

describe('med-segment', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-segment></med-segment>');

    const element = await page.find('med-segment');
    expect(element).toHaveClass('hydrated');
  });
});
