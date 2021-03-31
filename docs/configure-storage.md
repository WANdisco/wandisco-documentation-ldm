---
id: configure-storage
title: Configure storage
sidebar_label: Configure storage
---

The first step in the process of migrating data is to configure your storage, which defines where data is being migrated from (the source) and to (the target).

* Supported sources are: **HDFS**
* Supported targets are: **ADLS Gen2**, **S3**, **Google Cloud Storage**, **IBM Cloud Object Storage (S3)** and **HDFS**

Configure storage with either the [UI](#configure-storage-with-the-ui) or the [CLI](#configure-storage-with-the-cli).

## Configure storage with the UI

The Storage panel shows the underlying storage used by LiveData Migrator as either a source or target. LiveData Migrator supports one source and one or more targets. Each storage displays its associated processes, such as which LiveData Migrator is used to access it.

Use the Storage panel to:

* View and configure the source and target storages.
* Add further targets.
* Add additional LiveData Migrator servers and [LiveData Plane](https://wandisco.github.io/wandisco-documentation/docs/quickstarts/preparation/get-started) servers.
* Configure S3-compatible Targets using the [Hadoop S3A configuration](http://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html) exposed in the UI.
* Connect to additional LiveData Migrator or LiveData Plane instances and configure their respective storages.

### Configure source storage

:::info
The HDFS source file system is normally detected on startup. It will not be detected automatically if Kerberos is enabled or your Hadoop configuration does not contain the information needed to connect to the Hadoop file system.

Hadoop should be installed globally to allow LiveData Migrator to access the configuration during automatic detection. Alternatively, if you're running LiveData Migrator for a single user's environment, Hadoop should be made available to the agent running the service on the PATH environment variable.
:::

If Kerberos is enabled, on the Storage panel, select to configure your _Unknown source_ and provide your source HDFS configuration:

* **File System ID** - Provide a name for your source storage.
* **Default FS** - Provide the `fs.defaultFS` value from your HDFS configuration.
* Kerberos Configuration
  * **Kerberos Principal** - Provide a principal that will map to the [HDFS super user](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User) using [auth_to_local](https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/SecureMode.html#Mapping_from_Kerberos_principals_to_OS_user_accounts) rules.
  * **Kerberos Keytab Location** - Provide the path to the Kerberos keytab containing the **Kerberos Principal**. This must be accessible to the local system user running the LiveData Migrator service (default is `hdfs`).
* Additional Configuration
  * **Provide a path to files** - Provide the directory or directories containing your HDFS configuration (such as the `core-site.xml` and `hdfs-site.xml`) on your LiveData Migrator host's local filesystem.
  * **Additional Configuration** (Optional) - Override properties or specify additional properties by adding Key/Value pairs.

### Add target storages

Selecting to configure your _Target_ storage on the Storage panel, see the links below for the configuration needed for each platform:

* ADLS Gen2 - The configuration needed will depend on the **Authentication Type** chosen:
  * [Shared Key](./command-reference.md#mandatory-parameters-2)
  * [Service Principal (OAuth2)](./command-reference.md#mandatory-parameters-1)
* [S3 / IBM Cloud Object Storage (S3)](./command-reference.md#mandatory-parameters-5)
* [Google Cloud Storage](./command-reference.md#mandatory-parameters-3)
* [HDFS](./command-reference/#mandatory-parameters-4)

## Configure storage with the CLI

### Validate your source

LiveData Migrator migrates data from a source file system. Validate that the correct source file system is registered or delete the existing one (you'll define a new source in the [Add File Systems](#add-file-systems) step).

:::info
The source file system is normally detected on startup. It will not be detected automatically if Kerberos is enabled or your Hadoop configuration does not contain the information needed to connect to the Hadoop file system.

If Kerberos is enabled, use the [`filesystem auto-discover-source hdfs`](./command-reference.md#filesystem-auto-discover-source-hdfs) command to provide your Kerberos credentials and auto-discover your source HDFS configuration.
:::

You can manage the source file system through these commands.

| Command | Action |
|:---|:---|
| [`source clear`](./command-reference.md#source-clear) | Delete all sources |
| [`source del`](./command-reference.md#source-del) | Delete a source |
| [`source fs show`](./command-reference.md#source-fs-show) | Show the source FileSystem configuration |
| [`filesystem auto-discover-source hdfs`](./command-reference.md#filesystem-auto-discover-source-hdfs) | Provide your Kerberos credentials to access your source HDFS configuration |

### Add file systems

Add file systems to provide LiveData Migrator with the information needed to read content from your source and migrate content to your target.

A range of different file system types are supported as targets, including [ADLS Gen 2](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction), [HDFS](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html), [GCS](https://cloud.google.com/storage), and [S3A](https://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html).

:::note
LiveData Migrator currently supports HDFS as a migration source.

If your source file system was not discovered automatically or you wish to assign a new source file system, use the `--source` parameter with the `filesystem add hdfs` command to add a suitable HDFS source file system.
:::

You can define multiple target file systems, which you can migrate to at the same time.

:::caution
Although present when invoking the `help` command, Local Filesystem functionality is not yet available. This will be coming in a future release.
:::

| Command | Action |
|:---|:---|
| [`filesystem add adls2 oauth`](./command-reference.md#filesystem-add-adls2-oauth) | Add an ADLS Gen 2 filesystem resource using a service principal and oauth credentials |
| [`filesystem add adls2 sharedKey`](./command-reference.md#filesystem-add-adls2-sharedkey) | Add an ADLS Gen 2 filesystem resource using access key credentials |
| [`filesystem add gcs`](./command-reference.md#filesystem-add-gcs) | Add a Google Cloud Storage filesystem resource |
| [`filesystem add hdfs`](./command-reference.md#filesystem-add-hdfs) | Add an HDFS resource |
| [`filesystem add s3a`](./command-reference.md#filesystem-add-s3a) | Add an S3 filesystem resource (choose this when using IBM COS) |

### Manage file systems

| Command | Action |
|:---|:---|
| [`filesystem clear`](./command-reference.md#filesystem-clear) | Delete all target file systems |
| [`filesystem del`](./command-reference.md#filesystem-del) | Delete a target file system |
| [`filesystem list`](./command-reference.md#filesystem-list) | List of target file systems |
| [`filesystem show`](./command-reference.md#filesystem-show) | Get target file system details |
| [`filesystem types`](./command-reference.md#filesystem-types) | List the types of target file systems available |

## Configure storage for one-time migrations

It's possible to create a source filesystem that is not tracked by LiveData Migrator for changes during a migration. Migrations created from this type of source will become [one-time migrations](./one-time-migration.md) by default. Note that it is not necessary to create a file storage of this type to create a one-time migration.

### Create storage for one-time migrations with the UI

To create a source filesystem for a one-time migration, uncheck the **Migrate Live Events** box when you configure the storage. When creating a migration from the UI from the storage created, the UI will uncheck the **live migration** option and prevent it from being enabled.

### Create storage for one-time migrations with the CLI

LiveData Migrator will only perform *read* tasks on a source filesystem created for one-time migrations. It will not check the source storage for modifications to data during transfer. Any migration that uses the source storage will automatically become a one-time migration, and will have the `scanOnly` flag applied.

To create a source for one-time migrations, add the `scanOnly` flag during source creation:

```text="Code"
filesystem add hdfs --source --scanOnly ...
```

:::note
The account used to connect to a source storage intended for one-time migrations only requires read access. Write access is not necessary.
:::

## Next Steps

Once you have your source and target storage configured, you're ready to [migrate data](./create-migration.md). If you want migrate data to a different path on your target filesystem, [create path mappings](./create-path-mappings.md) first.

If you want to exclude specific file sizes or file names from your data migrations, [define exclusions](./configure-exclusions.md).
