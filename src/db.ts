import "reflect-metadata";
import { DataSource, EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { BaseComponentSchema } from "./schemas/BaseComponentSchema";
import { ButtonComponentSchema } from "./schemas/ButtonComponentSchema";
import { FieldDefinitionSchema } from "./schemas/FieldDefinitionSchema";
import { FieldValue } from "./entities/FieldValue";

export const dataSource = new DataSource({
	type: "postgres",
	ssl: true,
	url: "postgres://akellbl4:3XCra8uRfPpY@ep-fancy-sun-25215637.us-east-2.aws.neon.tech/neondb",
	entities: [BaseComponentSchema, ButtonComponentSchema, FieldDefinitionSchema, FieldValue],
	migrations: ["../migrations/*.ts"],
	synchronize: true,
});

export async function initDatabaseConnection() {
	await dataSource.initialize();
}

export function getRepository<Entity extends ObjectLiteral>(target: EntityTarget<Entity>): Repository<Entity> {
	return dataSource.getRepository(target);
}

export function getEntityManager() {
	return dataSource.createEntityManager();
}
