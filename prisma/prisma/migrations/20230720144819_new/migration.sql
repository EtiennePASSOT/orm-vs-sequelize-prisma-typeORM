/*
  Warnings:

  - You are about to drop the `ExtendedProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExtendedProfile" DROP CONSTRAINT "ExtendedProfile_userId_fkey";

-- DropTable
DROP TABLE "ExtendedProfile";
