---
id: manage-metadata-migrations
title: Manage metadata migrations (preview)
sidebar_label: Manage metadata migrations
---

Manage your metadata migrations with LiveData Migrator using either the [UI](#manage-metadata-migrations-with-the-ui) or [CLI](#manage-metadata-migrations-with-the-cli).

## Manage metadata migrations with the UI

The dashboard displays an overview of Hive migrations and their status, showing what pre-existing metadata has been moved and added since the migration started.

Click **View migration** to see more detail.

### Stop a Hive migration

When you start a Hive migration, the **Start** button will be replaced with a **Stop** button. Click it to stop the migration and suspend all current file transfer.

### Resume a Hive migration

When you stop a migration, the **Stop** button will be replaced with a **Resume** button. Click it to resume the migration, which will continue from where it left off.

### Delete a Hive migration

:::note
Hive migrations must be [stopped](#stop-a-hive-migration) before they can be deleted.
:::

When viewing a Hive migration, click on the **Details** panel. Select the option to **Delete** the Hive migration.

## Manage metadata migrations with the CLI

| Command | Action |
|:---|:---|
| [`hive migration delete`](./command-reference.md#hive-migration-delete) | Delete a hive migration |
| [`hive migration list`](./command-reference.md#hive-migration-list) | List all hive migrations |
| [`hive migration pause`](./command-reference.md#hive-migration-pause) | Pause a hive migration or a list of hive migrations |
| [`hive migration pause --all`](./command-reference.md#hive-migration-pause---all) | Pause all hive migrations |
| [`hive migration resume`](./command-reference.md#hive-migration-resume) | Resume a hive migration or a list of hive migrations |
| [`hive migration resume --all`](./command-reference.md#hive-migration-resume---all) | Resume all hive migrations |
| [`hive migration show`](./command-reference.md#hive-migration-show) | Display information about a hive migration |
| [`hive migration start`](./command-reference.md#hive-migration-start) | Start a hive migration or a list of hive migrations |
| [`hive migration start --all`](./command-reference.md#hive-migration-start---all) | Start all hive migrations |
| [`hive migration status`](./command-reference.md#hive-migration-status) | Show the status of a hive migration or a list of hive migrations |
| [`hive migration status --all`](./command-reference.md#hive-migration-status---all) | Show the status of all hive migrations |
| [`hive migration stop`](./command-reference.md#hive-migration-stop) | Stop a hive migration or a list of hive migrations |
| [`hive migration stop --all`](./command-reference.md#hive-migration-stop---all) | Stop all hive migrations |
