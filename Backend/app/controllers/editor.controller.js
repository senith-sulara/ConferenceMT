const Page = require("../models/editor.model");

exports.insert = (req, res, next) => {
  console.log("Test");
  let images = [];
  for (var i = 0; i < req.files.length; i++) {
    images.push(req.files[i].path);
  }
  let c = JSON.parse(req.body.category);
  let page = Page({
    name: req.body.name,
    title: req.body.title,
    description: req.body.description,
    images: images,
    date: req.body.date,
    time: req.body.time,
  });

  console.log(page);

  page.save((err, result) => {
    if (err) {
      return next(err);
    }

    data = {
      status: "success",
      code: 200,
      data: result,
      message: "Conference details saved Successfully",
    };

    res.json(data);
  });
};

exports.update = (req, res, next) => {
  const id = req.params.id;
  Page.findOne({ _id: id }, (err, found_page) => {
    if (err) {
      return next(err);
    }

    //if page not found
    if (!found_page) {
      res.status(404).send();
    } else {
      //if name changed
      if (req.body.name) {
        found_page.name = req.body.name;
      }

      //if title changed
      if (req.body.title) {
        found_page.price = req.body.title;
      }

      //if description changed
      if (req.body.description) {
        found_page.description = req.body.description;
      }

      //if date changed
      if (req.body.date) {
        found_page.date = req.body.date;
      }

      //if time changed
      if (req.body.time) {
        found_page.time = req.body.time;
      }



      let images = JSON.parse(req.body.prev_images);
      console.log(req.files);
      console.log(images);
      for (var i = 0; i < req.files.length; i++) {
        images.push(req.files[i].path);
      }

      found_title.images = images;

      found_title.save((err, updated_page) => {
        if (err) {
          return next(err);
        }

        data = {
          status: "success",
          code: 200,
          data: updated_page,
          message: "Successfully Updated",
        };
        res.json(data);
      });
    }
  });
};

exports.getAll = (req, res, next) => {
  page.find({}, (err, result) => {
    if (err) {
      return next(err);
    }

    data = {
      status: "success",
      code: 200,
      data: result,
    };

    res.json(data);
  });
};

// exports.searchPages = (req, res, next) => {
//   let search = req.params.search;
//   let query = { name: new RegExp(search, "i") };
//   console.log(query);
//   page.find(query, (err, result) => {
//     if (err) {
//       return next(err);
//     }

//     data = {
//       status: "success",
//       code: 200,
//       data: result,
//     };
//     res.json(data);
//   });
// };

// exports.getByTitle = (req, res, next) => {
//   let query = { title: req.params.title };

//   Product.find(query, (err, result) => {
//     if (err) {
//       return next(err);
//     }

//     data = {
//       status: "success",
//       code: 200,
//       data: result,
//     };

//     res.json(data);
//   });
// };


exports.getPageById = (req, res, next) => {
  page.findOne({ _id: req.params.id }, (err, result) => {
    if (err) {
      data = {
        status: "failed",
        code: 404,
        data: null,
      };
    } else {
      data = {
        status: "success",
        code: 200,
        data: result,
      };
    }
    res.json(data);
  });
};

exports.delete = (req, res, next) => {
  const id = req.params.id;
  page.findOne({ _id: id }, (err, found_page) => {
    if (err) {
      return next(err);
    }

    //if page not found
    if (!found_page) {
      res.status(404).send();
    } else {
        found_page.remove((err, result) => {
        if (err) {
          return next(err);
        }

        data = {
          status: "success",
          code: 200,
          data: result,
          message: "Successfully Removed",
        };
        res.json(data);
      });
    }
  });
};

exports.getAllLessDetails = (req, res, next) => {
  Page.find(
    {},
    {
      _id: 1,
      name: 1,
      title: 1,
      images: { $slice: -1 },
    },
    (err, result) => {
      if (err) {
        return next(err);
      }

      data = {
        status: "success",
        code: 200,
        data: result,
      };

      res.json(data);
    }
  );
};
