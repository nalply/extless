import { strictEqual } from 'assert'
import { value }  from 'pkg-mjs/import-withext.mjs'

const specifier2 = import.meta.url.split('/').slice(-2).join('/')
console.log('Inside', specifier2)
console.log('Imported from pkg-mjs/import-withext.mjs:', value)

strictEqual(value, '*pkg-mjs/import-withext.mjs *pkg-mjs/entry.mjs')
