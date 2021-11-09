import { newE2EPage } from '@stencil/core/testing';

describe('med-video-thumbnail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-video-thumbnail></med-video-thumbnail>');

    const element = await page.find('med-video-thumbnail');
    expect(element).toHaveClass('hydrated');
  });
});
