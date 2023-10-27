import express from "express";
import { initDatabaseConnection } from "./db";
import { saveButtonComponent } from "./models/ButtonComponent";

async function createApp() {
	const app = express();
	await initDatabaseConnection();

	app.get("/components", async (_, res) => {
		const c = await saveButtonComponent({
			text: "Hello World",
			fieldDefinition: {
				name: "buttonField",
			},
		});

		res.json(c);
	});

	return app;
}

createApp()
	.then((app) => {
		const port = 3000;
		app.listen(port, () => {
			console.log(`Example app listening at http://localhost:${port}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
