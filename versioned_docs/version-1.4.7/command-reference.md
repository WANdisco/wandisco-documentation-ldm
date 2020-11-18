---
id: command-reference
title: Command Reference
sidebar_label: Command Reference
---

Find a comprehensive description of each command available from the LiveData Migrator action prompt here. Review the [LiveData Migrator Operation](./operation-cli.md) guide for information on how to use the commands to perform migration.

Each command description below includes the information available from the action prompt using the `help` command. Tab-completion will also give you guidance when entering commands on the available options and help auto-complete the needed values.

:::info
Should you need clarification on any configuration items shown in the UI, you will also find them here (located with the equivalent CLI mandatory and optional parameters).
:::

## Source Commands

----

### `source clear`

Clear all information that LiveData Migrator maintains about the source file system by issuing the `source clear` command. This will allow you to define an alternative source to one previously defined or detected automatically.

```text title="Delete all sources"
SYNOPSYS
        source clear
```

----

### `source del`

Use `source del` to delete information about a specific source file system by identifier. You can obtain the identifier for a source file system with the output of the `source fs show` command.

```text title="Delete a source"
SYNOPSYS
        source del [--file-system-id] string

OPTIONS
        --file-system-id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--file-system-id`** The identifier of the source file system resource to delete. This is referenced in the UI as **Storage Name**.

#### Example

```text
source del --file-system-id auto-discovered-source-hdfs
```

----

### `source fs show`

Get information about the source file system configuration.

```text title="Show the source file system configuration"
SYNOPSYS
        source fs show [--verbose]

OPTIONS
        --verbose
                [Optional, default = false]
```

#### Optional Parameters

* **`--verbose`** Include all configuration properties for the source file system in the response.

## File System Commands

----

### `filesystem add adls2 sharedKey`

Add an Azure Data Lake Storage Gen 2 container as a migration target using the `filesystem add adls2 sharedKey` command, which requires credentials in the form of an account key.

```text title="Add an ADLS Gen 2 file system"
SYNOPSYS
        filesystem add adls2 sharedKey [--file-system-id] string
                                       [--storage-account-name] string
                                       [--fs.azure.shared.key] string
                                       [--container.name] string
                                       [--insecure]
                                       [[--properties-file] list]
                                       [[--properties] list]

OPTIONS
        --file-system-id  string

                [Mandatory]

        --storage-account-name  string

                [Mandatory]

        --fs.azure.shared.key  string

                [Mandatory]

        --container.name  string

                [Mandatory]

        --insecure
                [Optional, default = false]

        --properties-file  list
                Load properties from this file
                [Optional, default = <none>]

        --properties  list
                Override properties in comma separated key/value list
                [Optional, default = <none>]
```

#### Mandatory Parameters

* **`--file-system-id`** The identifier to give the new file system resource. This is referenced in the UI as **Storage Name**.
* **`--storage-account-name`** The name of the ADLS Gen 2 storage account to target. This is referenced in the UI as **Account Name**.
* **`--fs.azure.shared.key`** The shared account key to use as credentials to write to the storage account. This is referenced in the UI as **Access Key**.
* **`--container.name`** The name of the container in the storage account to which content will be migrated. This is referenced in the UI as **Container Name**.

#### Optional Parameters

* **`--insecure`** When provided, LiveData Migrator will not use TLS to encrypt communication with ADLS Gen 2. This may improve throughput, but should only be used when you have other means of securing communication. This is referenced in the UI when **Use Secure Protocol** is unchecked.
* **`--properties-files`** Reference a list of existing properties files, each that contains Hadoop configuration properties in the format used by `core-site.xml` or `hdfs-site.xml`.
* **`--properties`** Specify properties to use in a comma-separated key/value list.

#### Example

```text
filesystem add adls2 sharedKey --file-system-id mytarget --storage-account-name myadls2 --container.name lm2target --fs.azure.shared.key Yi8NxHGqoQ79DBGLVn+COK/sRDwbNqAREDACTEDaMxRkvXt2ijUtAkVqVCBj/vaS/NbzR5rtjE2CZ31eIopUVA==
```

----

### `filesystem add hdfs`

Add a Hadoop Distributed File System as either a migration source or target using the `filesystem add hdfs` command.

Creating an HDFS file system resource with this command will normally only be used when migrating to that HDFS as a target (rather than another storage service like ADLS Gen 2). LiveData Migrator will normally auto-detect the *source* HDFS file system when started from the command line. When started as a system service, you will need to define an HDFS source with this command, including the `--source` parameter.

```text title="Add a Hadoop Distributed File System"
SYNOPSYS
        filesystem add hdfs [--file-system-id] string
                            [--fs.defaultFS] string
                            [[--user] string]
                            [--source]
                            [[--properties-files] list]
                            [[--properties] list]

OPTIONS
        --file-system-id  string
                Name of the filesystem
                [Mandatory]

        --fs.defaultFS  string

                [Mandatory]

        --user  string
                FileSystem username to perform migration actions as
                [Optional, default = <none>]

        --source        Add this filesystem as the source for migrations
                [Optional, default = false]

        --properties-files  list
                Load properties from these files
                [Optional, default = <none>]

        --properties  list
                Override properties in comma separated key/value list
                [Optional, default = <none>]
```

#### Mandatory Parameters

* **`--file-system-id`** The identifier to give the new file system resource. This is referenced in the UI as **Storage Name**.
* **`--fs.defaultFS`** A string that defines how LiveData Migrator accesses HDFS. This is referenced in the UI as **Default FS**.  
  It can be specified in a number of forms:
  1. As a single HDFS URI, such as `hdfs://192.168.1.10:8020` (using an IP address) or `hdfs://myhost.localdomain:8020` (using a hostname).
  1. As a comma-separated list of HDFS URIs, like `hdfs://nn1.localdomain:8020,hdfs://nn2.localdomain:8020` to allow for integration with HA-enabled Hadoop environments.
  1. As an HDFS URI that references a nameservice ID defined in the cluster properties, like `hdfs://mynameservice`, where there is a configuration property for the cluster that defines the value of the `dfs.nameservices` value to include that nameservice ID, like `mynameservice` and all required configuration properties for that nameservice, like `dfs.ha.namenodes.mynameservice`, `dfs.namenode.rpc-address.mynameservice.nn1`, and `dfs.namenode.http-address.mynameservice.nn1`, etc.

#### Optional Parameters

* **`--user`** The name of the HDFS user to be used when performing operations against the file system. This user must be an HDFS super user, such as `hdfs`.
* **`--source`** Provide this parameter to use the file system resource created as a source.  This is referenced in the UI when selecting the **Add Source** option.
* **`--properties-files`** Reference a list of existing properties files, each that contains Hadoop configuration properties in the format used by `core-site.xml` or `hdfs-site.xml`.
* **`--properties`** Specify properties to use in a comma-separated key/value list.

#### Examples

```text
filesystem add hdfs --file-system-id mysource --source --fs.defaultFS hdfs://myhost.localdomain:8020
```

```text
filesystem add hdfs --file-system-id mysource --source --fs.defaultFS hdfs://mynameservice --properties-files /etc/hadoop/conf/core-site.xml,/etc/hadoop/conf/hdfs-site.xml
```

----

### `filesystem add s3a`

Add an S3 bucket as a target file system using the `filesystem add s3a` command.

```text tile="Add an S3 file system"
SYNOPSYS
        filesystem add s3a [--file-system-id] string
                           [--bucket-name] string
                           [[--access-key] string]
                           [[--secret-key] string]
                           [--credentials-provider] string
                           [[--properties-files] list]
                           [[--properties] list]

OPTIONS
        --file-system-id  string

                [Mandatory]

        --bucket-name  string

                [Mandatory]

        --access-key  string

                [Optional, default = <none>]

        --secret-key  string

                [Optional, default = <none>]

        --credentials-provider  string

                [Optional, default = <none>]

        --properties-files  list
                Load properties from these files
                [Optional, default = <none>]

        --properties  list
                Override properties in comma separated key/value list
                [Optional, default = <none>]
```

#### Mandatory Parameters

* **`--file-system-id`** The identifier for the new file system resource. This is referenced in the UI as **Storage Name**.
* **`--bucket-name`** The name of your S3 bucket. This is referenced in the UI as **Bucket Name**.
* **`--credentials-provider`** The Java class name of a credentials provider for authenticating with the S3 endpoint. This is referenced in the UI as **Credentials Provider**.  
  The Provider options available include:
  * **`org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider`**

    Use this provider to offer credentials as an access key and secret access key with the `--access-key` and `--secret-key` Parameters.

  * **`com.amazonaws.auth.InstanceProfileCredentialsProvider`**

    Use this provider when running LiveData Migrator on an EC2 instance that has [been assigned an IAM role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html) with policies that allow it to access the S3 bucket.

  * **`com.amazonaws.auth.DefaultAWSCredentialsProviderChain`**

    A commonly-used credentials provider chain that looks for credentials in this order:

    * Environment Variables - `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`, or `AWS_ACCESS_KEY` and `AWS_SECRET_KEY`.
    * Java System Properties - `aws.accessKeyId` and `aws.secretKey`.
    * Web Identity Token credentials from the environment or container.
    * Credential profiles file at the default location (`~/.aws/credentials`) shared by all AWS SDKs and the AWS CLI.
    * Credentials delivered through the Amazon EC2 container service if `AWS_CONTAINER_CREDENTIALS_RELATIVE_URI` environment variable is set and security manager has permission to access the variable.
    * Instance profile credentials delivered through the Amazon EC2 metadata service.

<h4 id="s3a-optional-parameters">Optional parameters</h4>

* **`--access-key`** When using the `org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider` credentials provider, specify the access key with this parameter. This is referenced in the UI as **Access Key**.
* **`--secret-key`** When using the `org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider` credentials provider, specify the secret key using this parameter. This is referenced in the UI as **Secret Key**.
* **`--properties-files`** Reference a list of existing properties files, each that contains Hadoop configuration properties in the format used by `core-site.xml` or `hdfs-site.xml`.
* **`--properties`** Specify properties to use in a comma-separated key/value list.

:::info
When adding properties via the API or UI, for example to set a custom `fs.s3a.endpoint`, it is required to also set the following properties manually. They are added by default when using the CLI.
:::
* `fs.s3a.impl` (default `org.apache.hadoop.fs.s3a.S3AFileSystem`)
* `fs.AbstractFileSystem.s3a.impl` (default `org.apache.hadoop.fs.s3a.S3A`)
* `fs.s3a.user.agent.prefix` (default `WANdisco/LiveDataMigrator`)
* `fs.s3a.impl.disable.cache` (default `true`)
* `fs.hadoop.tmp.dir`(default `tmp`)

#### Example

```text
filesystem add s3a --file-system-id mytarget --bucket-name mybucket1 --credentials-provider org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider --access-key B6ZAI18Z3UIO002Y777A --secret-key OP87Chokisf4hsTP0Q5j95yI904lT7AaDBGJpp0D
```

----

### `filesystem clear`

Delete all target file system references with the `filesystem clear`. This leaves any migrated content intact in those targets, but removes all resources that act as references to the target file systems.

```text title="Delete all targets"
NAME
        filesystem clear - Delete all targets.

SYNOPSYS
        filesystem clear
```

----

### `filesystem del`

Delete a specific file system resource by identifier. This leaves all migrated content intact at that target, but removes the resource that acts as a reference to that file system.

```text title="Delete a target"
SYNOPSYS
        filesystem del [--file-system-id] string

OPTIONS
        --file-system-id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--file-system-id`** The identifier of the file system resource to delete. This is referenced in the UI as **Storage Name**.

#### Example

```text
filesystem del --file-system-id mytarget
```

----

### `filesystem list`

List defined file system resources.

```text title="List targets"
SYNOPSYS
        filesystem list [--verbose]

OPTIONS
        --verbose
                [Optional, default = false]
```

#### Mandatory Parameters

* **`--verbose`** Include all properties for each file system in the JSON result.

----

### `filesystem show`

View details for a file system resource.

```text title="Get target details"
SYNOPSYS
        filesystem show [--file-system-id] string  [--verbose]

OPTIONS
        --file-system-id  string

                [Mandatory]

        --verbose
                [Optional, default = false]
```

#### Mandatory Parameters

* **`--file-system-id`** The identifier of the file system resource to show. This is referenced in the UI as **Storage Name**.

#### Example

```
filesystem show --file-system-id mytarget
```

----

### `filesystem types`

View information about the file system types available for use with LiveData Migrator. File systems that provide an `eventListenerType` other than `no-op` can be used in migrations that will migrate ongoing changes during operation.

```text title="List the types of target file systems available"
SYNOPSYS
        filesystem types
```

## Exclusion Commands

----

### `exclusion add file-size`

Create an exclusion that can be applied to migrations to constrain the files transferred by a policy based on file size. Once associated with a migration using [`migration exclusion add`](#migration-exclusion-add), files that match the policy will not be migrated.

```text title="Create a new exclusion by file size policy"
SYNOPSYS
        exclusion add file-size [--id] string
                                [--description] string
                                [--value] long
                                [--unit] string

OPTIONS
        --id  string

                [Mandatory]

        --description  string

                [Mandatory]

        --value  long

                [Mandatory]

        --unit  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--id`** The identifier for the exclusion policy. This is referenced in the UI as **Name**.
* **`--description`** A user-friendly description for the policy. This is referenced in the UI as **Description**.
* **`--value`** The numerical value for the file size, in a unit defined by. This is referenced in the UI as **Value**.
* **`--unit`** A string to define the unit used, either `B` for bytes, `GB` for gibibytes, `KB` for kibibytes, `MB` for mebibytes, `PB` for pebibytes, or `TB` for tebibytes.

#### Example

```text
exclusion add file-size --id 100mbfiles --description "Files greater than 100 MB" --value 100 --unit MB
```

----

### `exclusion add regex`

Create an exclusion that can be applied to migrations to constrain the files transferred by a policy based on matching file name by regular expression. Once associated with a migration using [`migration exclusion add`](#migration-exclusion-add), files that match the policy will not be migrated.

```text title="Create a new exclusion by regular expression policy"
SYNOPSYS
        exclusion add regex [--id] string
                            [--description] string
                            [--regex] string

OPTIONS
        --id  string

                [Mandatory]

        --description  string

                [Mandatory]

        --regex  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--id`** The identifier for the exclusion policy. This is referenced in the UI as **Name**.
* **`--description`** A user-friendly description for the policy. This is referenced in the UI as **Description**.
* **`--regex`** A regular expression in a syntax similar to that used by Perl. This is referenced in the UI as **Regex**.

#### Example

```text
exclusion add regex --description "No paths that start with test"  --id exclusion1 --regex ^test\.*
```

#### Using backslash characters within `--regex` parameter

If you wish to use a `\` character as part of your regex value, you must escape this character with an additional backslash.

```text title="Example"
exclusion add regex --description "No paths that start with a backslash followed by test"  --id exclusion2 --regex ^\\test\.*
```

The response displayed if running through the CLI will **not** hide the additional backslash. However, the internal representation will be as expected within LiveData Migrator (it will read as `^\test.*`).

This workaround is not required for API inputs, as it only affects the [Spring Shell](https://docs.spring.io/spring-shell/docs/current-SNAPSHOT/reference/htmlsingle/#quotes-handling) implementation used for the CLI.

----

### `exclusion del`

Delete an exclusion policy so that it is no longer available for migrations.

```title text="Delete an exclusion policy"
NAME
        exclusion del - Delete an exclusion rule.

SYNOPSYS
        exclusion del [--id] string

OPTIONS
        --id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--id`** The identifier for the exclusion policy to delete. This is referenced in the UI as **Name**.

#### Example

```text
exclusion del --id exclusion1
```

----

### `exclusion list`

List all exclusion policies defined.

```text title="List all exclusion policies"
NAME
        exclusion list - List all exclusion rules.

SYNOPSYS
        exclusion list
```

----

### `exclusion show`

Get details for an individual exclusion policy by identifier.

```text title="Get details for a specific exclusion rule"
SYNOPSYS
        exclusion show [--id] string

OPTIONS
        --id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--id`** The identifier for the exclusion policy to show. This is referenced in the UI as **Name**.

#### Example

```text
exclusion show --id 100mbfiles
```

## Migration Commands

----

### `migration stop`

Stop a migration from transferring and content to its target, placing it into the `STOPPED` state. You cannot resume a stopped migration.

```text title="Stop a migration"
SYNOPSYS
        migration stop [--migration-id] string

OPTIONS
        --migration-id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--migration-id`** The identifier of the migration to stop.

#### Example

```text
migration stop --migration-id 4ffa620b6ebb0cd34f2c591220d93830f91ccc7e
```

----

### `migration del`

Delete a stopped migration resource.

```text title="Delete a migration"
SYNOPSYS
        migration del [--migration-id] string

OPTIONS
        --migration-id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--migration-id`** The identifier of the migration to delete.

#### Example

```text
migration del --migration-id 4ffa620b6ebb0cd34f2c591220d93830f91ccc7e
```

----

### `migration exclusion add`

Associate an exclusion resource with a migration so that the exclusion policy applies to items processed for the migration. Exclusions must be associated with a migration before they take effect.

```text title="Add an exclusion to a migration"
SYNOPSYS
        migration exclusion add [--migration-id] string
                                [--exclusion-id] string

OPTIONS
        --migration-id  string

                [Mandatory]

        --exclusion-id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--migration-id`** The identifier of the migration with which to associate the exclusion.
* **`--exclusion-id`** The identifier of the exclusion to associate with the migration. This is referenced in the UI as **Name**.

#### Example

```text
migration exclusion add --migration-id 4ffa620b6ebb0cd34f2c591220d93830f91ccc7e --exclusion-id myexclusion1
```

----

### `migration exclusion del`

Remove an exclusion from association with a migration so that its policy no longer applies to items processed for the migration.

```text title="Remove an exclusion from a migration"
SYNOPSYS
        migration exclusion del [--migration-id] string
                                [--exclusion-id] string

OPTIONS
        --migration-id  string

                [Mandatory]

        --exclusion-id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--migration-id`** The identifier of the migration from which to remove the exclusion.
* **`--exclusion-id`** The identifier of the exclusion to remove from the migration. This is referenced in the UI as **Name**.

#### Example

```text
migration exclusion del --migration-id 4ffa620b6ebb0cd34f2c591220d93830f91ccc7e --exclusion-id myexclusion1
```

----

### `migration list`

Present the list of all migrations defined.

```text title="List running and active migrations"
SYNOPSYS
        migration list
```

----

### `migration new`

Create a new migration to initiate data migration from your source file system.

```text title="Create a new migration"
SYNOPSYS
        migration new [--path] string
                      [--target] string
                      [--migration-id] string
                      [--exclusions] string
                      [--auto-start]
                      [--action-policy] string

OPTIONS
        --path  string

                [Mandatory]

        --target  string

                [Mandatory]

        –-migration-id  string

                [Mandatory]

        --exclusions  string

                [Optional, default = <none>]

        --auto-start
                [Optional, default = false]

        --action-policy  string
                [Optional, default = com.wandisco.livemigrator2.migration.OverwriteActionPolicy]
```

#### Mandatory Parameters

* **`--path`** Defines the source file system directory that is the scope of the migration. All content (other than that excluded) will be migrated to the target. This is referenced in the UI as **Path for {source-filesystem}**.
* **`--target`** Specifies the name of the target file system resource to which migration will occur. This is referenced in the UI as **Target**.
* **`--migration-id`** Provide an identifier for the new migration.

#### Optional Parameters

* **`--exclusions`** A comma-separated list of exclusions by name. This is referenced in the UI as **Add new exclusion**.
* **`--auto-start`** Provide this parameter if you want the migration to start immediately. If not provided, the migration will only take effect once run. This is referenced in the UI as **Auto-start migration**.
* **`--action-policy`** This parameter determines what happens if the migration encounters content in the target path with the same name and size. This is referenced in the UI as **Skip Or Overwrite Settings**.  
  There are two options available:
  1. **`com.wandisco.livemigrator2.migration.OverwriteActionPolicy`** _(default policy)_  
     Every file is replaced, even if file size is identical on the target storage. This is referenced in the UI as **Overwrite**.
  1. **`com.wandisco.livemigrator2.migration.SkipIfSizeMatchActionPolicy`**  
     If the file size is identical between the source and target, the file is skipped. If it’s a different size, the whole file is replaced. This is referenced in the UI as **Skip if Size Match**.

#### Example

```text
migration new --path /repl1 --target mytarget –-migration-id myNewMigration --exclusions 100mbfiles
```

----

### `migration run`

Start a migration that was created without the `--auto-start` parameter.

```text title="Start a migration"
SYNOPSYS
        migration run [--migration-id] string

OPTIONS
        --migration-id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--migration-id`** The identifier of the migration to run.

#### Example

```text
migration run –-migration-id myNewMigration
```

----

### `migration show`

Provide a JSON description of a specific migration.

```text title="Get migration details"
NAME
        migration show - Get migration details.

SYNOPSYS
        migration show [--migration-id] string

OPTIONS
        --migration-id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--migration-id`** The identifier of the migration to show.

#### Example

```text
migration show --migration-id myNewMigration
```

----

### `status`

Get a text description of the overall status of migrations. Information is provided on the following:

* Total number of migrations defined.
* Average bandwidth being used over 10s, 60s, and 300s intervals.
* Peak bandwidth observed over 300s interval.
* Average file transfer rate per second over  10s, 60s, and 300s intervals.
* Peak file transfer rate per second over a 300s interval.
* List of live migrations with source path and migration id.
* List of running migrations with source path and migration id.
* List of non-running migrations source source path and migration id.

```text title="Get migration status"
NAME
        status - Get migration status.

SYNOPSYS
        status
```

#### Examples

```text
status

Total Migrations:  1
Average Bandwidth: 0.00 Gb/s, 0.00 Gb/s, 0.00 Gb/s
Peak Bandwidth:    0.00 Gb/s
Average Files/s:   0, 0, 0
Peak Files/s:      0

Live: 0

Running: 0

Ready: 1
     /repl1 5c7271676c8f858ad11011bfa155fc8e43b8fe32
```

## Built-in Commands

----

### `clear`

Clear the interactive action prompt screen output with the `clear` command. You can also type `<Ctrl-L>` to achieve the same, even while typing another command.

```text title="Clear the shell screen"
SYNOPSYS
        clear
```

----

### `echo`

Prints whatever text that you write to the console. This can be used to sanity check a command before running it (for example: `echo migration new --path /repl1 --target mytarget –-migration-id myNewMigration --exclusions 100mbfiles`).

```text title="Print message"
SYNOPSYS
        echo [--message] string

OPTIONS
        --message  string

                [Mandatory]
```

----

### `exit` or `quit`

Entering either `exit` or `quit` will stop operation of LiveData Migrator when it is run from the command line. All processing will cease, and you will be returned to your system shell.

If your LiveData Migrator command line is connected to a LiveData Migrator system service, this command will end your interactive session with that service, which will remain in operation to continue processing Live migrations.

If this command is encountered during non-interactive processing of input (such as when you pipe input to an instance as part of another shell script) no further commands contained in that input will be processed.

```text title="Exit the shell"
SYNOPSYS
        exit

ALSO KNOWN AS
        quit
```

----

### `help`

Use the `help` command to get details of all commands available from the action prompt.

```text title="Display help about available commands"
SYNOPSYS
        help [[-C] string]

OPTIONS
        -C or --command  string
                The command to obtain help for.
                [Optional, default = <none>]
```

#### Optional Parameters

* **`--command`**, **`-C`** The command for which help information is wanted

#### Example

:::caution
Although present when invoking the `help` command, Google Cloud Storage and Local Filesystem functionality is not yet available. This will be coming soon in a future release.
:::

```text
help
AVAILABLE COMMANDS

Built-In Commands
 clear: Clear the shell screen.
 echo: Print message
 exit, quit: Exit the shell.
 help: Display help about available commands.
 history: Display or save the history of previously run commands
 script: Read and execute commands from a file.
 stacktrace: Display the full stacktrace of the last error.

Exclusion Commands
 exclusion add file-size: Create a new file size rule.
 exclusion add regex: Create a new regex exclusion rule.
 exclusion del: Delete an exclusion rule.
 exclusion list: List all exclusion rules.
 exclusion show: Get details for a particular exclusion rule.

Filesystem Commands
 filesystem add adls2 sharedKey: Add an ADLS2 via HCFS API FileSystem With Shared Key
 filesystem add gcs: Add a Google Cloud Storage FileSystem
 filesystem add hdfs: Add an Hadoop HDFS FileSystem
 filesystem add local: Add an Local FileSystem via HCFS FileSystem
 filesystem add s3a: Add an S3A via HCFS API FileSystem.
 filesystem clear: Delete all targets.
 filesystem del: Delete a target.
 filesystem list: List of targets.
 filesystem show: Get target details.
 filesystem types: List the types of target Filesystems available

Migration Commands
 migration del: Delete a migration.
 migration exclusion add: Add an exclusion to a migration.
 migration exclusion del: Remove an exclusion from a migration.
 migration list: List running and active migrations.
 * migration new: Create a new migration.
 migration run: Start or resume a migration.
 migration show: Get migration details.
 migration stop: Abort a migration.
 status: Get migration status.

Source Commands
 source clear: Delete all sources.
 source del: Delete a source.
 source fs show: Show the source FileSystem Configuration

Commands marked with (*) are currently unavailable.
Type `help <command>` to learn more.

Use backslashes to escape special characters ie. \\ will become \.
You can test this with the echo command.
```

```text
help migration\ list

NAME
        migration list - List running and active migrations.

SYNOPSYS
        migration list
```

----

### `history`

Enter `history` at the action prompt to list all previously entered commands.

Entering `history --file <filename>` will save up to 500 most recently entered commands in text form to the file specified. Use this to record commands that you have executed.

```text title="Display or save the history of previously run commands"
SYNOPSYS
        history [[--file] file]

OPTIONS
        --file  file
                A file to save history to.
                [Optional, default = <none>]
```

#### Optional Parameters

* **`--file`** The name of the file in which to save the history of commands.

----

### `script`

Load and execute commands from a text file using the `script --file <filename>` command. This file should have one command per line, and each will be executed as though they were entered directly at the action prompt in that sequence.

```text title="Read and execute commands from a file"
SYNOPSYS
        script [--file] file

OPTIONS
        --file  file
                [Mandatory]
```

#### Mandatory Parameters

* **`--file`** The name of the file containing script commands.

----

### `stacktrace`

 Use the `stacktrace` command to get full technical information about the source of an error during LiveData Migrator operation.

```text title="Display the full stacktrace of the last error"
SYNOPSYS
        stacktrace
```

## Action Prompt Features

The action prompt provides many features to guide you during operation.

| Feature | How to use it |
|---|---|
| **Review available commands** | Commands that cannot be used without creating other resources first are tagged with `*` in the output of the `help` command. |
| **Command completion** | Hit the `<tab>` key at any time to get assistance or to complete partially-entered commands. |
| **Cancel input** | Type `<Ctrl-C>` before entering a command to return to an empty action prompt. |
| **Syntax indication** | Invalid commands are highlighted as you type. |
| **Clear the display** | Type `<Ctrl-L>` at any time. |
| **Previous commands** | Navigate previous commands using the up and down arrows, and use standard emacs shortcuts. |
| **Interactive or scripted operation** | You can interact with the command line interface directly, or send it commands on standard input to incorporate it into shell scripts. |

## System service commands

### LiveData Migrator

The LiveData Migrator service script can be used to control operation of the service at any time:

`service livedata-migrator start|stop|force-reload|restart|status`

### UI

The UI service script can be used to control operation of the service at any time:

`service one-ui-server start|stop|force-reload|restart|status`
