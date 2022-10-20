import { Item } from './item.model'
import mongoose from 'mongoose'
import { connect } from "../../utils/db";
import * as dotenv from 'dotenv'

dotenv.config()

const run = async () => {
    await connect(process.env.DB_URL + '/api-test',
        {
            useNewUrlParser: true,
            autoIndex: true,
            auth: {
                authSource: "admin"
            }
        })

    // create a new item
    const item = await Item.create({
        name: 'test item',
        status: 'active',
        notes: 'test notes',
        due: new Date(),
        createdBy: mongoose.Types.ObjectId(),
        list: mongoose.Types.ObjectId()
    })

    // // create a new item
    // const item = new Item({
    //     name: 'Test Item',
    //     status: 'active',
    //     notes: 'This is a test item',
    //     due: new Date(),
    //     createdBy: mongoose.Types.ObjectId(),
    //     list: mongoose.Types.ObjectId()
    // })

    // // save the item
    // await item.save()
    // console.log('item created', item)

    // // find the item by id
    // const foundItem = await Item.findById(item._id)
    // console.log(foundItem)

    // // find all items
    // const allItems = await Item.find()
    // console.log(allItems)
    // console.log(await Item.find({}).exec());

    // // update item by id
    // const updatedItem = await Item.findByIdAndUpdate(
    //     item._id,
    //     { name: 'Updated Item' },
    //     { new: true }).exec()
    // console.log(updatedItem)

    // //remove the item
    // const remove = await Item.findByIdAndRemove(item._id).exec()
    // console.log(remove);

}

run()
