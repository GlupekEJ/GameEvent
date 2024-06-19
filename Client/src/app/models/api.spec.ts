import { api } from './api';

describe('API', () => {
  it('should create an instance', () => {
    expect(new api('Erik', 'Lars is king')).toBeTruthy();
  });
});
