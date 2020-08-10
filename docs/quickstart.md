---
id: quickstart
title: Quickstart
sidebar_label: Quickstart
---

:::note Public Preview
LiveData Migrator is in public preview. This gives you access to all product functionality for review, but limits operation time to 10 minutes during the preview period.
:::

Get started with data migration in less than 30 seconds. If you're new to the concept of LiveData, or want to know what LiveData Migrator does, please read the [introduction to LiveData Migrator](./about.md).

<div class="download">
<a href="https://customer.wandisco.com">Download LiveData Migrator</a>
</div>

Migrate your data immediately in three steps:
1. Run LiveData Migrator,
1. Define a target, then
1. Migrate your data.

## 1. Run LiveData Migrator

As the `hdfs` user on a cluster edge node:

```
$ hadoop jar live-migrator.jar
```

For more details, see the [Getting Started](./getting-started.md#running-livedata-migrator) guide.

## 2. Define your target

Define a reference to your target file system with [`filesystem add`](./command-reference.md#file-system-commands) before migrating data to it. e.g.

```
WANdisco LiveMigrator >> filesystem add adls2 sharedKey --file-system-id mytarget --storage-account-name psmadls2 --container.name lm2target --fs.azure.shared.key Ri5NxHGqoQ79DBGLVn+COK/sRDwbNqAREDACTEDaMxRkvXt2ijUtAkVqVCBj/vaS/NbzR5rtjE2CZ31ejVpUVA==
{
  "fsId" : "lm2target",
  "fsType" : "adls2-hcfs",
  "isSource" : false,
  "properties" : {
    "fsId" : "lm2target",
    "fsType" : "adls2-hcfs",
    "fs.defaultFS" : "abfss://lm2target@psmadls2.dfs.core.windows.net/",
    "fs.azure.account.auth.type.psmadls2.dfs.core.windows.net" : "SharedKey",
    "fs.azure.account.key.psmadls2.dfs.core.windows.net" : "Ri5NxHGqoQ79DBGLVn+COK/sRDwbNqAREDACTEDaMxRkvXt2ijUtAkVqVCBj/vaS/NbzR5rtjE2CZ31ejVpUVA==",
    "fs.abfss.impl" : "org.apache.hadoop.fs.azurebfs.SecureAzureBlobFileSystem",
    "fs.AbstractFileSystem.abfss.impl" : "org.apache.hadoop.fs.azurebfs.Abfss",
    "fs.abfss.impl.disable.cache" : "true"
  },
  "eventsPosition" : 0
}
```

## 3. Migrate your data

Create and auto-start the migration for a directory in your source, like `/repl1`, to the target you created with the identifier `lm2target` using [`migration new`](./command-reference.md#migration-new). You must also provide an identifier for the migration, such as `myNewMigration`.

_Example_

```
WANdisco LiveMigrator >> migration new --auto-start --path /repl1 --target lm2target –-migrationId myNewMigration
{
  "migrationId" : "343a270e319d5beb0bf1adfbb1a5d0f8f3c0a4d6",
  "path" : "/repl1",
  "source" : "auto-discovered-source-hdfs",
  "target" : "lm2target",
  "state" : "SCHEDULED",
  "exclusions" : [ ],
  "migrationStartTime" : "2020-06-03T05:17:27.936+0000",
  "migrationEdge" : "/repl1",
  "scannerSummary" : {
    "progressSummary" : {
      "filesScanned" : 0,
      "directoriesScanned" : 0,
      "bytesScanned" : 0
    },
    "contentSummary" : null
  },
  "migrationCompleteTime" : null,
  "abortReason" : null,
  "filesSeen" : 0,
  "dirsSeen" : 0,
  "sizeOfMigration" : 0
}
```

Use [`status`](./command-reference.md#status) for information about the progress of migrations that are underway, as well as those that are Live, meaning that they have migrated all pre-existing data and are keeping the target file system consistent with new data and other changes made to the source.

```
WANdisco LiveMigrator >> status

Total Migrations:  1
Average Bandwidth: 0.00 Gb/s, 0.00 Gb/s, 0.00 Gb/s
Peak Bandwidth:    0.00 Gb/s
Average Files/s:   0, 0, 0
Peak Files/s:      0

Live: 1
     /repl1 343a270e319d5beb0bf1adfbb1a5d0f8f3c0a4d6

Running: 0

Ready: 0
```

Monitor the operation of LiveData Migrator, including the average bandwidth used in the last 10 second, 1 minute, and 5 minute intervals. If you need more specific information about an individual migration, you can view details for it with [`migration show`](./command-reference.md#migration-show).

# Getting Started

For a more comprehensive introduction to using LiveData Migrator, including installation, operation and the full set of commands, please read the [Getting Started](./getting-started.md) guide.