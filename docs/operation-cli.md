---
id: operation-cli
title: Using LiveData Migrator with the CLI
sidebar_label: CLI
---

You can use the command line interface (CLI) to create and manage resources that control your migrations in LiveData Migrator. The latest version of LiveData Migrator includes the ability to migrate metadata, which is explained in this article.

If you're new to the concept of LiveData, or want to know what LiveData Migrator does, see the [introduction to LiveData Migrator](./about.md) before learning [how to install](./installation.md) and use LiveData Migrator.

## Log in

Log in to the LiveData Migrator CLI using the following command:

```bash
livedata-migrator --host=localhost
```

The command prompt will then load and automatically connect to the LiveData Migrator services located on your host.

## Command line help

Find a full list of commands that can be used at the action prompt with the `help` command. Get command specific help by typing `help <command>` for each command available.

Type the `<tab>` key if you are uncertain whether a command requires an additional parameter, or if you need to provide a specific value. It will help auto-complete parameter values, and display options available for any command.

## Configure storage

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
LiveData Migrator currently supports HDFS file systems as a migration source.

If your source file system was not discovered automatically or you wish to assign a new source file system, use the `--source` parameter with the `filesystem add hdfs` command to add a suitable HDFS source file system.
:::

You can define multiple target file systems, which you can migrate to at the same time.

:::caution
Although present when invoking the `help` command, Local Filesystem functionality is not yet available. This will be coming in a future release.
:::

| Command | Action |
|:---|:---|
| [`filesystem add adls2 oauth`](./command-reference.md#filesystem-add-adls2-oauth) | Add an ADLS Gen 2 file system resource using a service principal and oauth credentials |
| [`filesystem add adls2 sharedKey`](./command-reference.md#filesystem-add-adls2-sharedkey) | Add an ADLS Gen 2 file system resource using access key credentials |
| [`filesystem add gcs`](./command-reference.md#filesystem-add-gcs) | Add a Google Cloud Storage file system resource |
| [`filesystem add hdfs`](./command-reference.md#filesystem-add-hdfs) | Add a Hadoop HDFS file system resource |
| [`filesystem add s3a`](./command-reference.md#filesystem-add-s3a) | Add a S3 file system resource (choose this when using IBM COS) |

### Manage file systems

| Command | Action |
|:---|:---|
| [`filesystem clear`](./command-reference.md#filesystem-clear) | Delete all target file systems |
| [`filesystem del`](./command-reference.md#filesystem-del) | Delete a target file system |
| [`filesystem list`](./command-reference.md#filesystem-list) | List of target file systems |
| [`filesystem show`](./command-reference.md#filesystem-show) | Get target file system details |
| [`filesystem types`](./command-reference.md#filesystem-types) | List the types of target file systems available |

## Configure exclusions

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

## Migrate data

### Create data migrations

Migrate data from your source file system to a target defined using the `migration` command. Migrations will transfer existing data, as well as any subsequent changes made to the source data (in its scope), while LiveData Migrator remains in operation.

You will typically create multiple migrations so that you can select specific content from your source file system by path/directory. It is also possible to migrate to multiple independent file systems at the same time by defining multiple migration resources.

Follow the command links to learn how to set the parameters and see examples.

1. Create a new migration:

   [`migration add`](./command-reference.md#migration-add)

   Apply the [`--auto-start`](./command-reference.md#optional-parameters-5) parameter if you would like the migration to start right away.

1. If you don't have auto-start enabled, manually start the migration:

   [`migration run`](./command-reference.md#migration-run)

### Manage data migrations

| Command | Action |
|:---|:---|
| [`migration stop`](./command-reference.md#migration-stop) | Stop a migration |
| [`migration resume`](./command-reference.md#migration-resume) | Resume a stopped migration |
| [`migration del`](./command-reference.md#migration-del) | Delete a migration |
| [`migration exclusion add`](./command-reference.md#migration-exclusion-add) | Add an exclusion to a migration |
| [`migration exclusion del`](./command-reference.md#migration-exclusion-del) | Remove an exclusion from a migration |
| [`migration list`](./command-reference.md#migration-list) | List running and active migrations |
| [`migration run`](./command-reference.md#migration-run) | Start a migration |
| [`migration show`](./command-reference.md#migration-show) | Get migration details |
| [`status`](./command-reference.md#status) | Get migration status |

### Data migration states

Migrations can be in one of eight states:

`NONSCHEDULED`
: A *non-scheduled migration* has been defined but not yet started. Create a migration in this state by not specifying the `--auto-start` parameter on creation.

`SCHEDULED`
: A *scheduled* migration will start when directed to run.

`STARTING`
: A *starting* migration is being started and will soon begin transferring content to the target.

`RUNNING`
: A *running* migration is scanning through source content and transferring content to the target, as well as responding to change notifications from the source if applicable.

`LIVE`
: A *live* migration has completed scanning through source content, continues to respond to change notifications from the source, and will transfer content to and make changes in the target as required.

`PAUSING`
: A *pausing* migration has been instructed to pause transfer, but is temporarily continuing to make changes to the target.

`PAUSED`
: A *paused* migration has been instructed to pause transfer, and is not transferring content or making other changes to the target.

`ABORTED`
: An *aborted* migration will not make any changes to the target and cannot be run again.

## Connect to metastores or databases (preview)

### Add hive agents

Add hive agents to provide HiveMigrator with the information needed to read content from your source metastore/database and migrate content to your target metastore/database.

A variety of platforms are supported, including [Apache Hive](https://cwiki.apache.org/confluence/display/Hive/Home), [Azure SQL](https://docs.microsoft.com/en-gb/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview), [AWS-hosted database](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/database.html), and local filesystem.

Metadata can be migrated in any direction between these supported metastore and database formats.

| Command | Action |
|:---|:---|
| [`hive agent add azure`](./command-reference.md#hive-agent-add-azure) | Add a hive agent for an Azure SQL database server |
| [`hive agent add filesystem`](./command-reference.md#hive-agent-add-filesystem) | Add a hive agent for a local filesystem |
| [`hive agent add glue`](./command-reference.md#hive-agent-add-glue) | Add a hive agent for an AWS-hosted database server |
| [`hive agent add hive`](./command-reference.md#hive-agent-add-hive) | Add a hive agent for a local or remote Apache Hive metastore |

### Configure existing hive agents

| Command | Action |
|:---|:---|
| [`hive agent configure azure`](./command-reference.md#hive-agent-configure-azure) | Change the configuration of an existing hive agent for the Azure SQL database server |
| [`hive agent configure filesystem`](./command-reference.md#hive-agent-configure-filesystem) | Change the configuration of an existing hive agent for the local filesystem |
| [`hive agent configure glue`](./command-reference.md#hive-agent-configure-glue) | Change the configuration of an existing hive agent for the AWS-hosted database server |
| [`hive agent configure hive`](./command-reference.md#hive-agent-configure-hive) | Change the configuration of an existing hive agent for the Apache Hive metastore |

### Manage hive agents

| Command | Action |
|:---|:---|
| [`hive agent check`](./command-reference.md#hive-agent-check) | Check whether the hive agent can connect to the metastore or database |
| [`hive agent delete`](./command-reference.md#hive-agent-delete) | Delete a hive agent |
| [`hive agent list`](./command-reference.md#hive-agent-list) | List all configured hive agents |
| [`hive agent show`](./command-reference.md#hive-agent-show) | Show the configuration for a hive agent |
| [`hive agent types`](./command-reference.md#hive-agent-types) | List supported hive agent types |

## Define metadata rules (preview)

### Add hive rules

:::important
Ensure that you have [migrated](#migrate-data) the HCFS data for the databases and tables that you want to migrate.

Both HCFS data and associated metadata are needed before successful queries can be run on migrated databases.
:::

Define which databases and tables you want to migrate by creating hive rules.

Create a database pattern and a table pattern using [regex](https://regex101.com/) that will match the databases and tables you want to migrate. For example, using `--database-pattern test*` will match any database with "test" at the beginning of its name, such as `test01`, `test02`, `test03`.

| Command | Action |
|:---|:---|
| [`hive rule add`,`hive rule create`](./command-reference.md#hive-rule-addhive-rule-create) | Create a hive rule that can be used for a migration |

#### Default metadata rule

A default hive rule is created during installation named `DEFAULT`. This has a simple "include all" pattern for databases and for tables:

```text
hive rule show --name DEFAULT

{
  "name": "DEFAULT",
  "dbNamePattern": "*",
  "tableNamePattern": "*"
}
```

When [creating a metadata migration](#create-metadata-migrations), use the default rule to migrate all of your metastore/database content or define and use new rules to migrate a selection of databases and tables.

### Configure existing hive rules

| Command | Action |
|:---|:---|
| [`hive rule configure`](./command-reference.md#hive-rule-configure) | Configure an existing hive rule |

### Manage hive rules

| Command | Action |
|:---|:---|
| [`hive rule delete`](./command-reference.md#hive-rule-delete) | Delete a hive rule |
| [`hive rule list`](./command-reference.md#hive-rule-list) | List all hive rules |
| [`hive rule show`](./command-reference.md#hive-rule-show) | Show the configuration of a hive rule |

## Migrate metadata (preview)

### Create metadata migrations

Migrate metadata from your source metastore/database to a target metastore/database using the `hive migration` command. Migrations will transfer existing metadata, as well as any subsequent changes made to the source metadata (in its scope), while HiveMigrator remains in operation.

Define the source and target using the [hive agent names](#add-hive-agents), and apply the [hive rule names](#add-hive-rules) to the migration.

Follow the command links to learn how to set the parameters and see examples.

1. Create a new hive migration:

   [`hive migration add`](./command-reference.md#hive-migration-add)

   Apply the [`--auto-start`](./command-reference.md#optional-parameters-10) parameter if you would like the migration to start right away.

1. If you don't have auto-start enabled, manually start the migration:

   [`hive migration start`](./command-reference.md#hive-migration-start)

### Manage metadata migrations

| Command | Action |
|:---|:---|
| [`hive migration delete`](./command-reference.md#hive-migration-delete) | Delete a hive migration |
| [`hive migration list`](./command-reference.md#hive-migration-list) | List all hive migrations |
| [`hive migration pause`](./command-reference.md#hive-migration-pause) | Pause a hive migration or a list of hive migrations |
| [`hive migration pause --all`](./command-reference.md#hive-migration-pause---all) | Pause all hive migrations |
| [`hive migration resume`](./command-reference.md#hive-migration-resume) | Resume a hive migration or a list of hive migrations |
| [`hive migration resume --all`](./command-reference.md#hive-migration-resume---all) | Resume all hive migrations |
| [`hive migration show`](./command-reference.md#hive-migration-show) | Display information about a hive migration |
| [`hive migration start`](./command-reference.md#hive-migration-start) | Start a hive migration or a list of hive migrations |
| [`hive migration start --all`](./command-reference.md#hive-migration-start---all) | Start all hive migrations |
| [`hive migration status`](./command-reference.md#hive-migration-status) | Show the status of a hive migration or a list of hive migrations |
| [`hive migration status --all`](./command-reference.md#hive-migration-status---all) | Show the status of all hive migrations |
| [`hive migration stop`](./command-reference.md#hive-migration-stop) | Stop a hive migration or a list of hive migrations |
| [`hive migration stop --all`](./command-reference.md#hive-migration-stop---all) | Stop all hive migrations |

## Add pending regions

LiveData Migrator uses pending regions to keep your directories up to date if they change during data migrations. If directories are updated while being migrated, the changed paths on the source filesystem are tracked by the migration so they can be re-scanned for updates when the migration finishes.

LiveData Migrator collects pending regions automatically during a migration, but you can manually add them if you want the directories to be re-scanned after further updates. You can also re-run the entire migration by making the root directory the pending region.

[`migration pending-region add`](./command-reference.md#migration-pending-region-add)

## Bandwidth management

Limit the total amount of bandwidth LiveData Migrator can use by using the `bandwidth policy` command. Once defined, the bandwidth limit will apply immediately to all migrations (new and ongoing).

Only one bandwidth policy can be active at a time. The default policy is unlimited bandwidth.

| Command | Action |
|:---|:---|
| [`bandwidth policy del`](./command-reference.md#bandwidth-policy-del) | Delete a bandwidth policy |
| [`bandwidth policy set`](./command-reference.md#bandwidth-policy-set) | Define the bandwidth policy |
| [`bandwidth policy show`](./command-reference.md#bandwidth-policy-show) | Get details for the current bandwidth policy |

## Built-in commands

The built-in commands are always available in a LiveData Migrator command line interactive session. They are unrelated to migration resources and operation (other than `exit`/`quit`), but help you to interact with LiveData Migrator and automate processing through scripts for the action prompt.

See the [Built-In Commands](./command-reference.md#built-in-commands) section in Command Reference for further details of the available commands.
