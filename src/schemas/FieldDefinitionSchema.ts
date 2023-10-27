import { creatSchema } from "../lib/typeschemaorm";

export const FieldDefinitionSchema = creatSchema({
	name: "FieldDefinition",
	columns: {
		id: {
			type: Number,
			primary: true,
			generated: "increment",
		},
		componentId: {
			type: Number,
			nullable: true,
		},
		name: {
			type: "varchar",
			nullable: false,
		},
	},
	relations: {
		component: {
			type: "one-to-one",
			target: "BaseComponent",
			joinColumn: { name: "componentId" },
		},
		fieldValues: {
			type: "one-to-many",
			target: "FieldValue",
			joinColumn: { name: "fieldValues" },
		},
	},
});
