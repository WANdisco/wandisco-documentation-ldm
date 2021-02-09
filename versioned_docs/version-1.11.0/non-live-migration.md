---
id: non-live-migration
title: Create a static migration
sidebar_label: Create a static migration
---

Static migrations do not track activity in your data during a migration. If you create a static migration, LiveData Migrator will not scan your source storage for updates to the data as the migration progresses.

A static migration does not write a [marker file](./configuration-ldm.md/#hdfs-marker-storage) to the source storage. Once the scan of the source filesystem completes (to determine which files and directories are to be migrated), the migration will enter a `COMPLETED` [data migration state](./manage-migrations.md/#data-migration-states) and won't perform any further scans.

This means you can perform static migrations without write access, and without the need to operate the migration as the `hdfs` user.

## Create a static migration with the UI

To create a static migration with the CLI, deselect the **Live Migration** option when creating a migration. Unlike a live migration, static migrations won't display a **live** state in the UI. During a migration, the migration tells you that you must rerun it to see new changes.

## Create a static migration with the CLI

There are two ways to create a static migration through the CLI:

1. Start a migration with a [static source storage](./configure-storage.md#configure-static-storage).
1. Specify the `scanOnly` flag when you create the migration:

    ```text="Code"
      migration add --scanOnly ...
    ```
