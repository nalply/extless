import { strictEqual } from 'assert'
import { value } from 'pkg-type-module/import-extless'

const specifier2 = import.meta.url.split('/').slice(-2).join('/')
console.log('Inside', specifier2)
console.log('Imported from pkg-type-module/import-extless:', value)

strictEqual(value, '*pkg-type-module/import-extless.js *pkg-type-module/entry.js')
