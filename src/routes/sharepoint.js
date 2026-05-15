const express = require("express");

const router = express.Router();

const graphClient = require("../services/graphService");

/* TEST ROUTE */
router.get("/test", async (req, res) => {

    res.json({
        success: true,
        message: "HR SharePoint API route working",
    });

});

/* GET EMPLOYEES */
router.get("/employees", async (req, res) => {

    try {

        const response = await graphClient
            .api(`/sites/${process.env.SHAREPOINT_SITE_ID}/lists/${process.env.EMPLOYEE_LIST_ID}/items?expand=fields`)
            .get();

        const employees = response.value.map(item => ({

            id: item.id,

            employeeId: item.fields.EmployeeID || "",

            firstName: item.fields.FirstName || "",

            middleName: item.fields.MiddleName || "",

            lastName: item.fields.LastName || "",

            team: item.fields.Team || "",

            position: item.fields.Position || "",

            workStatus: item.fields.WorkStatus || ""

        }));

        res.json(employees);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch employees"
        });

    }

});

module.exports = router;