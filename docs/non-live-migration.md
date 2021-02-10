---
id: non-live-migration
title: Create a One-time migration
sidebar_label: Create a One-time migration
---

One-time migrations do not track activity in your data during a migration. If you create a one-time migration, LiveData Migrator will not scan your source storage for updates to the data as the migration progresses.

A one-time migration does not write a [marker file](./configuration-ldm.md/#hdfs-marker-storage) to the source storage. Once the scan of the source filesystem completes (to determine which files and directories are to be migrated), the migration will enter a `COMPLETED` [data migration state](./manage-migrations.md/#data-migration-states) and won't perform any further scans.

This means you can perform one-time migrations without write access, and without the need to operate the migration as the `hdfs` user.

## Create a one-time migration with the UI

To create a one-time migration with the CLI, deselect the **Live Migration** option when creating a migration. Unlike a live migration, one-time migrations won't display a **live** state in the UI. During a migration, the migration tells you that you must rerun it to see new changes.

## Create a one-time migration with the CLI

There are two ways to create a one-time migration through the CLI:

1. Start a migration with a [source storage configured for one-time migrations](./configure-storage.md#configure-static-storage).
1. Specify the `scanOnly` flag when you create the migration:

    ```text="Code"
      migration add --scanOnly ...
    ```
