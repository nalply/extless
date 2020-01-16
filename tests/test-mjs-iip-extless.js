import { strictEqual } from 'assert'
import { value }  from 'pkg-mjs/import-extless'

const specifier2 = import.meta.url.split('/').slice(-2).join('/')
console.log('Inside', specifier2)
console.log('Imported from pkg-mjs/import-extless:', value)

strictEqual(value, '*pkg-mjs/import-extless.mjs *pkg-mjs/entry.mjs')
