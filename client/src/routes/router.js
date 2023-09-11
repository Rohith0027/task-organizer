const router = require('express').Router();
let Driver = require('../models/driver');

router.route('./getDrivers').get((req,res) => {
    Driver.find()
    .then(drivers => res.json(drivers))
    .catch(err => res.status(400).json('Error: '+ err))
})

router.route('/createDrivers').post((req,res) => {
    const name = req.body.name;
    const newDriver = new Driver({name});
  
    newDriver.save()
      .then(() => res.json('Driver added!'))
      .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').get((req,res)=> {
    Driver.findById(req.params.id)
    .then(drivers => res.json(drivers))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    Driver.findByIdAndDelete(req.params.id)
      .then(() => res.json('Driver deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Driver.findById(req.params.id)
      .then(driver => {
        driver.name = req.body.name;
  
        driver.save()
          .then(() => res.json('Driver updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;