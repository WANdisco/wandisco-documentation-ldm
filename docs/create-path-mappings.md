---
id: create-path-mappings
title: Create path mappings
sidebar_label: Create path mappings
---

Create path mappings when you want to define a alternative target path for a specific target filesystem.

## Why use path mapping?

When path mapping is not used, the source path on your source filesystem will be created on your target filesystem. This may not always be suitable for the purposes of your migration.

The following example shows a common use-case where the default [Hive metastore warehouse directory](https://cwiki.apache.org/confluence/display/Hive/Configuration+Properties#ConfigurationProperties-hive.metastore.warehouse.dir) for Hortonworks is `/apps/hive/warehouse`, and the default for Azure HDInsight is `/hive/warehouse`.

| Example for Hortonworks to HDInsight | Source path | Target path |
|---|---|---|
| Without path mapping | `/apps/hive/warehouse` | `/apps/hive/warehouse` |
| With path mapping | `/apps/hive/warehouse` | `/hive/warehouse` |

Using path mapping enables any migrated data (relating to managed Hive databases and tables) to be stored in the equivalent default location on the target.

## Create a path mapping with the UI

You can create path mappings through the UI. To access path mappings:

* Click on the LiveData Migrator hostname under your "Products" list in the dashboard.
* Under the "Configuration" menu, select "Path Mappings".

Here, you will see a list of your existing path mappings, if any.

### Add a path mapping

To add a path mapping, click the "Add New Path" button in the top right of the interface.

In the form that appears, provide the following details:

* **Name:** A reference name for your path mapping.
* **Source Filesystem:** The file system source. Selectable via a drop-down menu.
* **Path for <Source_Filesystem_Name>:** The directory path on the source file system to map from. Appears only after selecting a source filesystem.
* **Target Filesystem:** The target file system to map to in migrations. Selectable via a drop-down menu.
* **Path for <Target_Filesystem_Name>:** The directory path on the target file system to map to. Appears only after selecting a target filesystem.

Click "Add" once you've provided all necessary information to create your new path mapping. It will be listed in the path mappings tab.

### Remove a path mapping

To delete a path mapping, locate the path mapping you want to remove in the list and click the delete icon to the right of it, depicted by a trash can.

:::note
When a path mapping is deleted, any migrations using the path mapping will not be affected. They will continue to function as if the path mapping were still in place.
:::

## Create a path mapping with the CLI

### Add path mappings

Use the [`path mapping create`](./command-reference.md#path-mapping-create) command to define your source and target paths, as well as your target filesystem.

### Manage path mappings

| Command | Action |
|:---|:---|
| [`path mapping del`](./command-reference.md#path-mapping-del) | Delete a path mapping |
| [`path mapping list`](./command-reference.md#path-mapping-list) | List all path mappings or list path mappings for a specific filesystem |
| [`path mapping show`](./command-reference.md#path-mapping-show) | Show details of a specified path mapping |

## Path mapping limitation

Paths on the source filesystem will not be migrated if they conflict with target paths that are created by the path mapping rules.

An example would be if you had a path mapping rule such as below:

| Source path | Target path |
|---|---|
| `/repl/folder/old` | `/repl/folder/old/archive` |

In this case, if a new directory is created on the source `/repl/folder/old/newdir`, it is migrated to the target as `/repl/folder/old/archive/newdir`.

However, if the following directory is created on the source `/repl/folder/old/archive`, this would not be migrated as it conflicts with the path mapping rule.

## Next Steps

Once you have defined any path mappings and [exclusions](./configure-exclusions.md), you're ready to [migrate data](./create-migration.md).
