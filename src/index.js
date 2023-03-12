import list from 'spdx-license-list'

export let EOL;

await import('node:os')
  .then(os => EOL = os.EOL || '\n',
    err => EOL = '\n')

export const identifiers = Object.keys(list);
export const identifierList = identifiers.join(EOL);

export function printAll() {
  console.log(identifierList)
}
