// ZeniCode builds carry a `-zenicode.N` suffix that upstream never publishes. SSH hosts download
// their runtime from upstream releases by version, so they run the release this build is based on.
const ZENICODE_SUFFIX = /-zenicode\.\d+$/u;

export function sshRuntimeArchiveVersion(appVersion: string): string {
  return appVersion.trim().replace(ZENICODE_SUFFIX, "");
}
