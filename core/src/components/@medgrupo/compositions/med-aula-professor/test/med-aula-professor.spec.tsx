import { newSpecPage } from '@stencil/core/testing';
import { MedAulaProfessor } from '../med-aula-professor';

describe('med-aula-professor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedAulaProfessor],
      html: `<med-aula-professor></med-aula-professor>`,
    });
    expect(page.root).toEqualHtml(`
      <med-aula-professor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-aula-professor>
    `);
  });
});
