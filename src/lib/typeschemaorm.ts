import {
  EntitySchemaColumnOptions,
  EntitySchemaIndexOptions,
  EntitySchema,
  EntitySchemaRelationOptions,
} from "typeorm";

export type BaseSchema = {
  columns: Record<string, EntitySchemaColumnOptions>;
  indices: EntitySchemaIndexOptions[];
};

export function createBaseSchema({
  name,
  tableName = name,
  columns,
  inheritanceColumn,
  relations,
}: {
  name: string;
  tableName?: string;
  columns: Record<string, EntitySchemaColumnOptions>;
  relations: Record<string, EntitySchemaRelationOptions>;
  inheritanceColumn: string;
}) {
  return new EntitySchema({
    target: Object.defineProperty(function () {}, "name", {
      value: name,
      writable: false,
    }),
    tableName,
    name,
    columns,
    relations,
    inheritance: {
      pattern: "STI",
      column: inheritanceColumn,
    },
  });
}

export function creatSchema({
  name,
  tableName = name,
  columns,
  relations,
}: {
  name: string;
  tableName?: string;
  columns: Record<string, EntitySchemaColumnOptions>;
  relations: Record<string, EntitySchemaRelationOptions>;
}) {
  return new EntitySchema({
    target: Object.defineProperty(function () {}, "name", {
      value: name,
      writable: false,
    }),
    tableName,
    name,
    columns,
    relations,
  });
}

export function createChildSchema({
  name,
  tableName = name,
  columns,
  parent,
}: {
  name: string;
  tableName?: string;
  columns: Record<string, EntitySchemaColumnOptions>;
  parent: EntitySchema;
}) {
  return new EntitySchema({
    target: Object.defineProperty(function () {}, "name", {
      value: name,
      writable: false,
    }),
    tableName,
    name,
    columns: {
      ...parent.options.columns,
      ...columns,
    },
    relations: {
      ...parent.options.relations,
    },
    inheritance: {
      pattern: "STI",
      column: "type",
    },
  });
}
