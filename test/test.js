const expect = chai.expect,
  testarr = ['b', 'a', 'b', 'a', 'c'];
describe('Advanced Array Sort', () => {
  it('Sort the array into subarrays with the same items in each', () => {
    expect(advancedSort(testarr)).to.eql(
      [['b', 'b'], ['a', 'a'], ['c']],
      'Please check your function!'
    );
  });
});
