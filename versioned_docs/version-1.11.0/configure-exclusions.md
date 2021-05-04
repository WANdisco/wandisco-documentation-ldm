---
id: configure-exclusions
title: Configure exclusions
sidebar_label: Configure exclusions
---

Define exclusions to prevent certain files and directories from being migrated. There are three types of exclusions, which will exclude by:

* File size
* File and directory names (defined using regular expression patterns of either [Java PCRE](https://regexr.com/) or [Automata](https://www.javatpoint.com/theory-of-automata) type)
* Last modification date of directories and files

Exclusion templates are associated with a storage, allowing you to selectively ignore content during migration when that storage is used as the source.

Use the [UI](#configure-exclusions-with-the-ui) or the [CLI](#configure-exclusions-with-the-cli) to configure exclusions.

## Configure exclusions with the UI

Assign exclusions to new or existing migrations.

:::note
Default exclusions will automatically apply to certain storages depending on the platform. For example, ADLS storage types have a maximum individual file size limit of 4.55TiB, and any files larger will be automatically excluded.
:::

### Add new exclusions

1. In the **Storages** list on the dashboard, click the settings for the appropriate storage.
1. Select **LiveData Migrator** under the _Processes_ list to display the exclusion templates.
1. Click **Add Exclusion Template** to associate the exclusion with the selected storage and enter the parameters for the exclusion:
   * **Exclusion type** - _Regex_, _File Size_, or _Date_.
   * **Name** - The name given to the exclusion template (for example: `100gbfilelimit`).
   * **Description** - A brief description of what the exclusion is doing. For example: "_Files larger than 100GB are excluded_").
   * _File Size_ = **Value / Unit** - The value and unit for the file size limit (for example: `100` `GB`).
   * _Regex_ = **Regex** - The regex pattern to be used for the filename exclusion (for example: `^test\.*`).
   * _Date_ = **Select Date** - Any files that have been modified before the specified date will be excluded during migrations.

Once the exclusion is added and passed validation, it appears on the exclusion list.

### Remove exclusions from the templates list

1. In the **Storages** list on the dashboard, click the settings for the appropriate storage.
1. Select **LiveData Migrator** under the _Processes_ list to display the exclusion templates.
1. Click the trash icon.

:::note
This will not remove the exclusion from an existing migration. See the [Remove exclusions from an existing migration](./manage-migrations.md#remove-exclusions-from-an-existing-migration) section for guidance on how to do this.

You cannot remove [default exclusions](#default-exclusions) from the templates list, but you may remove them from an existing migration.
:::

## Configure exclusions with the CLI

Exclusions constrain content migrated from a source file system. Adding exclusions to an existing migration will change the future actions performed for that migration, but will not affect previously migrated content.

### Define exclusions

Define exclusions so you can apply them to migrations.

| Command | Action |
|:---|:---|
| [`exclusion add date`](./command-reference.md#exclusion-add-date) | Create a new date-based rule |
| [`exclusion add file-size`](./command-reference.md#exclusion-add-file-size) | Create a new file size rule |
| [`exclusion add regex`](./command-reference.md#exclusion-add-regex) | Create a new regex exclusion rule |

### Manage exclusions

| Command | Action |
|:---|:---|
| [`exclusion del`](./command-reference.md#exclusion-del) | Delete an exclusion rule |
| [`exclusion list`](./command-reference.md#exclusion-list) | List all exclusion rules |
| [`exclusion show`](./command-reference.md#exclusion-show) | Get details for a particular exclusion rule |

## Default Exclusions

When you create a new migration, default exclusions are added to it. The default exclusions will depend on the filesystem types used in the migration.

Default exclusions can be removed from the migration, but not from the system or the templates list.

### HDFS

The default exclusions are as follows:

| Exclusion | Exclusion type | Description |
|:---|:---|:---|
| &#40;&#47;&#124;&#47;.&#42;&#47;&#41;&#92;&#92;.hive-staging.&#42; | Regex (Automata) | Hive staging directories |
| &#40;&#47;&#124;&#47;.&#42;&#47;&#41;&#92;&#92;.spark-staging-.&#42; | Regex (Automata) | Spark staging directories |
| &#40;&#47;&#124;&#47;.&#42;&#47;&#41;_temporary.&#42; | Regex (Automata) | Spark temporary directories |
| &#40;&#47;&#124;&#47;.&#42;&#47;&#41;&#92;&#92;.Trash&#40;&#47;.&#42;&#41;? | Regex (Automata) | HDFS trash directories |
| &#40;&#47;&#124;&#47;.&#42;&#47;&#41;&#92;&#92;.snapshot&#40;&#47;.&#42;&#41;? | Regex (Automata) | HDFS Snapshot directories |

The Hive or Spark directories are used to stage temporary files during Hive or Spark jobs. These are automatically deleted by Hive or Spark after use, and are excluded by default to avoid the migration of unnecessary data.

The HDFS Snapshot and trash directories are (generally) only relevant to the local cluster and excluded for the same reason as to avoid migration of unnecessary data.

### ADLS Gen2

The default exclusions are as follows:

| Exclusion | Exclusion type | Description |
|:---|:---|:---|
| &#91;.&#124;&#92;&#92;&#47;&#93;&#36; | Regex (JAVA_PCRE) | File names cannot end with `.` or ' ' |
| .&#42;&#40;&#91;&#94;&#92;&#92;&#47;&#93;&#42;&#92;&#92;&#47;&#41;&#123;255,&#125;.&#42; | Regex (Automata) | Blob names cannot exceed 254 path segments |
| .&#123;1025,&#125; | Regex (JAVA_PCRE) | File name length cannot exceed 1024 |
| 5 TB | File size | File size cannot exceed 5TB |

These exclusions cover many of the limitations set by [ADLS Gen2 directory and file naming rules](https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-shares--directories--files--and-metadata#directory-and-file-names).

### GCS

The default exclusions are as follows:

| Exclusion | Exclusion type | Description |
|:---|:---|:---|
| .&#42;&#91;&#92;r&#92;n&#93;.&#42; | Regex (Automata) | File name cannot contain carriage return or line feeds |
| .&#123;1025,&#125; | Regex (JAVA_PCRE) | File name length cannot exceed 1024 |
| &#92;&#92;.&#92;&#92;.? | Regex (Automata) | File name cannot be named `.` or `..` |
| 16 TB | File size | File size cannot exceed 16TB |

These exclusions cover the limitations set by [Google Cloud object naming guidelines](https://cloud.google.com/storage/docs/naming-objects).