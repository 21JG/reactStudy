import { getUser } from "../../base-pruebas/05-funciones"

describe('pruebas funciones 05 funciones', () => { 

    test('getUser retorna un objeto', () => { 

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser() ;

        expect( user ).toEqual( userTest);

    })
 })