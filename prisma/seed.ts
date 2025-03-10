import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { max, min } from 'class-validator';

const prisma = new PrismaClient();


async function main() {
  console.log('Seeding database with fake music data...');

  for (let i = 0; i < 20; i++) {
    await prisma.koncert.create({
      data: {
        BandName: faker.music.artist(),
        StartTime: faker.date.future(),
        Length:faker.number.int({ min: 60, max: 150}),
        Postponed: faker.datatype.boolean()
      
      },
    });
  }




  console.log('Seeding completed! ✅');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
