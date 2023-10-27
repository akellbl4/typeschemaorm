import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { FieldDefinitionSchema } from "../schemas/FieldDefinitionSchema";

@Entity("field_value")
export class FieldValue {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ type: 'varchar'})
	firstName!: number;

	@Column()
	lastName!: string;

	@Column()
	age!: number;

	@ManyToOne("FieldDefinition")
	fieldDefinition!: any;
}
