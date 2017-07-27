describe('Split Array function', function() {
    it('is handles an empty array', function() {
        expect(split([])).toEqual([[], []]); 
  });
    it('is handles an array of 1', function() {
        expect(split([2])).toEqual([[], [2]])
  });
    it('is able to split an array with an even number of elements', function() {
        expect(split([2, 4, 3, 6])).toEqual([[2, 4],[3, 6]])
  });  
    it('is able to split an array with an odd number of elements', function() {
        expect(split([5, 6, 8, 1, 3])).toEqual([[5, 6], [8, 1, 3]])
  });
  
});

describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect (merge([1, 3, 5, 7], [2, 4, 6, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  });

  it('is able to merge two sorted arrays with a repeating value in one array into one sorted array', function(){
    expect (merge([1, 3, 3, 7], [2, 4, 6, 8])).toEqual([1, 2, 3, 3, 4, 6, 7, 8])
  });

   it('is able to merge two sorted arrays with the same value in each array into one sorted array', function(){
    expect (merge([1, 4, 5, 7], [2, 4, 6, 8])).toEqual([1, 2, 4, 4, 5, 6, 7, 8])
  });

   it('is able to merge two sorted arrays of different lengths into one sorted array', function(){
    expect (merge([1, 3, 5], [2, 4, 6, 8])).toEqual([1, 2, 3, 4, 5, 6, 8])
  });

   it('is able to merge two sorted arrays of different lengths into one sorted array (2)', function(){
    expect (merge([1, 3, 5, 7], [2, 4, 6 ])).toEqual([1, 2, 3, 4, 5, 6, 7])
  });
});