import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602957013562 implements MigrationInterface {
  //Método UP Realiza Alterações: Criar tabelas, criar um novo campo ou deletar algum campo.
  public async up(queryRunner: QueryRunner): Promise<void> {
    //Cria tabela no banco de dados
    await queryRunner.createTable(
      new Table({
        name: "orphanages",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "latitude",
            type: "decimal",
            scale: 10,
            precision: 2,
          },
          {
            name: "longitude",
            type: "decimal",
            scale: 10,
            precision: 2,
          },
          {
            name: "about",
            type: "text",
          },
          {
            name: "instructions",
            type: "text",
          },
          {
            name: "opening_hours",
            type: "varchar",
          },
          {
            name: "open_on_weekends",
            type: "boolean",
            default: false,
          },
        ],
      })
    );
  }

  //Método DOWN: Desfaz o que foi feito no Método UP
  public async down(queryRunner: QueryRunner): Promise<void> {
    //Deleta tabela no banco de dados
    await queryRunner.dropTable("orphanages");
  }
}
