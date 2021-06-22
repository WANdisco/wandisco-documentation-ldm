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
A migration must be stopped or aborted before it can be deleted.
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
| [`migration pending-region add`](./command-reference.md#migration-pending-region-add) | Add a pending region to a migration |
| [`status`](./command-reference.md#status) | Get migration status |

### Pending regions

LiveData Migrator uses pending regions to keep your directories up to date if they change during data migrations. If directories are updated while being migrated, the changed paths on the source filesystem are tracked by the migration so they can be re-scanned for updates when the migration finishes.

LiveData Migrator collects pending regions automatically during a migration, but you can manually add them if you want the directories to be re-scanned after further updates. You can also re-run the entire migration by making the root directory the pending region.

#### Add pending regions in the UI

To add a pending region in the UI:

* Click on the migration you want to add a pending region to in the dashboard.
* Under the sidebar that appears, select **Rescan**.
* Type the path to the directory in **Add rescan directories**.
* Choose **Overwrite** or **Skip If Size Match**.
* Click **+Add**.

#### Add pending regions in the CLI

Add a pending region to a migration by running the [`migration pending-region add` command](./command-reference.md#migration-pending-region-add).

```text title="Example"
migration pending-region add --migration-id myFirstMigration --path /dir1/userA
```

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

### Monitoring Failed Operations

The **Failed Operations** panel on LiveData UI's Migration screen provides a counter of any failed operations, including paths that failed to migrate. For a breakdown of the latest failures, click **View details**. This opens a list of failures that includes the following information for each failure:

* **Date and time**: Date and time of the failure.

  ```text title="Example"
  2020-01-07 13:30:40 AM UTC
  ```
* **Path**: Path that failed to migrate.

  ```text title="Example"
  /km/gold/edf_gold/asset_access_circuit_snpst/000000_1
  ```
* **Failure**: Error message generated by the failure.

  ```text title="Example"
  java.io.IOException: Error rescanning [/km/gold/edf_gold/icore_order_data/data_dt=20210301/part-m-2839] [not found]
  ```

:::note
Historical failure information may be garbage collected, so it may not be possible to show all failures. In this case a warning will appear that states' *"We're unable to show detailed results of failed operations. We only have detailed results from the most recent <number of available failures> results"*
:::
