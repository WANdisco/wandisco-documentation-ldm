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

### Create a non-live migration

A non-live migration is a migration that does not track client activity: if files are changed during the migration process, they will not be re-scanned by LiveData Migrator. There are two ways to create a non-live migration through the CLI:

1. Start a migration with a [non-live source file system](#create-a-non-live-source-file-system)
1. Specify the [`scanOnly` flag](#specify-the-scanonly-flag-during-migration-creation) during migration creation

:::note
A non-live migration does not read events from the source file system, and does not write a [marker file](./configuration-ldm.md/#hdfs-marker-storage) to the source file system. Once the scan of the source file system completes (to determine which files and directories are to be migrated), the migration will enter a `COMPLETED` [data migration state](./manage-migrations.md/#data-migration-states) and carry out no further scanning.
:::

#### Create a non-live source file system

LiveData Migrator will only perform *read* tasks on a non-live source, and will not check the source for modifications to data during transfer. Any migration that uses a non-live source will automatically become a non-live migration, and will have the `scanOnly` flag applied.

To create a non-live source, add the `scanOnly` flag during source creation:

```text="Code"
filesystem add hdfs --source --scanOnly ...
```

:::note
The account used to connect to a non-live source only requires read access. Write access is not necessary.
:::

#### Specify the scanOnly flag during migration creation

To create a non-live migration without creating a non-live source file system, simply add the `scanOnly` flag during migration creation:

```text="Code"
migration add --scanOnly ...
```
