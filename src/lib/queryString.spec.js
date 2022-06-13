import { queryString, parse } from './queryString';

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'John',
      age: '30',
    };

    expect(queryString(obj)).toBe('name=John&age=30');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'John',
      abilities: ['JS', 'VUE'],
    };

    expect(queryString(obj)).toBe('name=John&abilities=JS,VUE');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'John',
      abilities: {
        first: 'JS',
        second: 'VUE',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Eduardo&age=26';
    // parse(qs);
    expect(parse(qs)).toEqual({
      name: 'Eduardo',
      age: '26',
    });
  });

  it('should convert a query string to an object taking care of comma separated values', () => {
    const qs = 'name=Eduardo&abilities=JS,VUE';
    expect(parse(qs)).toEqual({
      name: 'Eduardo',
      abilities: ['JS', 'VUE'],
    });
  });
});
