import { newSpecPage } from '@stencil/core/testing';
import { MedSegment } from '../med-segment';

describe('med-segment', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedSegment],
      html: `<med-segment></med-segment>`,
    });
    expect(page.root).toEqualHtml(`
      <med-segment>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-segment>
    `);
  });
});
