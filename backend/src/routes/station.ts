// src/routes/station.ts
import { Router, Request, Response } from "express";
import request from "request";

const router = Router();

router.get("/:evaNo", (req: Request, res: Response) => {
	const evaNumber = req.params.evaNumber;
	const url = `https://apis.deutschebahn.com/db-api-marketplace/apis/timetables/v1/fchg/${evaNumber}`;

	const options = {
		method: "GET",
		url: url,
		headers: {
			"DB-Client-Id": process.env.DB_CLIENT_ID as string,
			"DB-Api-Key": process.env.DB_API_KEY as string,
			accept: "application/xml",
		},
	};

	request(options, (error, response, body) => {
		if (error) {
			console.error("Error fetching station data:", error);
			return res.status(500).send("Error fetching station data");
		}
		res.set("Content-Type", "application/xml");
		return res.status(response.statusCode).send(body);
	});
});

export default router;
