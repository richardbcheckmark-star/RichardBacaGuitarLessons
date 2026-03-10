export const cn = (...classNames: Array<string | undefined | false | null>): string =>
  classNames.filter(Boolean).join(" ");
