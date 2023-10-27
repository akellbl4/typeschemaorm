import { BaseComponentSchema } from "./BaseComponentSchema";
import { createChildSchema } from "../lib/typeschemaorm";

export const ButtonComponentSchema = createChildSchema({
	name: "ButtonComponent",
	parent: BaseComponentSchema,
	columns: {
		text: {
			type: "varchar",
			nullable: false,
			default: "",
		},
	},
});
