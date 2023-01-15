import DAO from "../dao.js"

export default class Controller {
    static async apiPostRecord(req, res, next) {
        try {
            const amt = req.body.amount
            const date = req.body.date

            const response = await DAO.postRecord(amt, date)

            let { error } = response
            if (error) {
                res.status(400).json({ error })
                return
            }

            res.json({ status: "success" })

        } catch (e) {
            res.status(500).json({ error: e })
        }
        
    }

    static async apiGetRecord(req, res, next) {
        try {
            const date = req.body.date

            const response = await DAO.getRecord(date)

            let { error } = response
            if (error) {
                res.status(400).json({ error })
                return
            }

            res.json(response)
        } catch (e) {
            res.status(500).json({ error: e })
        }
    }
}