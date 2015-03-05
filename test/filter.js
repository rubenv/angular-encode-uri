describe('Filter', function () {
    var encodeUri = null;

    beforeEach(module('rt.encodeuri'));

    beforeEach(inject(function ($filter) {
        encodeUri = $filter('encodeUri');
    }));

    it('Encodes URIs', function () {
        expect(encodeUri('test')).toEqual('test');
    });

    it('Encodes URIs: space', function () {
        expect(encodeUri(' ')).toEqual('%20');
    });
    
        it('Encodes URIs: space', function () {
        expect(encodeUri('/')).toEqual('%2F');
    });
});
