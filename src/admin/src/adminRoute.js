const router = require("express").Router();

const { catchErrors } = require("../handlers/errorHandler");
const adminController = require("./adminCtrl");

//net to check authorization

router.post("/getAdminByEmail", catchErrors(adminController.getAdminByEmail));
router.post("/getAdminByID", catchErrors(adminController.getAdminByID));
router.get("/getAllAdmins", catchErrors(adminController.getAllAdmins));
router.post("/saveAdmin", catchErrors(adminController.saveAdmin));
router.put("/updateAdmin", catchErrors(adminController.updateAdmin));
router.delete("/deleteAdmin", catchErrors(adminController.deleteAdmin));

module.exports = router;