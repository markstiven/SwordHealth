const user = require('../src/controller/business/validateUser')

describe('User Validation', () => {
    it('Validate Login Access', async function(){
        const email = 'maria@swordhealth.com'
        const password = 'Maria@2023'

        const result = await user.validateUser(email, password)
        let test
        if(result){
            test = true
        } else {
            test = false
        }
        console.log(result)
        
        expect(test).toBe(true)
    })
})