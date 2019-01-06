const Json2csvParser = require('json2csv').Parser;

const fields = ['foo', 'bar', 'baz.qux'];
const opts = { fields };

const data = [
  {
    foo: 'one',
    bar: 'two',
    baz: {
      qux: 'three'
    }
  },
  {
    foo: 'four',
    bar: 'five',
    baz: {
      qux: 'six'
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
