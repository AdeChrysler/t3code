import { describe, expect, it } from "vite-plus/test";

import { sshRuntimeArchiveVersion } from "./sshRuntimeVersion.ts";

describe("sshRuntimeArchiveVersion", () => {
  it("runs the upstream release a ZeniCode build is based on", () => {
    expect(sshRuntimeArchiveVersion("0.1.10-zenicode.1")).toBe("0.1.10");
    expect(sshRuntimeArchiveVersion("0.1.10-zenicode.12")).toBe("0.1.10");
  });

  it("keeps upstream versions as they are", () => {
    expect(sshRuntimeArchiveVersion("0.1.10")).toBe("0.1.10");
    expect(sshRuntimeArchiveVersion("0.1.11-nightly.20261117.4825")).toBe(
      "0.1.11-nightly.20261117.4825",
    );
  });
});
