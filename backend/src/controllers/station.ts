import { Request, Response } from "express";
import request from "request";

export const getStationData = (req: Request, res: Response) => {
	const evaNo = req.params.evaNo;
	const url = `https://apis.deutschebahn.com/db-api-marketplace/apis/timetables/v1/fchg/${evaNo}`;

	const options = {
		method: "GET",
		url: url,
		headers: {
			"DB-Client-Id": process.env.DB_CLIENT_ID,
			"DB-Api-Key": process.env.DB_API_KEY,
			accept: "application/xml",
		},
	};

	request(options, (error, response, body) => {
		if (error) {
			return res.status(500).send("Error fetching station data");
		}
		res.set("Content-Type", "application/xml");
		return res.status(response.statusCode).send(body);
	});
};
