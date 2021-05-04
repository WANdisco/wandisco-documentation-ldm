---
id: create-migration
title: Create a migration
sidebar_label: Create a migration
---

Create new migrations with LiveData Migrator using either the [UI](#create-a-new-migration-with-the-ui) or [CLI](#create-a-new-migration-with-the-cli).

Migrations transfer existing data from the defined source to a target. LiveData Migrator migrates any changes made to the source data while it is being migrated and ensures that the target is up to date with those changes. It does this while continuing to perform the migration.

You will typically create multiple migrations so that you can select specific content from your source storage by Path. You can also migrate to multiple independent storages at the same time by defining multiple migration resources.

## Create a new migration with the UI

1. Choose a source and target from one of your [storages](./configure-storage.md).
1. Choose the Path to set the scope of the migration.

    :::note
    ADLS Gen2 has a filesystem restriction of 60 segments. If you are migrating to an ADLS Gen2 storage, your path must have less than 60 segments.
    :::

1. Enable the **Auto-start migration** option if you want to start the migration right away. (You can start it manually when [viewing it later](./manage-migrations.md#manage-migrations-with-the-ui) if you prefer.)
1. [Apply any exclusions](#assign-exclusions-to-a-new-migration) to reduce the scope within this Path.
1. Select the **Overwrite** or **Skip if Size Match** setting for the migration.  
   * **Skip if Size Match** - If the file size is identical between the source and target, the file is skipped. If it’s a different size, the whole file is replaced.
   * **Overwrite** - Everything is replaced, even if the file size is identical.

If you've already migrated some data from the same source to the same target, you can choose whether to overwrite all the content (Overwrite) or only migrate new content that isn't already there (Skip if Size Match).

### Assign exclusions to a new migration

Assign exclusions to your migration to exclude specific file sizes or file names from the migration. If you want to exclude file sizes or names from your migration but haven't defined any exclusion templates yet, see the [define exclusions](./configure-exclusions.md) topic to learn how.

1. In the new migration page, click **Add new exclusion**
1. Select the appropriate exclusion template from the drop-down list.

The exclusion appears in the list, and can be removed before the migration is started.

## Create a new migration with the CLI

Migrate data from your source file system to a target defined using the `migration` command. Migrations will transfer existing data, as well as any subsequent changes made to the source data (in its scope), while LiveData Migrator remains in operation.

You will typically create multiple migrations so that you can select specific content from your source file system by path/directory. It is also possible to migrate to multiple independent file systems at the same time by defining multiple migration resources.

Follow the command links to learn how to set the parameters and see examples.

1. Create a new migration:

   [`migration add`](./command-reference.md#migration-add)

   Apply the [`--auto-start`](./command-reference.md#optional-parameters-5) parameter if you would like the migration to start right away.

1. Assign exclusions to the migration:

    [`migration exclusion add`](./command-reference.md#migration-exclusion-add)

1. If you don't have auto-start enabled, manually start the migration:

   [`migration run`](./command-reference.md#migration-run)


## Create a one-time migration

[Create a one-time migration](./one-time-migration.md) if you do not want LiveData Migrator to scan for changes to your data during a migration. These migrations do not require you to have write access to the source filesystem, or operate the migration as the `hdfs` user.
