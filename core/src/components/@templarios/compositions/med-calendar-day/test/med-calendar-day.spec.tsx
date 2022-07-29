import { newSpecPage } from '@stencil/core/testing';
import { MedCalendarDay } from '../med-calendar-day';

describe('med-calendar-day', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedCalendarDay],
      html: `<med-calendar-day></med-calendar-day>`,
    });
    expect(page.root).toEqualHtml(`
      <med-calendar-day>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-calendar-day>
    `);
  });
});
