import { newE2EPage } from '@stencil/core/testing';

describe('med-semana', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-semana></med-semana>');

    const element = await page.find('med-semana');
    expect(element).toHaveClass('hydrated');
  });
});
