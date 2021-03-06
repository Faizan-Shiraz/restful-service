// tslint:disable-next-line:no-import-side-effect
import 'isomorphic-fetch';
import { restGet, restPost } from '../../rest-client';

describe('Restfull Services Test', () => {
  it('BasicGet: should return data for github abc user', () => {
    const result = restGet('https://api.github.com/users/abc')();
    return result.then((data : any) => {
      expect(data).toBeDefined();
      expect(data.login).toEqual('abc');
    });
  });

  it('BasicPost: should return data for github abc user', () => {
    const result = restPost('http://dummy.restapiexample.com/api/v1/create')({
      name: 'restful-test', salary: '1111', age: '11',
    });
    expect(result).toBeDefined();
  });
});
