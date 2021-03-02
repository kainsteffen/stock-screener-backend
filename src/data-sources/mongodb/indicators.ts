import { MongoDataSource } from "apollo-datasource-mongodb";

export class Indicators extends MongoDataSource<any, any> {
  getIndicators(query) {
    return this.collection.find(query);
  }
}
