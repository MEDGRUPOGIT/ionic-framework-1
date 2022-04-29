import { newSpecPage } from '@stencil/core/testing';
import { MedCalendar } from '../med-calendar';

describe('med-calendar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedCalendar],
      html: `<med-calendar></med-calendar>`,
    });
    expect(page.root).toEqualHtml(`
      <med-calendar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-calendar>
    `);
  });
});
