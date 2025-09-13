import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1757748077683 implements MigrationInterface {
  name = 'CreateUserTable1757748077683';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" 
      ("id" SERIAL NOT NULL, 
      "name" character varying(50) NOT NULL,
       "email" character varying(100) NOT NULL, 
       "role_id" integer NOT NULL, 
       "password" character varying(255) NOT NULL, 
       "status" character varying(50) NOT NULL DEFAULT 'Active', 
       CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
