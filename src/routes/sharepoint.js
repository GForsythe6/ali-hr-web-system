const express = require("express");

const router = express.Router();

const graphClient =
    require("../services/graphService");

/* TEST ROUTE */
router.get("/test", async (req, res) => {

    res.json({

        success: true,
        message:
            "HR SharePoint API route working"

    });

});

/* GET ALL EMPLOYEES */
router.get("/employees", async (req, res) => {

    try {

        const response =
            await graphClient
                .api(
                    `/sites/${process.env.SHAREPOINT_SITE_ID}/lists/${process.env.EMPLOYEE_LIST_ID}/items?$expand=fields`
                )
                .get();

        const employees =
            response.value.map(item => ({

                id:
                    item.id || "",

                employeeId:
                    item.fields.EmployeeID || "",

                employeeName:
                    item.fields.Title || "",

                firstName:
                    item.fields.FirstName || "",

                lastName:
                    item.fields.LastName || "",

                team:
                    item.fields.Team || "",

                position:
                    item.fields.Position || "",

                workStatus:
                    item.fields.WorkStatus || "",

                email:
                    item.fields.Email || ""

            }));

        res.json(employees);

    } catch(error){

        console.log(
            JSON.stringify(
                error,
                null,
                2
            )
        );

        res.status(500).json({

            success: false,
            message:
                error.message

        });

    }

});

/* GET EMPLOYEE PHOTO */
router.get(
    "/employees/:email/photo",
    async (req, res) => {

        try {

            const email =
                req.params.email;

            const photo =
                await graphClient
                    .api(
                        `/users/${email}/photo/$value`
                    )
                    .responseType(
                        "arraybuffer"
                    )
                    .get();

            res.writeHead(
                200,
                {

                    "Content-Type":
                        "image/jpeg",

                    "Content-Length":
                        photo.length

                }
            );

            res.end(
                Buffer.from(photo),
                "binary"
            );

        } catch(error){

            console.log(error);

            res.status(404).send(
                "No photo found"
            );

        }

    }
);

/* ADD EMPLOYEE */
router.post("/employees", async (req, res) => {

    try {

        console.log(
            "REQ BODY:",
            req.body
        );

        const {

            firstName,
            lastName

        } = req.body;

        const response =
            await graphClient
                .api(
                    `/sites/${process.env.SHAREPOINT_SITE_ID}/lists/${process.env.EMPLOYEE_LIST_ID}/items`
                )
                .post({

                    fields: {

                        Title:
                            `${firstName} ${lastName}`,

                        FirstName:
                            firstName || "",

                        LastName:
                            lastName || ""

                    }

                });

        res.json({

            success: true,
            data: response

        });

    } catch(error){

        console.log(
            JSON.stringify(
                error,
                null,
                2
            )
        );

        res.status(500).json({

            success: false,
            message:
                error.message,

            fullError:
                error

        });

    }

});

module.exports = router;