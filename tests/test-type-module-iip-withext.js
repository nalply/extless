import { strictEqual } from 'assert'
import { value } from 'pkg-type-module/import-withext.js'

const specifier2 = import.meta.url.split('/').slice(-2).join('/')
console.log('Inside', specifier2)
console.log('Imported from pkg-type-module/import-withext.js:', value)

strictEqual(value, '*pkg-type-module/import-withext.js *pkg-type-module/entry.js')
