import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRoleTable1757689876462 implements MigrationInterface {
  name = 'CreateRoleTable1757689876462';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "role" 
            ("id" SERIAL NOT NULL,
             "name" character varying(50) NOT NULL, 
             "status" character varying(50) NOT NULL DEFAULT 'Active', 
             CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "role"`);
  }
}
