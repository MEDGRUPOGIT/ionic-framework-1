import { newSpecPage } from '@stencil/core/testing';
import { MedVideoThumbnail } from '../med-video-thumbnail';

describe('med-video-thumbnail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedVideoThumbnail],
      html: `<med-video-thumbnail></med-video-thumbnail>`,
    });
    expect(page.root).toEqualHtml(`
      <med-video-thumbnail>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-video-thumbnail>
    `);
  });
});
