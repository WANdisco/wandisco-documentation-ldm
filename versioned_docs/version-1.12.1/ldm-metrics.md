---
id: ldm-metrics
title: Viewing Metrics
sidebar_label: Viewing metrics
---

View detailed metrics about recent and ongoing LiveData Migrator events and activity through the UI or the CLI, such as changes to source data pending migration, bandwidth usage, data migration statistics and more.

## Viewing Metrics in the UI

Navigate to the Metrics tab beneath the Dashboard tab in the main menu to see a number of graphs tracking bandwidth usage, data migrated and live events.

### Bandwidth Usage

This graph tracks the rate of data migration across the network within a time period specified through the dropdown menu.

### Live Events

This graph tracks the changes made to source data that have yet to be migrated to the migration target.

### Data Migrated per day

This graph charts the total amount of data migrated by LiveData Migrator each day across a time frame specified through the date dropdown menus.

## Viewing Metrics in the CLI

Run the `status` command with the `--diagnostics` parameter to return detailed information about LiveData Migrator operations:

```text title="Status with --diagnostics"
WANdisco LiveMigrator >> status --diagnostics

Uptime: 0 Days 1 Hours 23 Minutes 24 Seconds
SystemCpuLoad: 0.1433 ProcessCpuLoad: 0.0081
JVM GcCount: 192 GcPauseTime: 36 s (36328 ms)
OS Connections: 1, Tx: 0 B, Rx: 0 B, Retransmit: 0
Transfer Bytes (10/30/300s): 0.00 Gib/s, 0.00 Gib/s, 0.00 Gib/s
Transfer Files (10/30/300s): 0.00/s 0.00/s 0.00/s
Active Transfers/pull.threads: 0/100
Migrations: 0 RUNNING, 4 LIVE, 0 STOPPED
Actions Total: 0, Largest: "testmigration" 0, Peak: "MyMigration" 1
PendingRegions Total: 0 Avg: 0, Largest: "MyMigration" 0
FailedPaths Total: 0, Largest: "MyMigration" 0
File Transfer Retries Total: 0, Largest: "MyMigration" 0
Total Excluded Scan files/dirs/bytes: 26, 0, 8.1 MB
Total Iterated Scan files/dirs/bytes: 20082, 9876, 2.7 GB
EventsBehind Current/Avg/Max: 0/0/0, RPC Time Avg/Max: 4/8
EventsQueued: 0, Total Events Added: 504
Transferred File Size Percentiles:
 2 B, 2 B, 2 B, 2 B, 2 B, 2 B, 2 B, 2 B, 2 B, 2 B
Transferred File Transfer Rates Percentiles per Second:
 2 B, 2 B, 2 B, 2 B, 2 B, 2 B, 2 B, 2 B, 2 B, 2 B
Active File Size Percentiles:
 0 B, 0 B, 0 B, 0 B, 0 B, 0 B, 0 B, 0 B, 0 B, 0 B
Active File Transfer Rates Percentiles per Second:
 0 B, 0 B, 0 B, 0 B, 0 B, 0 B, 0 B, 0 B, 0 B, 0 B
```

For more information on the `status` command, see [Command Reference](./command-reference.md#status).
