import { value as importedValue } from './entry.mjs'

const specifier2 = import.meta.url.split('/').slice(-2).join('/')
console.log('Inside', specifier2)
console.log('Imported from ./index.js', importedValue)

export const value = '*' + specifier2  + ' ' + importedValue
