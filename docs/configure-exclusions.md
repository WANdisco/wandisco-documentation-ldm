---
id: configure-exclusions
title: Configure exclusions
sidebar_label: Configure exclusions
---

Exclusions prevent certain file sizes or file names (defined using [regex](https://regexr.com/) patterns) from your data migrations. Exclusion templates are associated with a storage, allowing you to selectively ignore content during migration when that storage is used as the source.

Use the [UI](#configure-exclusions-with-the-ui) or the [CLI](#configure-exclusions-with-the-cli) to configure exclusions.

## Configure exclusions with the UI

Assign exclusions to new or existing migrations.

:::note
Default exclusions will automatically apply to certain storages depending on the platform. For example, ADLS storage types have a maximum individual file size limit of 4.55TiB.
:::

### Add new exclusions

1. In the **Storages** list on the dashboard, click the settings for the appropriate storage.
1. Select **LiveData Migrator** under the _Processes_ list to display the exclusion templates.
1. Click **Add Exclusion Template** to associate the exclusion with the selected storage and enter the parameters for the exclusion:
    * **Exclusion type** - _Regex_, _File Size_, or _Date_.
    * **Name** - The name given to the exclusion template (for example: `100gbfilelimit`).
    * **Description** - A brief description of what the exclusion is doing. For example: "_Files larger than 100GB are excluded_").
    * _File Size_ = **Value / Unit** - The value and unit for the file size limit (for example: `100` `GB`).
    * _Regex_ = **Regex** - The regex pattern to be used for the filename exclusion (for example: `/**/.hive-staging**`).
    * _Date_ = **Select Date** - Any files that have been modified before the specified date will be excluded during migrations.

Once the exclusion is added and passed validation, it appears on the exclusion list.

### Remove exclusions from the templates list

1. In the **Storages** list on the dashboard, click the settings for the appropriate storage.
1. Select **LiveData Migrator** under the _Processes_ list to display the exclusion templates.
1. Click the trash icon.

:::note
This will not remove the exclusion from an existing migration. See the [Remove exclusions from an existing migration](./manage-migrations.md#remove-exclusions-from-an-existing-migration) section for guidance on how to do this.
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
