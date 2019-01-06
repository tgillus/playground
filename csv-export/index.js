const Json2csvParser = require('json2csv').Parser;

const fields = ['foo', 'bar', 'baz.qux', 'baz.quux', 'baz.corge.grault'];
const opts = { fields };

const data = [
  {
    foo: 'one',
    bar: 'two',
    baz: {
      qux: 'three',
      quux: 'four',
      corge: {
        grault: 5
      }
    }
  },
  {
    foo: 'six',
    bar: 'seven',
    baz: {
      qux: 'eight',
      quux: 'nine',
      corge: {
        grault: 10
      }
    }
  }
];

try {
  const parser = new Json2csvParser(opts);
  const csv = parser.parse(data);

  console.log(csv);
} catch (err) {
  console.error(err);
}
