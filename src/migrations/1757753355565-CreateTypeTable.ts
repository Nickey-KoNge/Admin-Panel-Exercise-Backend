import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTypeTable1757753355565 implements MigrationInterface {
  name = 'CreateTypeTable1757753355565';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "type" (
      "id" SERIAL NOT NULL, 
      "name" character varying(50) NOT NULL,
      "status" character varying(50) NOT NULL DEFAULT 'Active', 
      CONSTRAINT "PK_40410d6bf0bedb43f9cadae6fef" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "type"`);
  }
}
