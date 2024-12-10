const getUserData=require('./user');
const fetchData=require('./api');

jest.mock('./api')

describe('Get User Data',()=>{
    it('Should return mocked user data',()=>{
        fetchData.mockReturnValue('Mocked API data');
        
        const result=getUserData(1);

        expect(result).toBe('User 1:Mocked API data');
    });
});