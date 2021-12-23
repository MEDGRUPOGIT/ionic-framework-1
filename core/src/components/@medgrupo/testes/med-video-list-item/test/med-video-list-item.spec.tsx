import { newSpecPage } from '@stencil/core/testing';
import { MedVideoListItem } from '../med-video-list-item';

describe('med-video-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedVideoListItem],
      html: `<med-video-list-item></med-video-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <med-video-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-video-list-item>
    `);
  });
});
