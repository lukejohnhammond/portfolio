const Work = require('../models/work');

function worksIndex(req, res) {
  Work.find((err, works) => {
    if (err) return res.status(500).json({ sucess: false, message: err});
    if (!works) return res.status(500).json({ success: false, message: 'No works found' });

    return res.status(200).json(works);
  });
}

function worksCreate(req, res) {
  console.log(req.body);
  Work.create(req.body.work, (err, work) => {
    if (err) return res.status(500).json({ success: false, message: err });
    if (!work) return res.status(500).json({ sucess: false, message: 'Please send the correct information to create a work entry'});

    return res.status(201).json(work);
  });
}

function worksShow(req, res) {
  Work.findById(req.params.id, (err, work) => {
    if(err) res.status(500).json({ error: err });
    res.json(work);
  });
}

function worksUpdate(req, res) {
  Work.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, work) => {
    if(err) res.status(500).json({ error: err});
    res.json(work);
  });
}

function worksDelete(req, res) {
  Work.findByIdAndRemove(req.params.id, (err) => {
    if(err) res.status(500).json({ error: err});
    res.send(204);
  });
}

module.exports = {
  index: worksIndex,
  create: worksCreate,
  show: worksShow,
  update: worksUpdate,
  delete: worksDelete
};
