import * as Assert from 'assert';
import * as FS from 'fs';
import * as URL from 'url';
import * as Path from 'path';

let tests = [];
let groups = [];

export function test(name, result) {
  if (groups.length > 0) {
    name = groups[groups.length - 1] + ' - ' + name;
  }
  tests.push({ name, result });
}

export function group(name, fn) {
  groups.push(name);
  fn();
  groups.pop();
}

function removeClassPrototypes(obj) {
  if (!obj || typeof obj !== 'object') {
    return;
  }
  if (Array.isArray(obj)) {
    for (let value of obj) { removeClassPrototypes(value); }
    return;
  }
  Object.setPrototypeOf(obj, Object.prototype);
  removeClassPrototypes(Array.from(Object.values(obj)));
  return obj;
}

function getExpected() {
  let filePath = URL.fileURLToPath(import.meta.url);
  let path = Path.join(Path.dirname(filePath), 'results.json');
  let contents = FS.readFileSync(path, 'utf8');
  try { return JSON.parse(contents); } catch { /* Ignore */ }
  return {};
}

Promise.resolve().then(() => {
  let actual = Object.fromEntries(tests.map((test) => {
    return [test.name, removeClassPrototypes(test.result)];
  }));

  if (process.argv.includes('--print')) {
    process.stdout.write(JSON.stringify(actual, null, 2));
    process.stdout.write('\n');
    return;
  }

  let expected = getExpected();
  Assert.deepStrictEqual(actual, expected);
});
