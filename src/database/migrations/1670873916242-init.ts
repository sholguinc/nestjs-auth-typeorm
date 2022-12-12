import { MigrationInterface, QueryRunner } from "typeorm";

export class init1670873916242 implements MigrationInterface {
    name = 'init1670873916242'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "brand" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "image" character varying NOT NULL,
                CONSTRAINT "PK_a5d20765ddd942eb5de4eee2d7f" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "category" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "customer" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "lastName" character varying NOT NULL,
                "phone" character varying NOT NULL,
                CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL NOT NULL,
                "email" character varying NOT NULL,
                "password" character varying NOT NULL,
                "role" character varying NOT NULL,
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "user"
        `);
        await queryRunner.query(`
            DROP TABLE "customer"
        `);
        await queryRunner.query(`
            DROP TABLE "category"
        `);
        await queryRunner.query(`
            DROP TABLE "brand"
        `);
    }

}
