import { newE2EPage } from '@stencil/core/testing';

describe('med-sheet', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-sheet></med-sheet>');

    const element = await page.find('med-sheet');
    expect(element).toHaveClass('hydrated');
  });
});
