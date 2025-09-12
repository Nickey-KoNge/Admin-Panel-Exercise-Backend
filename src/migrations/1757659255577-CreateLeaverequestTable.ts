import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateLeaverequestTable1757659255577
  implements MigrationInterface
{
  name = 'CreateLeaverequestTable1757659255577';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "leaverequest" (
      "id" SERIAL NOT NULL, 
      "mode" integer NOT NULL, 
      "type" integer NOT NULL, 
      "reason" character varying(255) NOT NULL, 
      "staff_id" integer NOT NULL,
       "noofday" integer NOT NULL, 
       "requestDate" TIMESTAMP, 
       "submittedon" TIMESTAMP, 
       "status" character varying(50) NOT NULL DEFAULT 'Pending', 
       CONSTRAINT "PK_be4d4e005cd1502bf3e8407850b" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "leaverequest"`);
  }
}
