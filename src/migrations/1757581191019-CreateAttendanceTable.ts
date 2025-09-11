import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAttendanceTable1757581191019 implements MigrationInterface {
  name = 'CreateAttendanceTable1757581191019';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "attendance" (
      "id" SERIAL NOT NULL, 
      "location" character varying(255) NOT NULL, 
      "staff_id" integer NOT NULL, 
      "check_in_time" TIMESTAMP, 
      "check_out_time" TIMESTAMP, 
      "status" character varying(50) NOT NULL DEFAULT 'pending', 
      CONSTRAINT "PK_ee0ffe42c1f1a01e72b725c0cb2" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "attendance"`);
  }
}
