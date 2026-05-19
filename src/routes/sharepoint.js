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

/* GET ALL EMPLOYEES */
router.get("/employees", async (req, res) => {

    try {

        const response = await graphClient
            .api(
                `/sites/${process.env.SHAREPOINT_SITE_ID}/lists/${process.env.EMPLOYEE_LIST_ID}/items?$expand=fields`
            )
            .get();

        const employees = response.value.map(item => ({

            id: item.id,

            employeeId:
                item.fields.EmployeeID || "",

            employeeName:
                item.fields.EmployeeName ||
                item.fields.Title ||
                "",

            email:
                item.fields.Email || "",

            firstName:
                item.fields.FirstName || "",

            middleName:
                item.fields.MiddleName || "",

            lastName:
                item.fields.LastName || "",

            team:
                item.fields.Team || "",

            position:
                item.fields.Position || "",

            client:
                item.fields.Client || "",

            workStatus:
                item.fields.WorkStatus || "",

            workSetup:
                item.fields.WorkSetup || "",

            probationaryStartDate:
                item.fields.ProbationaryStartDate || "",

            probationaryEndDate:
                item.fields.ProbationaryEndDate || "",

            contactNum:
                item.fields.ContactNum || "",

            emergencyContactNum:
                item.fields.EmergencyContactNum || "",

            emergencyContactPerson:
                item.fields.EmergencyContactPerson || "",

            permanentAddress:
                item.fields.PermanentAddress || "",

            currentAddress:
                item.fields.CurrentAddress || "",

            birthdate:
                item.fields.Birthdate || "",

            civilStatus:
                item.fields.CivilStatus || "",

            gender:
                item.fields.Gender || "",

            philhealthNum:
                item.fields.PhilhealthNum || "",

            pagibigNum:
                item.fields.PagibigNum || "",

            sssNum:
                item.fields.SSSNum || "",

            tinNum:
                item.fields.TINNum || ""

        }));

        res.json(employees);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
            error: error
        });

    }

});

/* GET EMPLOYEE PHOTO */
router.get("/employees/:email/photo", async (req, res) => {

    try {

        const email = req.params.email;

        const photo = await graphClient
            .api(`/users/${email}/photo/$value`)
            .getStream();

        res.setHeader(
            "Content-Type",
            "image/jpeg"
        );

        photo.pipe(res);

    } catch(error){

        console.error(error);

        res.status(404).send("No photo");

    }

});

module.exports = router;