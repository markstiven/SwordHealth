const validateActivity = require('../src/controller/business/validateActivity')
const rabbitMQ = require('../src/rabbitMQ/rabbitmqServer')
describe('Activities Validation', () => {
    it('Validate Get all activities', async () => {
        const activities = await validateActivity.allActivities()
        let test
        if(activities){
            test = true
        } else {
            test = false
        }
        expect(test).toBe(true)
    })
    it('Validate Get activities by Technician', async () => {
        const userID = 3
        const activities = await validateActivity.activitiesByID(userID)
        let test
        if(activities){
            test = true
        } else {
            test = false
        }
        expect(test).toBe(true)
    })
    it('Validate Save activities by Technician', async () => {
        const userID = 1
        const jsonBody = {
            title: "test Sword Health",
            detail: "Validate teste unit with jest for Sword Health"
        }

        const activities = await validateActivity.activitySave(jsonBody, userID)

        let test
        if(activities){
            test = true
        } else {
            test = false
        }
        expect(test).toBe(true)
    })
    it('Validate Delete activities by Manager', async () => {
        const userID = 2
        const activityID = 3

        const activities = await validateActivity.activityDelete(activityID, userID)

        let test
        if(activities){
            test = true
        } else {
            test = false
        }
        expect(test).toBe(true)
    })
    it('Validate Update activities by Technician', async () => {
        const activityID = 1
        const userID = 1
        const title = "test Sword Health"
        const detail ="Validate teste unit with jest for Sword Health"
        

        const activities = await validateActivity.activityUpdate(activityID, title, detail, userID)

        let test
        if(activities){
            test = true
        } else {
            test = false
        }
        expect(test).toBe(true)
    })

    it('Validate Notify Manager', async () => {

        const activities = await rabbitMQ.notifyActivity()

        let test
        if(activities){
            test = true
        } else {
            test = false
        }
        expect(test).toBe(true)
    })

})