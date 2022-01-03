const express = require("express");
const router = express.Router();
const {
   create_customer,
   get_customers,
   create_sale,
   get_client_by_id,
} = require("../controllers/client-controller");

const { get_users } = require("../controllers/user-controller");

router.post("/add/:userid", create_customer);

router.get("/customers", get_customers);

router.post("/new/:userid", create_sale);

router.get("/client/:id", get_client_by_id);

router.get("/all", get_users);

module.exports = router;
