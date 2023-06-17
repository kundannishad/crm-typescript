import { Request, Response } from 'express'

import { UserInstance } from '../../mysql/user'

class UserController {

  async create(req: Request, res: Response) {
    try {
      const existingUserEmail = await UserInstance.findOne({
        where: { Email: req.body.Email }
      });
      if (existingUserEmail) {
        return res.json({ msg: 'Email already exists', status: 400 })
      }
      const existingUserMobileNo = await UserInstance.findOne({
        where: { MobileNo: req.body.MobileNo }
      });
      if (existingUserMobileNo) {
        return res.json({ msg: 'Mobile already exists', status: 400 })
      }

      const record = await UserInstance.create({ ...req.body });

      return res.json({ record, msg: 'Successfully create User' })

    } catch (error) {
      console.error('Failed to create user:', error)
      return res.status(500).json({ msg: 'Failed to create user', error })
    }
  }

  async readPagination(req: Request, res: Response) {
    try {
      const limit = (req.query.limit as number | undefined) || 10
      const offset = req.query.offset as number | undefined

      const records = await UserInstance.findAll({ where: {}, limit, offset })
      return res.json(records)
    } catch (e) {
      return res.json({ msg: 'fail to read', status: 500, route: '/read' })
    }
  }

  async readByID(req: Request, res: Response) {
    try {
      const { Id } = req.params
      const record = await UserInstance.findOne({ where: { Id } })
      return res.json(record)
    } catch (e) {
      return res.json({ msg: 'fail to read', status: 500, route: '/read/:id' })
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { Id } = req.params
      const record = await UserInstance.findOne({ where: { Id } })

      if (!record) {
        return res.json({ msg: 'Can not find existing record' })
      }

      const updatedRecord = await record.update({
        Active: !record.getDataValue('Active'),
        FirstName: req.body.FirstName
      })
      return res.json({ record: updatedRecord })
    } catch (e) {
      return res.json({
        msg: 'fail to read',
        status: 500,
        route: '/update/:id'
      })
    }
  }


  async delete(req: Request, res: Response) {
    try {
      const { Id } = req.params
      const record = await UserInstance.findOne({ where: { Id } })

      if (!record) {
        return res.json({ msg: 'Can not find existing record' })
      }
      const deletedRecord = await record.destroy()
      return res.json({ record: deletedRecord })
    } catch (e) {
      return res.json({
        msg: 'fail to read',
        status: 500,
        route: '/delete/:Id'
      })
    }
  }
  
}

export default new UserController()
