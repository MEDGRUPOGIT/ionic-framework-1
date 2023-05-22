import { expect } from "@playwright/test";
import { configs, test } from "@utils/test/playwright";

configs({ modes: ["md"], directions: ["ltr"] }).forEach(({ config, title }) => {
  test.describe(title("accordion: states"), () => {
    test.beforeEach(async ({ page }) => {
      await page.setContent(
        `
      <tp-accordion-group animated="false">
        <tp-accordion>
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </tp-accordion>
      </tp-accordion-group>
    `,
        config
      );
    });
    test("should properly set readonly on child accordions", async ({
      page,
    }) => {
      const accordionGroup = page.locator("tp-accordion-group");
      const accordion = page.locator("tp-accordion");

      await expect(accordion).toHaveJSProperty("readonly", false);

      await accordionGroup.evaluate((el: HTMLTpAccordionGroupElement) => {
        el.readonly = true;
      });

      await page.waitForChanges();

      await expect(accordion).toHaveJSProperty("readonly", true);
    });

    test("should properly set disabled on child accordions", async ({
      page,
    }) => {
      const accordionGroup = page.locator("tp-accordion-group");
      const accordion = page.locator("tp-accordion");

      await expect(accordion).toHaveJSProperty("disabled", false);

      await accordionGroup.evaluate((el: HTMLTpAccordionGroupElement) => {
        el.disabled = true;
      });

      await page.waitForChanges();

      await expect(accordion).toHaveJSProperty("disabled", true);
    });
  });
});
