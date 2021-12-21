import { newE2EPage } from '@stencil/core/testing';

describe('med-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-input></med-input>');

    const element = await page.find('med-input');
    expect(element).toHaveClass('hydrated');
  });
});
