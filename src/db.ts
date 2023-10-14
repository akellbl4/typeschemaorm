import { DataSource } from 'typeorm';

export async function createDataSource() {
  await new DataSource({
    type: 'postgres',
    url: 'postgres://akellbl4:3XCra8uRfPpY@ep-fancy-sun-25215637.us-east-2.aws.neon.tech/neondb',
  }).initialize();
}
