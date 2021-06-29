const Page = require('../models/edit.model');

const createPage = async (req, res) => {
  if (req.body) {
    const page = new Page(req.body);
    await page.save()
    .then(data => {
      res.status(200).send({ data: data });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
  }
}

const updatePage = async (req, res, next) => {
  await Page.findByIdAndUpdate(req.params.id, {$set: req.body}, (error, data) => {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      res.json(data)
      console.log('Page Details updated successfully !')
    }
    
})
}

const deletePage = async(req, res, next) => {
    await Page.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      res.status(500).send({ error: error.message });
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
})
}

const getAllPages = async (req, res) => {
  await Page.find({}).populate('pages', 'name title description date time')
  .then(data => {
    res.status(200).send({ data: data });
  })
  .catch(error => {
    res.status(500).send({ error: error.message });
  });
}
// const getDT = async (req, res) => {
//   await Page.findOne({}).sort({'_id':-1}).limit(1).populate('pages', 'date time')
//   .then(data => {
//     res.status(200).send({ data: data });
//   })
//   .catch(error => {
//     res.status(500).send({ error: error.message });
//   });
// }

const getConForPage = async (req, res) => {
  if (req.params && req.params.id) {
    await Page.findById(req.params.id)
    .populate('pages', 'name title description date time')
    .then(data => {
      res.status(200).send({ pages: data.pages });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
  }
}


module.exports = {
  createPage,
  updatePage,
  deletePage,
  getAllPages,
  getConForPage,
  //getDT,
};