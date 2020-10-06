---
id: operation-ui
title: Using LiveData Migrator with the UI
sidebar_label: UI
---

The UI can manage multiple LiveData Migrators as well as LiveData Plane from one convenient interface. It is designed to be intuitive and contains on-screen instructions to help you perform migrations and configuration tasks successfully.

If you're new to the concept of LiveData, or want to know what LiveData Migrator does, see the [introduction to LiveData Migrator](./about.md) before learning [how to install](./installation.md) and use LiveData Migrator.

## Before you start

The UI is available on port 8081 on the host with your LiveData Migrator installation. For example, if you were running LiveData Migrator locally, the port would be:

http://127.0.0.1:8081

### Register

You'll be asked to register a LiveData Migrator account the first time you use the UI. Fill in the registration form to create your user account.

Internet access from the host is not required, but when it is available, you'll be sent confirmation of your registration. We'll use your registration information to send you important information about your LiveData Migrator account, such as a reminder before your license expires. You can also opt in to receive additional product updates.

### Upgrade your license

Your trial license will last 14 days and is valid for 5TB of data. If you want to upgrade to a full license before you start using LiveData Migrator, follow these steps:

1. Click **Upgrade License**.
1. Click the option to purchase a license now. Follow the provided instructions to get your license.

   Once your license has been sent, ensure it is available on your local machine.
1. Upload your new license.
1. Review the license preview and ensure it is correct before selecting **Upload**.

   The License panel displays your new limits and license expiry date. We'll notify you when it's time to renew your license.

## How the UI works

The UI has four main panels and a Notification system.

### License information

Use the License information panel to see current license information (including warnings if the product is approaching license limits), and uploading a new license.

### Bandwidth usage

The Bandwidth panel shows how much bandwidth LiveData Migrator is currently using to migrate data. It shows this over the most recent 5 minute period and continually updates. The left axis scales automatically to accommodate the highest throughput during that period.

### Storage

The Storage panel shows the underlying storage used by LiveData Migrator as either a source or target. LiveData Migrator supports one source and one or more targets. Each storage displays its associated processes, such as which LiveData Migrator is used to access it.

Use the Storage panel to:

* View and configure the source and target storages
* Add further targets
* Add additional LiveData Migrators and LiveData Plane

For more information about sources and targets, see the [introduction to LiveData Migrator](./about.md).

### Rules and Migrations

The Rules and Migrations panel in LiveData Migrator shows migrations and their progress. If the UI also manages LiveData Plane, the panel will also show rules.

Use the Rules and Migrations panel to:

* Add further migrations or rules
* View more detail about existing rules and migrations

### Notifications

The bell icon in the top-right of the UI is where you'll receive notifications about errors, warnings, or important milestones in your usage.

## Migrate data

### Configure storage

Configure your storages to define at least one source and at least one target to migrate data. LiveData Migrator will connect to these storages for migration.

* Supported sources are: **HDFS**
* Supported targets are: **ADSL Gen2**, **GCS** and **S3**

You can also use the Storage panel to:

* Configure S3-compatible Targets using the [Hadoop S3A configuration](http://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html) exposed in the UI.
* Connect to additional LiveData Migrator or LiveData Plane instances and configure their respective storages.

### Create migrations

Migrations transfer existing data from the defined source to a target. LiveData Migrator migrates any changes made to the source data while it is being migrated and ensures that the target is up to date with those changes. It does this while continuing to perform the migration.

You will typically create multiple migrations so that you can select specific content from your source storage by Path. You can also migrate to multiple independent storages at the same time by defining multiple migration resources.

To create a migration:

1. Choose a source and target from previously defined [storages](#configure-storage).
2. Choose the Path to set the scope of the migration.
3. [Apply any exclusions](#add-new-exclusions) to reduce the scope within this Path.

Migrations can be automatically started when they're created, or started at a later point when [viewing migration details](#view-migrations).

If you've already migrated some data from the same source to the same target, you can choose whether to overwrite all the content (Overwrite) or only migrate new content that isn't already there (Skip).

### View migrations

The Dashboard displays an overview of migrations and their status, showing what pre-existing data has been moved and data added since the migration started.

Click into the migrations to see more detail.

:::note
A migration must be stopped before it can be deleted. A stopped migration can not be resumed.
:::

## Add and remove exclusions

Define exclusion templates to exclude certain file sizes or file names (defined using [regex](https://regexr.com/) patterns) during a migration. These templates are associated with a storage, allowing you to selectively ignore content during migration when that storage is used as the source.

Assign exclusion templates to new migration or existing migrations. Adding exclusions to a new migration ensures the outcome is consistent with the chosen exclusions. Adding exclusions to an existing migration will change the future actions performed for that migration, but will not affect previously migrated content.

:::note
Default exclusions will automatically apply to certain storages depending on the platform. For example, ADLS storage types have a maximum individual file size limit of 5TB.
:::

### Add new exclusions

1. In the **Storages** list on the dashboard, click the settings cog for the appropriate storage.
1. Select **LiveData Migrator** under the _Processes_ list to display the exclusion templates.
1. Click **Add new exclusion** to associate the exclusion with the selected storage and enter the parameters for the exclusion:
    * **Exclusion type** - _File Size_ or _Regex_.
    * **Name** - The name given to the exclusion template (for example: `100gbfilelimit`).
    * **Description** - A brief description of what the exclusion is doing. For example: "_Files larger than 100GB are excluded_").
    * _File Size_ = **Value / Unit** - The value and unit for the file size limit (for example: `100` `GB`).
    * _Regex_ = **Regex** - The regex pattern to be used for the filename exclusion (for example: `/**/.hive-staging**`)

Once the exclusion is added and passed validation, it appears on the exclusion list.

### Remove exclusions from the templates list

1. In the **Storages** list on the dashboard, click the settings cog for the appropriate storage.
1. Select **LiveData Migrator** under the _Processes_ list to display the exclusion templates.
1. Click the trash icon.

:::note
This will not remove the exclusion from an existing migration. See the [Remove exclusion from an existing migration](#remove-exclusion-from-an-existing-migration) section for guidance on how to do this.
:::

### Assign exclusion templates to a new migration

1. In the new migration page, click **Add new exclusion**
1. Select the appropriate exclusion template from the drop-down list.

The exclusion appears in the list, and can be removed before the migration is started.

### Assign exclusion templates to an existing migration

1. In the dashboard, select an ongoing migration to view its **Exclusions**.
1. Click **Add** and select the appropriate exclusion template from the drop-down list.

### Remove exclusion from an existing migration

1. In the dashboard, select an ongoing migration to view its **Exclusions**.
1. Remove any of the exclusions one at a time.
