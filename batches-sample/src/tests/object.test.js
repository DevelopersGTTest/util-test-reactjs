test('compare two [objects] ', () => {
    const obj1 = {
        name: 'foo'
    }

    const nobj2 = {
        name: 'foo'
    }

    expect( obj1 ).toEqual(nobj2);
})
