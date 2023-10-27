import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1697270458058 implements MigrationInterface {
    name = 'Init1697270458058'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "FieldDefinition" ("id" SERIAL NOT NULL, "componentId" integer, CONSTRAINT "REL_f2fcda8997a366b12091d1f02b" UNIQUE ("componentId"), CONSTRAINT "PK_0a1871f56734d3e083c777abd82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "component" ADD "fieldDefinitionId" integer`);
        await queryRunner.query(`ALTER TABLE "component" ADD CONSTRAINT "UQ_85b27734a199f91e2360727a0c6" UNIQUE ("fieldDefinitionId")`);
        await queryRunner.query(`ALTER TABLE "ButtonComponent" ADD "fieldDefinitionId" integer`);
        await queryRunner.query(`ALTER TABLE "component" ADD CONSTRAINT "FK_85b27734a199f91e2360727a0c6" FOREIGN KEY ("fieldDefinitionId") REFERENCES "FieldDefinition"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "FieldDefinition" ADD CONSTRAINT "FK_f2fcda8997a366b12091d1f02bc" FOREIGN KEY ("componentId") REFERENCES "component"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "FieldDefinition" DROP CONSTRAINT "FK_f2fcda8997a366b12091d1f02bc"`);
        await queryRunner.query(`ALTER TABLE "component" DROP CONSTRAINT "FK_85b27734a199f91e2360727a0c6"`);
        await queryRunner.query(`ALTER TABLE "ButtonComponent" DROP COLUMN "fieldDefinitionId"`);
        await queryRunner.query(`ALTER TABLE "component" DROP CONSTRAINT "UQ_85b27734a199f91e2360727a0c6"`);
        await queryRunner.query(`ALTER TABLE "component" DROP COLUMN "fieldDefinitionId"`);
        await queryRunner.query(`DROP TABLE "FieldDefinition"`);
    }

}
