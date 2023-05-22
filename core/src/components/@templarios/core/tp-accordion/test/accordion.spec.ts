import { newSpecPage } from "@stencil/core/testing";

import { TpAccordionGroup } from "../../tp-accordion-group/tp-accordion-group.tsx";
import { Item } from "../../item/item.tsx";
import { TpAccordion } from "../tp-accordion.js";

it("should open correct accordions when accordion group value is set", async () => {
  const page = await newSpecPage({
    components: [Item, TpAccordion, TpAccordionGroup],
    html: `
      <tp-accordion-group animated="false">
        <tp-accordion value="first">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </tp-accordion>
        <tp-accordion value="second">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </tp-accordion>
        <tp-accordion value="third">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </tp-accordion>
      </tp-accordion-group>
    `,
  });

  const accordionGroup = page.body.querySelector("tp-accordion-group");
  const accordions = accordionGroup.querySelectorAll("tp-accordion");

  accordions.forEach((accordion) => {
    expect(accordion.classList.contains("accordion-collapsed")).toEqual(true);
  });

  accordionGroup.value = "second";
  await page.waitForChanges();

  expect(accordions[0].classList.contains("accordion-collapsed")).toEqual(true);
  expect(accordions[1].classList.contains("accordion-collapsed")).toEqual(
    false
  );
  expect(accordions[2].classList.contains("accordion-collapsed")).toEqual(true);
});

it("should open correct accordions when accordion value is set", async () => {
  const page = await newSpecPage({
    components: [Item, TpAccordion, TpAccordionGroup],
    html: `
      <tp-accordion-group animated="false" value="first">
        <tp-accordion>
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </tp-accordion>
        <tp-accordion value="second">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </tp-accordion>
        <tp-accordion value="third">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </tp-accordion>
      </tp-accordion-group>
    `,
  });

  const accordionGroup = page.body.querySelector("tp-accordion-group");
  const accordions = accordionGroup.querySelectorAll("tp-accordion");

  accordions.forEach((accordion) => {
    expect(accordion.classList.contains("accordion-collapsed")).toEqual(true);
  });

  accordions[0].value = "first";
  await page.waitForChanges();

  expect(accordions[0].classList.contains("accordion-collapsed")).toEqual(
    false
  );
  expect(accordions[1].classList.contains("accordion-collapsed")).toEqual(true);
  expect(accordions[2].classList.contains("accordion-collapsed")).toEqual(true);
});

it('should open more than one accordion when multiple="true"', async () => {
  const page = await newSpecPage({
    components: [Item, TpAccordion, TpAccordionGroup],
    html: `
      <tp-accordion-group multiple="true" animated="false">
        <tp-accordion value="first">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </tp-accordion>
        <tp-accordion value="second">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </tp-accordion>
        <tp-accordion value="third">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </tp-accordion>
      </tp-accordion-group>
    `,
  });

  const accordionGroup = page.body.querySelector("tp-accordion-group");
  const accordions = accordionGroup.querySelectorAll("tp-accordion");

  accordions.forEach((accordion) => {
    expect(accordion.classList.contains("accordion-collapsed")).toEqual(true);
  });

  accordionGroup.value = ["first", "second"];
  await page.waitForChanges();

  expect(accordions[0].classList.contains("accordion-collapsed")).toEqual(
    false
  );
  expect(accordions[1].classList.contains("accordion-collapsed")).toEqual(
    false
  );
  expect(accordions[2].classList.contains("accordion-collapsed")).toEqual(true);
});

it("should render with accordion open", async () => {
  const page = await newSpecPage({
    components: [Item, TpAccordion, TpAccordionGroup],
    html: `
      <tp-accordion-group value="first" animated="false">
        <tp-accordion value="first">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </tp-accordion>
        <tp-accordion value="second">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </tp-accordion>
        <tp-accordion value="third">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </tp-accordion>
      </tp-accordion-group>
    `,
  });

  const accordionGroup = page.body.querySelector("tp-accordion-group");
  const accordions = accordionGroup.querySelectorAll("tp-accordion");

  expect(accordions[0].classList.contains("accordion-collapsed")).toEqual(
    false
  );
  expect(accordions[1].classList.contains("accordion-collapsed")).toEqual(true);
  expect(accordions[2].classList.contains("accordion-collapsed")).toEqual(true);
});

it('should accept a string when multiple="true"', async () => {
  const page = await newSpecPage({
    components: [Item, TpAccordion, TpAccordionGroup],
    html: `
      <tp-accordion-group multiple="true" value="first" animated="false">
        <tp-accordion value="first">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </tp-accordion>
        <tp-accordion value="second">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </tp-accordion>
        <tp-accordion value="third">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </tp-accordion>
      </tp-accordion-group>
    `,
  });

  const accordionGroup = page.body.querySelector("tp-accordion-group");
  const accordions = accordionGroup.querySelectorAll("tp-accordion");

  expect(accordions[0].classList.contains("accordion-collapsed")).toEqual(
    false
  );
  expect(accordions[1].classList.contains("accordion-collapsed")).toEqual(true);
  expect(accordions[2].classList.contains("accordion-collapsed")).toEqual(true);
});

it("should set default values if not provided", async () => {
  const page = await newSpecPage({
    components: [Item, TpAccordion, TpAccordionGroup],
    html: `
      <tp-accordion-group animated="false">
        <tp-accordion>
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </tp-accordion>
      </tp-accordion-group>
    `,
  });

  const accordionGroup = page.body.querySelector("tp-accordion-group");
  const accordion = accordionGroup.querySelector("tp-accordion");

  /**
   * ID is determined via an auto incrementing counter
   * so do not hard code tp-accordion-0 as it might
   * change depending on how many accordions
   * are used in these tests.
   */
  expect(accordion.value).toContain("tp-accordion-");

  accordionGroup.value = accordion.value;
  await page.waitForChanges();

  expect(accordion.classList.contains("accordion-collapsed")).toEqual(false);
});

// Verifies fix for https://github.com/ionic-team/ionic-framework/issues/27047
it('should not have animated class when animated="false"', async () => {
  const page = await newSpecPage({
    components: [Item, TpAccordion, TpAccordionGroup],
    html: `
      <tp-accordion-group animated="false">
        <tp-accordion>
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </tp-accordion>
      </tp-accordion-group>
    `,
  });

  const accordionGroup = page.body.querySelector("tp-accordion-group")!;
  const accordion = accordionGroup.querySelector("tp-accordion")!;

  expect(accordionGroup.animated).toEqual(false);
  expect(accordion.classList.contains("accordion-animated")).toEqual(false);
});
