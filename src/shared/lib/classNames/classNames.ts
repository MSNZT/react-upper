export type Mods = Record<string, boolean | string | undefined>

export const classNames = (
  main: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string => {
  return [
    main,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([classes, value]) => Boolean(value))
      .map(([classes, value]) => classes)
  ].join(' ')
}
