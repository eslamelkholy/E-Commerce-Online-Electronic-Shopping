import { Migration } from '@mikro-orm/migrations';

export class Migration20200906001232 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "item" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" varchar(255) not null, "description" text not null, "price" int4 not null);');
  }

}
