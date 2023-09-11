import { MigrationInterface, QueryRunner } from "typeorm";

export class PostChangeTitle1689838473827 implements MigrationInterface {
    name = 'PostChangeTitle1689838473827'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "title" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "name" TO "title"`);
    }

}
