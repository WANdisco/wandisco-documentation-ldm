---
id: non-live-migration
title: Create a Non-Live Migration
sidebar_label: Create a non-live migration
---

A non-live migration is a migration that does not track client activity: if files are changed during the migration process, they will not be re-scanned by LiveData Migrator.

:::note
A non-live migration does not track events from the source file system, and does not write a [marker file](./configuration-ldm.md/#hdfs-marker-storage) to the source file system. Once the scan of the source file system completes (to determine which files and directories are to be migrated), the migration will enter a `COMPLETED` [data migration state](./manage-migrations.md/#data-migration-states) and carry out no further scanning.

This means you can perform non-live migrations without write access, and without the need to operate the migration as the `hdfs` user.
:::

## Create a non-live migration

Non-live migrations may be created through the UI or through the CLI.

### Create a non-live migration with the UI

To create a non-live migration through the CLI, simply deselect the "Live Migration" option when creating a migration. Unlike a live migration, this migration will not state that it is live. When in progress, the migration will inform you that you must rerun the migration to see new changes.

### Create a non-live migration with the CLI

A non-live migration is a migration that does not track client activity: if files are changed during the migration process, they will not be re-scanned by LiveData Migrator. There are two ways to create a non-live migration through the CLI:

1. Start a migration with a [non-live source file system](#create-a-non-live-source)
1. Specify the `scanOnly` flag during migration creation:

```text="Code"
migration add --scanOnly ...
```

:::note
A non-live migration does not read events from the source file system, and does not write a [marker file](./configuration-ldm.md/#hdfs-marker-storage) to the source file system. Once the scan of the source file system completes (to determine which files and directories are to be migrated), the migration will enter a `COMPLETED` [data migration state](./manage-migrations.md/#data-migration-states) and carry out no further scanning.
:::

## Create a non-live source

A non-live source is a filesystem that is not tracked by LiveData Migrator for changes during a migration.

:::note
Any migration created from a non-live source via the CLI will become a non-live migration by default, whereas the UI will uncheck the "live migration" option by default and prevent it from being enabled.
:::

Non-live sources may be created through the UI or through the CLI.

### Create a non-live source with the UI

To create a non-live source, simply uncheck the "Migrate Live Events" box during source creation.

When creating a migration from a non-live source, "Live Migration" will be unchecked by default and cannot be enabled.

### Create a non-live source file system with the CLI

LiveData Migrator will only perform *read* tasks on a non-live source, and will not check the source for modifications to data during transfer. Any migration that uses a non-live source will automatically become a non-live migration, and will have the `scanOnly` flag applied.

To create a non-live source, add the `scanOnly` flag during source creation:

```text="Code"
filesystem add hdfs --source --scanOnly ...
```

:::note
The account used to connect to a non-live source only requires read access. Write access is not necessary.
:::
