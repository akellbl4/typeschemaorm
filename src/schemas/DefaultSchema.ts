import { BaseSchema } from "../lib/typeschemaorm";

export const DefaultSchema = {
	columns: {
		tenantId: {
			type: "varchar",
			nullable: false,
		},
		createdAt: {
			type: "timestamp with time zone",
			createDate: true,
		},
		updatedAt: {
			type: "timestamp with time zone",
			updateDate: true,
		},
	},
	indices: [{ name: "updatedAt", columns: ["updatedAt"] }],
} satisfies BaseSchema;
