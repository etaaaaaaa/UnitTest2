import sort from "./index"

let arr = [
    {name: "swordsman", health: 10},
    {name: "wizard", health: 100},
    {name: "archer", health: 80}
]

const ethalon = [
    {name: 'wizard', health: 100},
    {name: 'archer', health: 80},
    {name: 'swordsman', health: 10},
  ];
describe('my test', () => {
    test('index test', () => {
        expect(sort(arr)).toEqual(ethalon);
    });
});

test('index test', () => {
  expect(sort(arr)).not.toBe(ethalon);
});