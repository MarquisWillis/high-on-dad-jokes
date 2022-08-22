const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth')

router.get("/jokes", async (req, res) => {
    try {
      const commentData = await Comment.findAll({});
      if (!commentData) {
        res.status(400).json({ message: "No comment found" });
        return;
      }
      res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// route for creating comment (include withAuth)
router.post('/',withAuth , async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id:req.body.user_id,
            dad_joke_id:req.body.dad_joke_id
        });

        res.status(201).json(newComment)
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;