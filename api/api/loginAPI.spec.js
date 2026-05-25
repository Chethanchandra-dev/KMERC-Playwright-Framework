import{expext,test} from '@playwright/test';

test('sample login API ',async ({reqest})=>{
    const response=await request.post(
        'https://reqres.in/api/login',
        {
            data:{
                 email:'eve.holt@reqres.in',

                password:'cityslicka'
            }
        }

    );
    
    const responseBody=await response.json();
    console.log(responseBody);

    expect (response(status)).toBe(200);

    expect(responseBody.token).toBeDefined();


});