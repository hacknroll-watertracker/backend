import express from 'express'
import Controller from './controller.js'

const router = express.Router()

router.route('/').post(Controller.apiPostRecord)
                 .get(Controller.apiGetRecord)


export default router