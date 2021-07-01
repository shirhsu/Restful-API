const express = require('express');
const router = express();
const Post = require('../models/todopost');

//getting post
router.get('/', async(req, res) => {
    try {
        //find is used to fetch data
        const posts = await Post.find();
        console.log(posts)
        res.json(posts);
    } catch (err) {
        res.json({ message: err })
    }
})

// router.get('/specific', (req, res) => {
//     res.send("specific")
// })

//submitting data

router.post('/', async(req, res) => {

    // const { taskheading, description, status, date} = req.body;

    const createObject = {
        taskheading: req.body.taskheading,
        description: req.body.description,
        status: req.body.status,
        date: req.body.date
    }

    const post = new Post(createObject);
    try {
        const response = await post.save();
        res.json(response)
    } catch (err) {
        res.json({ message: err })
    }
})

//getting a specific post
router.get('/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        if (!post) {
            res.json({ success: false, message: "Id not dound" })
        }
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
})

//deleting a specific post
router.delete('/:postId', async(req, res) => {
    try {
        const remove = await Post.remove({ _id: req.params.postId })
        res.json({
            status: true,
            message: "Post deleted"
        })
    } catch (err) {
        res.json({ message: err })
    }
})

//patching
router.patch('/:postId', async(req, res) => {

    const patchObject = {
        taskheading: req.body.taskheading,
        description: req.body.description,
        status: req.body.status
    }

    try {
        const update = await Post.findByIdAndUpdate({ _id: req.params.postId }, { $set: patchObject })
        if (!update) {
            res.json({ success: false, message: "data not found" })
        }
        res.json(update)

    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router;