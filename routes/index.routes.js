const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authe');
const fileModel = require('../models/file.models')
const upload = require('../config/multer.config');


router.get('/home',authMiddleware, async (req,res) => {

  const userFiles = await fileModel.find({
    user: req.user.userId
  })

  console.log(userFiles)
    res.render('home', {
      files: userFiles
    });

})

// router.get('home', authMiddleware, (req,res) => {
// })

router.post('/upload', authMiddleware, upload.single('file'), async (req, res) => {

  const newFile = await fileModel.create({
    path: req.file.path,
    originalname: req.file.originalname,
    user: req.user.userId
  })


  res.json(newFile)
  
});


// Router for secure retrieval of files (Enable signed URLs in Cloudinary if needed)
// Currently not in use since files are publicly accessible
// router.get('/download/:path', authMiddleware, async (req, res) => { ... });
  
// router.get('/download/:path', authMiddleware, async (req,res) => {
//   const loggedInUserId = req.user.userId;
//   const path = req.params.path;

//   const file = await fileModel.findOne({
//     user: loggedInUserId,
//     path: path
//   })

//   if(!file) {
//     return res.status(401).json({
//       message:'Unauthorized'
//     })
//   }

//   res.status(200).json({ message: 'File ready to download', url: file.path });
// })


module.exports = router;
