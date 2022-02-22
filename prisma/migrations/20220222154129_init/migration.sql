-- CreateTable
CREATE TABLE "gym" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "yogaClassess" BOOLEAN NOT NULL,
    "owner" TEXT NOT NULL,

    CONSTRAINT "gym_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "gym_name_key" ON "gym"("name");
