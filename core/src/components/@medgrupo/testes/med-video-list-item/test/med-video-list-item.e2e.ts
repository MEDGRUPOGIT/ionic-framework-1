import { newE2EPage } from '@stencil/core/testing';

describe('med-video-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-video-list-item></med-video-list-item>');

    const element = await page.find('med-video-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
