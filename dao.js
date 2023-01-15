import Record from './model.js'

export default class DAO {
    static async postRecord(amt, date) {
        try {
            const newRec = new Record({
                amt,
                date
            })
            
            await newRec.save()
            return {status: "success"}
        } catch (e) {
            console.error(`Unable to add record ${e}`)
            return { error: e }
        }
    }

    static async getRecord(date) {
        try {
            const record = await Record.find({ date })
            return { record }
        } catch (e) {
            console.error(`Unable to get record ${e}`)
            return { error: e }
        }
    }
}