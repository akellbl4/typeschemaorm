import { createBaseSchema } from "../lib/typeschemaorm";

export const BaseComponentSchema = createBaseSchema({
	name: "BaseComponent",
	tableName: "component",
	inheritanceColumn: "type",
	columns: {
		id: {
			type: Number,
			primary: true,
			generated: "increment",
		},
		type: {
			type: "varchar",
			nullable: false,
		},
		fieldDefinitionId: {
			type: Number,
			nullable: true,
		},
	},
	relations: {
		fieldDefinition: {
			type: "one-to-one",
			target: "FieldDefinition",
			joinColumn: { name: "fieldDefinitionId" },
			cascade: true,
		},
	},
});
