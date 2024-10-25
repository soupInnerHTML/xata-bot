import chunk from 'lodash/chunk'

export const flat = Object.values

// array flat
export const grid = (obj: Record<string, string>, perRow = 2) => chunk(flat(obj), perRow)