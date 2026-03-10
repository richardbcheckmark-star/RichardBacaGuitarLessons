import { describe, expect, it } from "vitest";

import { absoluteUrl } from "@/lib/site";

describe("absoluteUrl", () => {
  it("builds paths with leading slash", () => {
    const url = absoluteUrl("contact");
    expect(url.endsWith("/contact")).toBe(true);
  });

  it("keeps root path stable", () => {
    const url = absoluteUrl("/");
    expect(url.endsWith("/")).toBe(true);
  });
});
