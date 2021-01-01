const { mean, median, mode } = require('./mathFuncs')

describe("Testing math functions", function() {
    let content = [1,2,3,3,4,5]
    let jsonContent = ['1','2','3','3','4','5']

    test('Test that mean is working', function() {
        expect(mean(content)).toEqual(3)
        expect(mean(jsonContent)).toEqual(3)
    })

    test('Test that median is working', function() {
        expect(median(content)).toEqual(3)
        expect(median(jsonContent)).toEqual(3)
    })

    test('Test that mode is working', function() {
        expect(mode(content)).toEqual([3])
        expect(mode(jsonContent)).toEqual([3])
        expect(mode([1,2,2,3,3,4])).toEqual([2, 3])
    })

})