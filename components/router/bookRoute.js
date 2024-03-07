const express = require('express');
const {add} = require('../controller/addBookController');
const {getBook , getAll} = require('../controller/getBookController');
const {update} = require('../controller/updateController');
const {deleteData} = require('../controller/deleteController');

const router = express.Router();

router.route("/Book/:id").get(getBook)

router.route("/").get(getAll)

router.route("/api").post(add)

router.route("/api/:id").put(update)

router.route("/api/:id").delete(deleteData)


module.exports = router;