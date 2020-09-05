"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20200905234913 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20200905234913 extends migrations_1.Migration {
    up() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql('create table "item" ("id" serial primary key, "created_at" jsonb not null, "updated_at" timestamptz(0) not null, "title" varchar(255) not null, "description" text not null, "price" int4 not null);');
        });
    }
}
exports.Migration20200905234913 = Migration20200905234913;
//# sourceMappingURL=Migration20200905234913.js.map