type Mods = Record<string, boolean | string>

export const classNames = (main: string, mods?: Mods, additional?: string[]): string => {
  return [
    main,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([classes, value]) => Boolean(value))
      .map(([classes, value]) => classes)
  ].join(' ')
}
