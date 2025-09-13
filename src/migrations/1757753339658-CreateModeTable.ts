import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateModeTable1757753339658 implements MigrationInterface {
  name = 'CreateModeTable1757753339658';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "mode"
       ("id" SERIAL NOT NULL, 
       "name" character varying(50) NOT NULL,
        "status" character varying(50) NOT NULL DEFAULT 'Active', 
        CONSTRAINT "PK_ca852cfca8f2fe91ee9daa47ec6" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "mode"`);
  }
}
