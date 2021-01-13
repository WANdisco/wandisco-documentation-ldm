---
id: migrate-metadata
title: Create a metadata migration (preview)
sidebar_label: Create a metadata migration
---

Migrate metadata from your source metastore to a target metastore using the `hive migration` command. Migrations will transfer existing metadata, as well as any subsequent changes made to the source metadata (in its scope), while HiveMigrator keeps working.

## Create a metadata migration

Define the source and target using the [hive agent names](./connect-metastores.md#add-hive-agents), and apply the [hive rule names](./define-metadata-rules.md#add-hive-rules) to the migration.

Follow the command links to learn how to set the parameters and see examples.

1. Create a new hive migration:

   [`hive migration add`](./command-reference.md#hive-migration-add)

   Apply the [`--auto-start`](./command-reference.md#optional-parameters-10) parameter if you would like the migration to start right away.

1. If you don't have auto-start enabled, manually start the migration:

   [`hive migration start`](./command-reference.md#hive-migration-start)
