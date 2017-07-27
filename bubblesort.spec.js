describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('Bubble Sort', function(){
  it('handles an array with one element', function(){
    expect( bubbleSort([1]) ).toEqual([1]);
  });
});

describe('Bubble Sort', function(){
  it('handles an array with two elements', function(){
    expect( bubbleSort([3,1]) ).toEqual([1,3]);
  });
});

describe('Bubble Sort', function(){
  it('handles an array with two elements that are already sorted', function(){
    expect( bubbleSort([1,3]) ).toEqual([1,3]);
  });
});

describe('Bubble Sort', function(){
  it('handles an array with even number of elements', function(){
    expect( bubbleSort([3,1,15,9]) ).toEqual([1,3,9,15]);
  });
});

describe('Bubble Sort', function(){
  it('handles an array with even elements and repeating number', function(){
    expect( bubbleSort([7,9,7,3]) ).toEqual([3,7,7,9]);
  });
});


describe('Bubble Sort', function(){
  it('handles an array with 3 elements', function(){
    expect( bubbleSort([1,9,7]) ).toEqual([1,7,9]);
  });
});


describe('Bubble Sort', function(){
  it('handles an array with odd number of elements', function(){
    spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
    expect( bubbleSort([7,9,7,3,15,6,8])).toEqual([3,6,7,7,8,9,15]);
    expect(window.swap.calls.count()).toEqual(3);
  });

});

// describe('Swap', function(){
//     it('counts the number of calls to swap', function () {
//          spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
//          window.swap();
//         expect(window.swap.calls.count()).toEqual(3);
//     });
// })
