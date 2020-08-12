---
id: operation-ui
title: Operation - UI
sidebar_label: Operation - UI
---

## Exclusion templates

Define exclusion templates that are used to exclude certain file sizes or file names (defined using [regex](https://regexr.com/) patterns) during a migration. These templates are associated with a storage allowing you to selectively ignore content during migration when that storage is used as the source.

Exclusion templates are assigned to a new migration or an existing migration. Adding exclusions to a new migration ensures the outcome is consistent with those chosen exclusions.

Modifying exclusions on an existing migration will change the future actions performed for that migration, but will not affect previously migrated content.

:::note
Default exclusions will automatically apply to certain storages depending on the platform. For example, ADLS storage types have a maximum individual file size limit of 5TB.
:::

### Add new exclusion

When viewing the **Storages** list on the dashboard, click the settings cog for the desired storage to enter the configuration page. Select **LiveData Migrator** under the _Processes_ list to display the exclusion templates.

Click **Add new exclusion** to associate the exclusion with this storage and enter the parameters for the exclusion:

* **Exclusion type** - _File Size_ or _Regex_.
* **Name** - The name given to the exclusion template (for example: `100gbfilelimit`).
* **Description** - A brief description of what the exclusion is doing (for example: "_Files larger than 100GB are excluded_").
* _File Size_ = **Value / Unit**
  * The value and unit for the file size limit (for example: `100` `GB`). 
* _Regex_ = **Regex**
  * The regex pattern to be used for the filename exclusion (for example: `/**/.hive-staging**`)

Once the exclusion is added and passed validation, it will appear on the exclusion list.

### Remove exclusion from templates list

When viewing the **Storages** list on the dashboard, click the settings cog for the desired storage to enter the configuration page. Select **LiveData Migrator** under the _Processes_ list to display the exclusion templates.

Remove the exclusion by clicking the trash icon.

:::note
This will not remove the exclusion from an existing migration. See the [Remove exclusion from an existing migration](#remove-exclusion-from-an-existing-migration) section for guidance on how to do this.
:::

### Assign exclusion templates to a new migration

In the new migration page, **Add new exclusion** and select the desired template from the drop-down list.

These will appear on the exclusion list. You can remove them at any time prior to starting the migration.

### Assign exclusion templates to an existing migration

Select an ongoing migration on the dashboard to view the **Exclusions** assigned to it.

Click to **Add** new ones and select the desired template from the drop-down list.

### Remove exclusion from an existing migration

Select an ongoing migration on the dashboard to view the **Exclusions** assigned to it.

Remove any of the exclusions one at a time.