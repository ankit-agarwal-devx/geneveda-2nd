/*
  Warnings:

  - You are about to drop the `Enquiry` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Enquiry";

-- CreateTable
CREATE TABLE "enquiry" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255),
    "contact_number" VARCHAR(255),
    "service" VARCHAR(255),
    "message" TEXT,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL,

    CONSTRAINT "enquiry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "enquiry_name_key" ON "enquiry"("name");

-- CreateIndex
CREATE UNIQUE INDEX "enquiry_email_key" ON "enquiry"("email");

-- CreateIndex
CREATE UNIQUE INDEX "enquiry_contact_number_key" ON "enquiry"("contact_number");

-- CreateIndex
CREATE UNIQUE INDEX "enquiry_service_key" ON "enquiry"("service");
