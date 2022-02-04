import { newE2EPage } from '@stencil/core/testing';

describe('med-aula-professor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-aula-professor></med-aula-professor>');

    const element = await page.find('med-aula-professor');
    expect(element).toHaveClass('hydrated');
  });
});
