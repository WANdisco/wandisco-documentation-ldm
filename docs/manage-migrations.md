---
id: manage-migrations
title: Manage migrations
sidebar_label: Manage migrations
---

Manage your migrations with LiveData Migrator using either the [UI](#manage-migrations-with-the-ui) or [CLI](#manage-migrations-with-the-cli).

## Manage migrations with the UI

The Dashboard displays an overview of migrations and their status, showing what pre-existing data has been moved and data added since the migration started.

Click **View migration** to see more detail.

:::note
A migration must be stopped before it can be deleted. A stopped migration can not be resumed.
:::

### Assign exclusions to an existing migration

Adding exclusions to an existing migration will change the future actions performed for that migration, but will not affect previously migrated content.

1. In the dashboard, select an ongoing migration to view its **Exclusions**.
1. Click **Add** and select the appropriate exclusion template from the drop-down list.

### Remove exclusions from an existing migration

1. In the dashboard, select an ongoing migration to view its **Exclusions**.
1. Remove any of the exclusions one at a time.

### Stop a migration

When you start a migration, the **Start** button will be replaced with a **Stop** button. Click it to stop the migration and suspend all current file transfer.

### Resume a migration

When you stop a migration, the **Stop** button will be replaced with a **Resume** button. Click it to resume the migration, which will continue from where it left off.

### Delete a migration

:::note
Migrations must be [stopped](#stop-a-migration) before they can be deleted.
:::

When viewing a migration, click on the **Details** panel. Click the option to **Delete** the migration.

## Manage migrations with the CLI

| Command | Action |
|:---|:---|
| [`migration stop`](./command-reference.md#migration-stop) | Stop a migration |
| [`migration resume`](./command-reference.md#migration-resume) | Resume a stopped migration |
| [`migration del`](./command-reference.md#migration-del) | Delete a migration |
| [`migration exclusion add`](./command-reference.md#migration-exclusion-add) | Add an exclusion to a migration |
| [`migration exclusion del`](./command-reference.md#migration-exclusion-del) | Remove an exclusion from a migration |
| [`migration list`](./command-reference.md#migration-list) | List running and active migrations |
| [`migration run`](./command-reference.md#migration-run) | Start a migration |
| [`migration show`](./command-reference.md#migration-show) | Get migration details |
| [`status`](./command-reference.md#status) | Get migration status |

### Data migration states

Migrations can be in one of eight states:

`NONSCHEDULED`
: A *non-scheduled migration* has been defined but not yet started. Create a migration in this state by not specifying the `--auto-start` parameter on creation.

`SCHEDULED`
: A *scheduled* migration will start when directed to run.

`STARTING`
: A *starting* migration is being started and will soon begin transferring content to the target.

`RUNNING`
: A *running* migration is scanning through source content and transferring content to the target, as well as responding to change notifications from the source if applicable.

`LIVE`
: A *live* migration has completed scanning through source content, continues to respond to change notifications from the source, and will transfer content to and make changes in the target as required.

`PAUSING`
: A *pausing* migration has been instructed to pause transfer, but is temporarily continuing to make changes to the target.

`PAUSED`
: A *paused* migration has been instructed to pause transfer, and is not transferring content or making other changes to the target.

`ABORTED`
: An *aborted* migration will not make any changes to the target and cannot be run again.

`COMPLETED`
: A *completed* migration has scanned through all source content and finished transferring all applicable data to the target filesystem, and has ignored any updates to the source data.
