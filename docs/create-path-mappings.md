---
id: create-path-mappings
title: Create path mappings
sidebar_label: Create path mappings
---

Create path mappings when you want your target filesystem to store the migrated data in a different path to that of your source filesystem.

## Why use path mapping?

When path mapping is not used, the source path on your source filesystem will be created on your target filesystem. This may not always be suitable for the purposes of your migration.

The example below presents a common use-case, the default [Hive metastore warehouse directory](https://cwiki.apache.org/confluence/display/Hive/Configuration+Properties#ConfigurationProperties-hive.metastore.warehouse.dir) for Hortonworks is `/apps/hive/warehouse` whereas for Azure HDInsight it is `/hive/warehouse`.

| Example for Hortonworks to HDInsight | Source path | Target path |
|---|---|---|
| Without path mapping | `/apps/hive/warehouse` | `/apps/hive/warehouse` |
| With path mapping | `/apps/hive/warehouse` | `/hive/warehouse` |

Using path mapping will allow any migrated data (relating to managed Hive databases and tables) to be stored in the equivalent default location on the target.

## Create a path mapping with the UI

Path mapping is not yet available through the UI, it will be available in a forthcoming release.

## Create a path mapping with the CLI

### Add path mappings

Use the [`path mapping create`](./command-reference.md#path-mapping-create) command to define your source and target paths, as well as your target filesystem.

### Manage path mappings

| Command | Action |
|:---|:---|
| [`path mapping del`](./command-reference.md#path-mapping-del) | Delete a path mapping |
| [`path mapping list`](./command-reference.md#path-mapping-list) | List all path mappings or list path mappings for a specific filesystem |
| [`path mapping show`](./command-reference.md#path-mapping-show) | Show details of a specified path mapping |

## Next Steps

Once you have defined any path mappings and [exclusions](./configure-exclusions.md), you're ready to [migrate data](./create-migration.md).
