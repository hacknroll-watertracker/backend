export default class Controller {
    static async apiPostRecord(req, res, next) {
        res.json({msg: "post success"})
    }

    static async apiGetRecord(req, res, next) {
        res.json({msg: "get success"})
    }
}