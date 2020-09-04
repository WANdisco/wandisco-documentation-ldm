---
id: operation-cli
title: Using LiveData Migrator with the Command Line
sidebar_label: CLI
---

This guide teaches you how to create and manage resources that control your migrations using the command line interface (CLI).

If you're new to the concept of LiveData, or want to know what LiveData Migrator does, see the [introduction to LiveData Migrator](./about.md) before learning [how to install](./installation.md) and use LiveData Migrator.

## Before you start

Configure management Access and use SSH to access the action prompt (you can access the CLI as any system user using SSH).

Edit the SSH access properties in the `/etc/wandisco/livedata-migrator/application.properties` file to adjust to your requirements.

Refer to the [SSH access](./configuration.md#ssh-access) section for details about the required properties.

Restart the LiveData Migrator service to make any configuration changes live:

`service livedata-migrator restart`

### Default access

Without any change to configuration, you can login as the `user` user with the password `password` on port `2222`.

```bash title="Example"
$ ssh user@localhost -p 2222
Password authentication
Password: password
```

This starts LiveData Migrator and the action prompt appears.

### Use authorized SSH keys

Configure the LiveData Migrator service to use authorized SSH keys instead of a password by following these steps:

1. Comment out the `ssh.shell.password` configuration property so that password access is disabled.
1. Specify an authorized keys file with `ssh.shell.authorized-public-keys-file` to allow access from authorized clients that hold a matching private key.
1. Restart the LiveData Migrator service afterwards:  
   `service livedata-migrator restart`

## How the LiveData Migrator CLI works

Define the following resources using LiveData Migrator in the CLI to start migrating data:

1. **Source**: Manage your source file system.

1. **Filesystem**: Create and manage file systems (storages) and define them as the source or target of migrations.

1. **Exclusion**: Constrain the content migrated by creating and referencing exclusions during a migration. Exclusion constrain content by file size or by a regular expression match against a file name.

1. **Migration**: A migration references the source and target file systems. Specify the source file system directory path for content to be migrated from, and include any exclusions as needed.

You can find a summary of the commands used for each resource type here. Each command links to the [LiveData Migrator Command Reference](./command-reference.md) page with more details on mandatory and optional parameters (including examples).

### Command line help

Find a full list of commands that can be used at the action prompt with the `help` command. Get command specific help by typing `help <command>` for each command available.

Type the `<tab>` key if you are uncertain whether a command requires an additional parameter, or if you need to provide a specific value. It will help auto-complete parameter values, and display options available for any command.

## Migrate data

### Validate Source

LiveData Migrator migrates data from a source file system. Validate that the correct source file system is registered or delete the existing one (define a new source in the [Add File Systems](#add-file-systems) step).

:::info
The source file system is normally detected on startup. It will not be detected automatically if your Hadoop configuration does not contain the information needed to connect to the Hadoop file system.
:::

You can manage the source file system through these commands.

| Command | Action |
|:---|:---|
| [`source clear`](./command-reference.md#source-clear) | Delete all sources |
| [`source del`](./command-reference.md#source-del) | Delete a source |
| [`source fs show`](./command-reference.md#source-fs-show) | Show the source FileSystem configuration |

### Add File Systems

Add file systems to provide LiveData Migrator with the information needed to read content from your source and migrate content to your target.

A range of different file system types are supported as targets, including [ADLS Gen 2](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction), [HDFS](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html), local file systems, and [S3A](https://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html).

:::note
LiveData Migrator currently supports HDFS file systems as a migration source.

If your source file system was not discovered automatically or you wish to assign a new source file system, use the `--source` parameter with the `filesystem add hdfs` command to add a suitable HDFS source file system.
:::

You can define multiple target file systems, which you can migrate to at the same time.

:::caution
Local file system and Google Cloud Storage functionality are available as a preview and is not yet a supported configuration.
:::

| Command | Action |
|:---|:---|
| [`filesystem add adls2 sharedKey`](./command-reference.md#filesystem-add-adls2-sharedkey) | Add an ADLS Gen 2 file system resource |
| [`filesystem add gcs`](./command-reference.md#filesystem-add-gcs) | Add a Google Cloud Storage file system resource |
| [`filesystem add hdfs`](./command-reference.md#filesystem-add-hdfs) | Add a Hadoop HDFS file system resource |
| [`filesystem add local`](./command-reference.md#filesystem-add-local) | Add a local file system resource |
| [`filesystem add s3a`](./command-reference.md#filesystem-add-s3a) | Add an S3 file system resource |
| [`filesystem clear`](./command-reference.md#filesystem-clear) | Delete all target file systems |
| [`filesystem del`](./command-reference.md#filesystem-del) | Delete a target file system |
| [`filesystem list`](./command-reference.md#filesystem-list) | List of target file systems |
| [`filesystem show`](./command-reference.md#filesystem-show) | Get target file system details |
| [`filesystem types`](./command-reference.md#filesystem-types) | List the types of target file systems available |

### Define Exclusions

Define exclusions to constrain the content migrated from a source file system.

Exclusions need to be associated with migrations. You can do this when you create a migration, or associate exclusions with an existing migration.

| Command | Action |
|:---|:---|
| [`exclusion add file-size`](./command-reference.md#exclusion-add-file-size) | Create a new file size rule |
| [`exclusion add regex`](./command-reference.md#exclusion-add-regex) | Create a new regex exclusion rule |
| [`exclusion del`](./command-reference.md#exclusion-del) | Delete an exclusion rule |
| [`exclusion list`](./command-reference.md#exclusion-list) | List all exclusion rules |
| [`exclusion show`](./command-reference.md#exclusion-show) | Get details for a particular exclusion rule |

Adding exclusions to a new migration ensures the outcome is consistent with the chosen exclusions. Adding exclusions to an existing migration will change the future actions performed for that migration, but will not affect previously migrated content.

### Create and manage Migrations

Create migration resources to define and initiate data migration.

Migration occurs from your source file system to a target defined using a `filesystem` command. Migrations will transfer existing data, as well as any subsequent changes made to the source data (in its scope), while LiveData Migrator remains in operation.

You will typically create multiple migrations so that you can select specific content from your source file system by path/directory. It is also possible to migrate to multiple independent file systems at the same time by defining multiple migration resources.

| Command | Action |
|:---|:---|
| [`migration stop`](./command-reference.md#migration-stop) | Abort a migration |
| [`migration del`](./command-reference.md#migration-del) | Delete a migration |
| [`migration exclusion add`](./command-reference.md#migration-exclusion-add) | Add an exclusion to a migration |
| [`migration exclusion del`](./command-reference.md#migration-exclusion-del) | Remove an exclusion from a migration |
| [`migration list`](./command-reference.md#migration-list) | List running and active migrations |
| [`migration new`](./command-reference.md#migration-new) | Create a new migration |
| [`migration run`](./command-reference.md#migration-run) | Start or resume a migration |
| [`migration show`](./command-reference.md#migration-show) | Get migration details |
| [`status`](./command-reference.md#status) | Get migration status |

#### Migration states

Migrations exist in one of eight states:

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

## Built-In Commands

The built-in commands are always available in a LiveData Migrator command line interactive session. They are unrelated to migration resources and operation (other than `exit`/`quit`), but help you to interact with LiveData Migrator and automate processing through scripts for the action prompt.

See the [Built-In Commands](./command-reference.md#built-in-commands) section in Command Reference for further details of the available commands.

## Using the LiveData Migrator jar (optional)

If you want to try out LiveData Migrator using a quick method, use the `livedata-migrator.jar`. This is an alternative to using the system service and it does not require configuration.

:::important
Use the system service instead for Production deployment as it allows you to maintain long-lived migrations, have a common configuration that survives service restarts, and retain logging information in a central directory.
:::

On the LiveData Migrator host, follow the steps below to run the jar:

1. Switch to the [HDFS superuser](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User).  
   _Example_  
   `su - hdfs`
1. Change to the directory where the jar is located:  
   `cd /opt/wandisco/livedata-migrator`
1. Run the jar file to access the action prompt.
   * If Kerberos is disabled in your environment, run:  
     `java -jar livedata-migrator.jar`
   * If Kerberos is enabled in your environment, you must obtain a ticket before running the jar.  
     _Example_  
     `kinit -kt /etc/security/keytabs/hdfs.keytab hdfs@REALM.COM`  
     Afterwards, run:  
     `java -Dlm.kerberos.is.enabled=true -jar livedata-migrator.jar`
