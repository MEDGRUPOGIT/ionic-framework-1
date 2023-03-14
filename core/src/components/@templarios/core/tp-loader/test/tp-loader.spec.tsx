import { newSpecPage } from "@stencil/core/testing";
import { TpLoader } from "../tp-loader";

describe("tp-loader", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [TpLoader],
      html: `<tp-loader></tp-loader>`,
    });
    expect(page.root).toEqualHtml(`
      <tp-loader>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tp-loader>
    `);
  });
});
