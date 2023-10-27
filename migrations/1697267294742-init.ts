import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1697267294742 implements MigrationInterface {
    name = 'Init1697267294742'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "component" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "hidden" boolean NOT NULL DEFAULT false, "label" character varying DEFAULT '', "value" character varying DEFAULT '', CONSTRAINT "PK_c084eba2d3b157314de79135f09" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9fe1f6a769df8035b25b0d8070" ON "component" ("type") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_9fe1f6a769df8035b25b0d8070"`);
        await queryRunner.query(`DROP TABLE "component"`);
    }

}
