---
id: migrate-metadata
title: Create a metadata migration (preview)
sidebar_label: Create a metadata migration
---

 Migrations will transfer existing metadata, as well as any subsequent changes made to the source metadata (in its scope), while HiveMigrator keeps working.

## Create a metadata migration with the UI

:::important
Ensure that you have [migrated](#migrate-data) the HCFS data for the databases and tables that you want to migrate.

Both HCFS data and associated metadata are needed before successful queries can be run on migrated databases.
:::

1. On the dashboard, select to add a Hive migration.

2. Provide a name for this migration.

3. Choose a [source](./connect-metastores.md#add-source-agent) and [target](./connect-metastores.md#add-target-agents) agent.

4. Create a database pattern and a table pattern using [regex](https://regex101.com/) that will match the databases and tables you want to migrate.

   For example, using `test*` for the database pattern will match any database with "test" at the beginning of its name, such as `test01`, `test02`, `test03`.

## Create a metadata migration with the CLI

Migrate metadata from your source metastore to a target metastore using the `hive migration` command.

Define the source and target using the [hive agent names](./connect-metastores.md#add-hive-agents), and apply the [hive rule names](./define-metadata-rules.md#add-hive-rules) to the migration.

Follow the command links to learn how to set the parameters and see examples.

1. Create a new hive migration:

   [`hive migration add`](./command-reference.md#hive-migration-add)

   Apply the [`--auto-start`](./command-reference.md#optional-parameters-10) parameter if you would like the migration to start right away.

1. If you don't have auto-start enabled, manually start the migration:

   [`hive migration start`](./command-reference.md#hive-migration-start)
