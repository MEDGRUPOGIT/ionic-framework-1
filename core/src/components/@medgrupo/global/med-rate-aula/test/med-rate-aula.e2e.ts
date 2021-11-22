import { newE2EPage } from '@stencil/core/testing';

describe('med-rate-aula', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-rate-aula></med-rate-aula>');

    const element = await page.find('med-rate-aula');
    expect(element).toHaveClass('hydrated');
  });
});
