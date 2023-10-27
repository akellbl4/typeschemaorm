import { getRepository } from "../db";
import { ButtonComponentSchema } from "../schemas/ButtonComponentSchema";
import { FindOptionsWhere } from "typeorm";

export async function saveButtonComponent(component: Record<string, unknown>) {
	const result = await getRepository(ButtonComponentSchema).save(component);
	return result;
}

export async function getButtonComponent(params: FindOptionsWhere<Record<string, unknown>>) {
	const result = await getRepository(ButtonComponentSchema).findOneByOrFail(params);
	return result;
}
