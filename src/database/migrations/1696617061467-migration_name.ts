import { MigrationInterface, QueryRunner } from "typeorm";

export class migrationName1696617061467 implements MigrationInterface {
    name = 'migrationName1696617061467'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "human_resources" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "status" character varying NOT NULL DEFAULT 'ACTIVE', "name" character varying, "email" character varying, CONSTRAINT "UQ_cf92ab219f821f5b57800e30828" UNIQUE ("email"), CONSTRAINT "PK_42b0f8645160e15063c43070e95" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "personalized_emails" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "status" character varying NOT NULL DEFAULT 'ACTIVE', "subject" character varying NOT NULL, "body" character varying NOT NULL, "human_resource" uuid, CONSTRAINT "PK_ab7fb1f1791add308a6b049f232" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('USER', 'VET', 'ADMIN')`);
        await queryRunner.query(`CREATE TYPE "public"."users_sign_up_type_enum" AS ENUM('EMAIL', 'SOCIAL')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "status" character varying NOT NULL DEFAULT 'ACTIVE', "full_name" character varying(255), "avatar" character varying(255), "email" character varying(80) NOT NULL, "auth_token" character varying(80), "device_token" character varying(80), "mobile_number" character varying(20), "country_code" character varying(4), "password" character varying(255) NOT NULL, "is_mobile_verified" boolean NOT NULL DEFAULT false, "is_tnc_accepted" boolean NOT NULL DEFAULT false, "is_logged_in" boolean NOT NULL DEFAULT false, "role" "public"."users_role_enum" NOT NULL DEFAULT 'USER', "sign_up_type" "public"."users_sign_up_type_enum" NOT NULL DEFAULT 'EMAIL', "social_id" character varying(255), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "personalized_emails" ADD CONSTRAINT "FK_d5326ab9ec51334c64d6830b46c" FOREIGN KEY ("human_resource") REFERENCES "human_resources"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "personalized_emails" DROP CONSTRAINT "FK_d5326ab9ec51334c64d6830b46c"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_sign_up_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
        await queryRunner.query(`DROP TABLE "personalized_emails"`);
        await queryRunner.query(`DROP TABLE "human_resources"`);
    }

}
