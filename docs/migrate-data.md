---
id: migrate-data
title: Migrate data
sidebar_label: Migrate data
---

The UI can manage multiple LiveData Migrators as well as LiveData Plane from one convenient interface. It is designed to be intuitive and contains on-screen instructions to help you perform migrations and configuration tasks successfully.

If you're new to the concept of LiveData, or want to know what LiveData Migrator does, see the [introduction to LiveData Migrator](./about.md) before learning [how to install](./installation.md) and use LiveData Migrator.

## Before you start

The UI is available on port 8081 on your LiveData Migrator host. For example, if you were running LiveData Migrator on a host named `myldmhost.example.com`, the URL would be:

```text
http://myldmhost.example.com:8081
```

### Register

You'll be asked to register a LiveData Migrator account the first time you use the UI. Fill in the registration form to create your user account.

Internet access from the host is not required, but when it is available, you'll be sent confirmation of your registration. We'll use your registration information to send you important information about your LiveData Migrator account, such as a reminder before your license expires. You can also opt in to receive additional product updates.

## How the UI works

The UI has four main panels and a Notification system.

### Bandwidth usage

The Bandwidth panel shows how much bandwidth LiveData Migrator is currently using to migrate data. It shows this over the most recent 5 minute period and continually updates. The left axis scales automatically to accommodate the highest throughput during that period.

### Storage

The Storage panel shows the underlying storage used by LiveData Migrator as either a source or target. LiveData Migrator supports one source and one or more targets. Each storage displays its associated processes, such as which LiveData Migrator is used to access it.

Use the Storage panel to:

* View and configure the source and target storages
* Add further targets
* Add additional LiveData Migrator servers and [LiveData Plane](https://wandisco.github.io/wandisco-documentation/docs/quickstarts/preparation/get-started) servers

For more information about sources and targets, see the [introduction to LiveData Migrator](./about.md).

### Rules and Migrations

The Rules and Migrations panel in LiveData Migrator shows migrations and their progress. If the UI also manages LiveData Plane, the panel will also show rules.

Use the Rules and Migrations panel to:

* Add further migrations or rules
* View more detail about existing rules and migrations

### Notifications

The bell icon in the top-right of the UI is where you'll receive notifications about errors, warnings, or important milestones in your usage.

## Configure storage

Configure your storages to define at least one source and at least one target to migrate data. LiveData Migrator will connect to these storages for migration.

* Supported sources are: **HDFS**
* Supported targets are: **ADLS Gen2**, **S3**, **Google Cloud Storage**, and **IBM Cloud Object Storage (S3)**

You can also use the Storage panel to:

* Configure S3-compatible Targets using the [Hadoop S3A configuration](http://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html) exposed in the UI.
* Connect to additional LiveData Migrator or LiveData Plane instances and configure their respective storages.

### Configure source storage

:::info
The source file system is normally detected on startup. It will not be detected automatically if Kerberos is enabled or your Hadoop configuration does not contain the information needed to connect to the Hadoop file system.
:::

If Kerberos is enabled, on the [Storage](#storage) panel, select to configure your _Unknown source_ and provide your source HDFS configuration:

* **File System ID** - Provide a name for your source storage.
* **Default FS** - Provide the `fs.defaultFS` value from your HDFS configuration.
* Kerberos Configuration
  * **Kerberos Principal** - Provide a principal that will map to the [HDFS super user](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User) using [auth_to_local](https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/SecureMode.html#Mapping_from_Kerberos_principals_to_OS_user_accounts) rules.
  * **Kerberos Keytab Location** - Provide the path to the Kerberos keytab containing the **Kerberos Principal**. This must be accessible to the local system user running the LiveData Migrator service (default is `hdfs`).
* Additional Configuration
  * **Provide a path to files** - Provide the directory or directories containing your HDFS configuration (such as the `core-site.xml` and `hdfs-site.xml`) on your LiveData Migrator host's local filesystem.
  * **Additional Configuration** (Optional) - Override properties or specify additional properties by adding Key/Value pairs.

### Add target storages

Selecting to configure your _Target_ storage on the [Storage](#storage) panel, see the links below for the configuration needed for each platform:

* ADLS Gen2 - The configuration needed will depend on the **Authentication Type** chosen:
  * [Shared Key](./command-reference.md#mandatory-parameters-2)
  * [Service Principal (OAuth2)](./command-reference.md#mandatory-parameters-1)
* [S3 / IBM Cloud Object Storage (S3)](./command-reference.md#mandatory-parameters-5)
* [Google Cloud Storage](./command-reference.md#mandatory-parameters-3)

## Configure exclusions

Define exclusions to exclude certain file sizes or file names (defined using [regex](https://regexr.com/) patterns) during a migration. These templates are associated with a storage, allowing you to selectively ignore content during migration when that storage is used as the source.

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
This will not remove the exclusion from an existing migration. See the [Remove exclusions from an existing migration](#remove-exclusions-from-an-existing-migration) section for guidance on how to do this.
:::

## Migrate data

### Create migrations

Migrations transfer existing data from the defined source to a target. LiveData Migrator migrates any changes made to the source data while it is being migrated and ensures that the target is up to date with those changes. It does this while continuing to perform the migration.

You will typically create multiple migrations so that you can select specific content from your source storage by Path. You can also migrate to multiple independent storages at the same time by defining multiple migration resources.

To create a migration:

1. Choose a source and target from previously defined [storages](#configure-storage).
1. Choose the Path to set the scope of the migration.
1. Enable the **Auto-start migration** option if you want to start the migration immediately after creation.  
   Migrations can be started at a later point when [viewing migration details](#view-migrations).
1. [Apply any exclusions](#assign-exclusions-to-a-new-migration) to reduce the scope within this Path.
1. Select the **Overwrite** or **Skip if Size Match** setting for the migration.  
   * **Skip if Size Match** - If the file size is identical between the source and target, the file is skipped. If it’s a different size, the whole file is replaced.
   * **Overwrite** - Everything is replaced, even if the file size is identical.

If you've already migrated some data from the same source to the same target, you can choose whether to overwrite all the content (Overwrite) or only migrate new content that isn't already there (Skip if Size Match).

#### Assign exclusions to a new migration

Adding exclusions to a new migration ensures the outcome is consistent with the chosen exclusions.

1. In the new migration page, click **Add new exclusion**
1. Select the appropriate exclusion template from the drop-down list.

The exclusion appears in the list, and can be removed before the migration is started.

### Manage migrations

#### View migrations

The Dashboard displays an overview of migrations and their status, showing what pre-existing data has been moved and data added since the migration started.

Click to View migration to see more detail.

:::note
A migration must be stopped before it can be deleted. A stopped migration can not be resumed.
:::

#### Assign exclusions to an existing migration

Adding exclusions to an existing migration will change the future actions performed for that migration, but will not affect previously migrated content.

1. In the dashboard, select an ongoing migration to view its **Exclusions**.
1. Click **Add** and select the appropriate exclusion template from the drop-down list.

#### Remove exclusions from an existing migration

1. In the dashboard, select an ongoing migration to view its **Exclusions**.
1. Remove any of the exclusions one at a time.

## Bandwidth management

By default, LiveData Migrator will use all network bandwidth available to the server unless a specific limit is applied.

To apply a bandwidth limit between the source and target storage(s), follow the steps below:

1. In the **Storages** list on the dashboard, click the settings for the appropriate storage.
1. Select **Bandwidth Management** under the _Grouping_ list.
1. Uncheck the **Unlimited** option.
1. Define the **Maximum bandwidth limit** and **Unit** (for example: MiB/s), and click **Apply**.

You will need to define a bandwidth limit for each LiveData Migrator server (if you have more than one).
