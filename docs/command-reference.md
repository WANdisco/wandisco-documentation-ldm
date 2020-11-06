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

### `filesystem add gcs`

Add a Google Cloud Storage as a migration target using the `filesystem add gcs` command, which requires credentials in the form of an account key file.

```text title="Add a Google Cloud Storage file system"
SYNOPSYS
        filesystem add gcs  [--file-system-id] string
                            [--service-account-key-file] string
                            [--bucket-name] string
                            [[--properties-file] list]
                            [[--properties] list]

OPTIONS
        --file-system-id  string

                [Mandatory]

        --service-account-key-file  string

                [Mandatory]

        --bucket-name  string

                [Mandatory]

        --properties-file  list
                Load properties from this file
                [Optional, default = <none>]

        --properties  list
                Override properties in comma separated key/value string e.g. --properties property-one=value-one,\"property-two=value-one,value-two\"
                [Optional, default = <none>]
```

#### Mandatory Parameters

* **`--file-system-id`** The identifier to give the new file system resource.
* **`--service-account-key-file`** The path to a Service Account Key file.
* **`--bucket-name`** The bucket name of a Google Cloud Storage account.

#### Optional Parameters

* **`--properties-files`** Reference a list of existing properties files, each that contains Hadoop configuration properties in the format used by `core-site.xml` or `hdfs-site.xml`.
* **`--properties`** Specify properties to use in a comma-separated key/value list.

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

Add an S3 bucket as a target file system using the `filesystem add s3a` command. This method also supports IBM COS buckets.

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
* **`--credentials-provider`** The Java class name of a credentials provider for authenticating with the S3 endpoint. This is referenced in the UI as **Credentials Provider**. This is not a required parameter when adding an IBM COS bucket through the UI.  
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
* **Endpoint** (UI & IBM COS only): This is required when adding an IBM COS bucket. IBM provide a list of available endpoints that can be found in their [public documentation](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-endpoints#endpoints-region).

<h4 id="s3a-optional-parameters">Optional parameters</h4>

* **`--access-key`** When using the `org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider` credentials provider, specify the access key with this parameter. This is referenced in the UI as **Access Key**. This is a required parameter when adding an IBM COS bucket.
* **`--secret-key`** When using the `org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider` credentials provider, specify the secret key using this parameter. This is referenced in the UI as **Secret Key**. This is a required parameter when adding an IBM COS bucket.
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

### `exclusion add date`

Create a date-based exclusion that checks the 'modified date' of any directory or file that the LiveData Migrator encounters during a migration to which the exclusion has been applied. If the path or file being examined by LiveData Migrator has a 'modified date' earlier than the specified date, it will be excluded from the migration.

Once associated with a migration using [`migration exclusion add`](#migration-exclusion-add), files that match the policy will not be migrated.

```text title="Create a new date-based rule"
SYNOPSYS
        exclusion add date [--exclusion-id] string
                           [--description] string
                           [--before-date] string

OPTIONS
        --exclusion-id  string

                [Mandatory]

        --description  string

                [Mandatory]

        --before-date  string
                Expects the ISO format date-time, with an offset, e.g. "2011-12-03T10:15:30+01:00"
                [Mandatory]
```

#### Mandatory Parameters

* **`--exclusion-id`** The identifier for the exclusion policy. This is referenced in the UI as **Name**.
* **`--description`** A user-friendly description for the policy. This is referenced in the UI as **Description**.
* **`--before-date`** An [ISO formatted](https://www.digi.com/resources/documentation/digidocs/90001437-13/reference/r_iso_8601_date_format.htm) date and time, which can include an offset for a particular time zone. This is referenced in the UI as **TBA**.

#### Example

```text "title=Exclude all files last modified earlier than 1st October 2020 at 10:00am PDT"
exclusion add date --exclusion-id beforeDate --description "Files earlier than 2020-10-01T10:00:00PDT" --before-date 2020-10-01T10:00:00-07:00
```

----

### `exclusion add file-size`

Create an exclusion that can be applied to migrations to constrain the files transferred by a policy based on file size. Once associated with a migration using [`migration exclusion add`](#migration-exclusion-add), files that match the policy will not be migrated.

```text title="Create a new exclusion by file size policy"
SYNOPSYS
        exclusion add file-size [--exclusion-id] string
                                [--description] string
                                [--value] long
                                [--unit] string

OPTIONS
        --exclusion-id  string

                [Mandatory]

        --description  string

                [Mandatory]

        --value  long

                [Mandatory]

        --unit  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--exclusion-id`** The identifier for the exclusion policy. This is referenced in the UI as **Name**.
* **`--description`** A user-friendly description for the policy. This is referenced in the UI as **Description**.
* **`--value`** The numerical value for the file size, in a unit defined by. This is referenced in the UI as **Value**.
* **`--unit`** A string to define the unit used, either `B` for bytes, `GB` for gibibytes, `KB` for kibibytes, `MB` for mebibytes, `PB` for pebibytes, or `TB` for tebibytes.

#### Example

```text
exclusion add file-size --exclusion-id 100mbfiles --description "Files greater than 100 MB" --value 100 --unit MB
```

----

### `exclusion add regex`

Create an exclusion that can be applied to migrations to constrain the files transferred by a policy based on matching file name by regular expression. Once associated with a migration using [`migration exclusion add`](#migration-exclusion-add), files that match the policy will not be migrated.

```text title="Create a new exclusion by regular expression policy"
SYNOPSYS
        exclusion add regex [--exclusion-id] string
                            [--description] string
                            [--regex] string

OPTIONS
        --exclusion-id  string

                [Mandatory]

        --description  string

                [Mandatory]

        --regex  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--exclusion-id`** The identifier for the exclusion policy. This is referenced in the UI as **Name**.
* **`--description`** A user-friendly description for the policy. This is referenced in the UI as **Description**.
* **`--regex`** A regular expression in a syntax similar to that used by Perl. This is referenced in the UI as **Regex**.

#### Example

```text
exclusion add regex --description "No paths that start with test"  --exclusion-id exclusion1 --regex ^test\.*
```

#### Using backslash characters within `--regex` parameter

If you wish to use a `\` character as part of your regex value, you must escape this character with an additional backslash.

```text title="Example"
exclusion add regex --description "No paths that start with a backslash followed by test"  --exclusion-id exclusion2 --regex ^\\test\.*
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
        exclusion del [--exclusion-id] string

OPTIONS
        --exclusion-id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--exclusion-id`** The identifier for the exclusion policy to delete. This is referenced in the UI as **Name**.

#### Example

```text
exclusion del --exclusion-id exclusion1
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
        exclusion show [--exclusion-id] string

OPTIONS
        --exclusion-id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--exclusion-id`** The identifier for the exclusion policy to show. This is referenced in the UI as **Name**.

#### Example

```text
exclusion show --exclusion-id 100mbfiles
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

#### Example

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

## Bandwidth Policy Commands

----

### `bandwidth policy del`

Delete the current bandwidth policy and revert back to the default policy (unlimited bandwidth).

```text title="Allow the application to use unlimited bandwidth"
SYNOPSYS
        bandwidth policy del
```

----

### `bandwidth policy set`

Delete the current bandwidth policy and revert back to the default policy (unlimited bandwidth).

```text title="Set the application bandwidth limit, in bytes per second"
SYNOPSYS
        bandwidth policy set [--value] long  [--unit] string

OPTIONS
        --value  long

                [Mandatory]

        --unit  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--value`** Define the number of byte units.
* **`--unit`** Define the byte unit to be used.  
  Decimal units: `KB`, `MB`, `GB`, `TB`, `PB`, `EB`, `ZB`, `YB`  
  Binary units: `KiB`, `MiB`, `GiB`, `TiB`, `PiB`, `EiB`, `ZiB`, `YiB`

#### Examples

```text title="Set a limit of 10 Megabytes per second"
bandwidth policy set --value 10 --unit MB
```

```text title="Set a limit of 10 Mebibytes per second"
bandwidth policy set --value 10 --unit MiB
```

----

### `bandwidth policy show`

Display the current bandwidth policy.

```text title="Get details of the application bandwidth limit, in bytes per second"
SYNOPSYS
        bandwidth policy show
```

## Hive Agent Commands

----

### `hive agent add azure`

Add an Azure hive agent to connect to an [Azure SQL](https://docs.microsoft.com/en-gb/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview) database using the `hive agent add azure` command.

:::info
The Azure hive agent requires a ADLS Gen2 storage account and container name, this is only for the purposes of generating the correct location for the database. The container will not be accessed by the Hive agent and no data will be written to the container.
:::

```text title="Add Azure SQL agent"
SYNOPSYS
        hive agent add azure [[--name] string]  [--db-server-name] string  [--database-name] string  [--database-user] string  [--database-password] string  [--storage-account] string  [--container-name] string  [[--root-folder] string]  [[--hdi-version] string]  [[--insecure] boolean]

OPTIONS
        --name  string
                name of the agent
                [Optional, default = <nothing>]

        --db-server-name  string
                Azure SQL database server name
                [Mandatory]

        --database-name  string
                Azure SQL database name
                [Mandatory]

        --database-user  string
                Azure SQL database user
                [Mandatory]

        --database-password  string
                Azure SQL database password
                [Mandatory]

        --storage-account  string
                Azure storage account name
                [Mandatory]

        --container-name  string
                Azure storage account container name
                [Mandatory]

        --root-folder  string
                Azure root folder
                [Optional, default = <nothing>]

        --hdi-version  string
                Azure HDI version (3.6 or 4.0)
                [Optional, default = <nothing>]

        --insecure  boolean
                use insecure connection to Azure
                [Optional, default = <nothing>]
```

#### Mandatory Parameters

* **`--db-server-name`** The Azure SQL database server name.
* **`--database-name`** The Azure SQL database name.
* **`--database-user`** The user name to access the database.
* **`--database-password`** The user password to access the database.
* **`--storage-account`** The name of the ADLS Gen 2 storage account.
* **`--container-name`** The name of the container in the ADLS Gen2 storage account.

#### Optional Parameters

* **`--name`** The identifier to give to the new Hive agent.
* **`--root-folder`** The root directory for the Azure database.
* **`--hdi-version`** The [HDI](https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-component-versioning) version. This is relevant if you are intending to integrate your SQL server into a HDInsights cluster.
* **`--insecure`** Define an insecure connection (SSL disabled) to the Azure SQL database server (default is `false`).

#### Example

```text
hive agent add azure --name azureAgent --db-server-name mysqlserver --database-name mydb1 --database-user azureuser --database-password mypassword --storage-account myadls2 --container-name mycontainer --root-folder /hive/warehouse --hdi-version 3.6
```

----

### `hive agent add filesystem`

Add a filesystem hive agent to connect to your host's local filesystem using the `hive agent add filesystem` command.

```text title="Add filesystem agent"
SYNOPSYS
        hive agent add filesystem [--filesystem-id] string  [--root-folder] string  [[--name] string]

OPTIONS
        --filesystem-id  string
                filesystem id to use by filesystem agent
                [Mandatory]

        --root-folder  string
                path to use as root folder by filesystem agent
                [Mandatory]

        --name  string
                name of the agent
                [Optional, default = <nothing>]
```

#### Mandatory Parameters

* **`--filesystem-id`** The filesystem identifier to be used.
* **`--root-folder`** The path to use as the root directory for the filesystem agent.

#### Optional Parameters

* **`--name`** The identifier to give to the new Hive agent.

#### Example

```text
hive agent add filesystem --filesystem-id myfilesystem --root-folder /var/lib/mysql --name fsAgent
```

----

### `hive agent add glue`

Add an [AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html) hive agent to connect to an [AWS-hosted database](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/database.html) using the `hive agent add glue` command.

```text title="Add AWS Glue agent"
SYNOPSYS
        hive agent add glue [[--name] string]  [[--config-path] string]  [[--access-key] string]  [[--secret-key] string]  [[--session-token] string]  [[--glue-endpoint] string]  [[--aws-region] string]  [[--aws-catalog-credentials-provider-factory-class] string]  [[--default-fs] string]

OPTIONS
        --name  string
                name of the agent
                [Optional, default = <nothing>]

        --config-path  string
                path to a directory containing glue-site.xml
                [Optional, default = <nothing>]

        --access-key  string
                AWS access key. Valid for StaticCredentialsProviderFactory and SessionCredentialsProviderFactory.
                [Optional, default = <nothing>]

        --secret-key  string
                AWS secret key. Valid for StaticCredentialsProviderFactory and SessionCredentialsProviderFactory.
                [Optional, default = <nothing>]

        --session-token  string
                AWS session token. Valid only for SessionCredentialsProviderFactory
                [Optional, default = <nothing>]

        --glue-endpoint  string
                AWS Glue endpoint
                [Optional, default = <nothing>]

        --aws-region  string
                AWS region. Defaults to us-east-1
                [Optional, default = <nothing>]

        --aws-catalog-credentials-provider-factory-class  string
                AWS catalog credentials provider factory class.
                [Optional, default = <nothing>]

        --default-fs  string
                base URI of the filesystem to rewrite LOCATION strings into. I.e. s3:///test_bucket/
                [Optional, default = <nothing>]
```

#### Mandatory Parameters

Not applicable

#### Optional Parameters

* **`--name`** The identifier to give to the new Hive agent.
* **`--config-path`** The path to the directory containing the `glue-site.xml`.
* **`--access-key`** The [AWS access key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).
* **`--secret-key`** The [AWS secret key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).
* **`--session-token`** The [AWS session token](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html). Only valid if using `SessionCredentialsProviderFactory` for the `--aws-catalog-credentials-provider-factory-class` parameter.
* **`--glue-endpoint`** The [AWS Glue endpoint](https://docs.aws.amazon.com/glue/latest/dg/console-connections.html?icmpid=docs_glue_console) for connections to databases.
* **`--aws-region`** The [AWS region](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/) that your database is located in (default is `us-east-1`).
* **`--aws-catalog-credentials-provider-factory-class`** The [AWS catalog credentials provider factory class](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html#credentials-specify-provider) (default is [DefaultAWSCredentialsProviderChain](https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/index.html?com/amazonaws/auth/DefaultAWSCredentialsProviderChain.html)).
* **`--default-fs`** The base URI of the filesystem to generate the locations within the database (for example: `s3:///test_bucket/`).

#### Example

```text
hive agent add glue --name glueAgent --access-key ACCESS6HCFPAQIVZTKEY --secret-key SECRET1vTMuqKOIuhET0HAI78UIPfSRjcswTKEY --aws-region eu-west-1 --default-fs s3:///test_bucket/
```

### `hive agent add hive`

Add a hive agent to connect to a local or remote [Apache Hive](https://cwiki.apache.org/confluence/display/Hive/Home) metastore using the `hive agent add hive` command.

:::info remote deployments
When connecting to a remote Apache Hive metastore, specify a host on the remote cluster that will be used to communicate with the local LiveData Migrator server (constrained to a user-defined port).

A small service will be deployed on this remote host so that the hive agent can migrate data to and/or from the remote Apache Hive metastore.
:::

```text title="Add local or remote hive agent"
SYNOPSYS
        hive agent add hive [[--config-path] string]  [[--kerberos-principal] string]  [[--kerberos-keytab] string]  [[--name] string]  [[--host] string]  [[--port] integer]  [--autodeploy]  [[--ssh-user] string]  [[--ssh-key] file]  [[--ssh-port] int]  [--use-sudo]  [--ignore-host-checking]

OPTIONS
        --config-path  string
                path to a directory containing hive configuration files
                [Optional, default = <nothing>]

        --kerberos-principal  string
                kerberos principal to use
                [Optional, default = <nothing>]

        --kerberos-keytab  string
                path to kerberos keytab file
                [Optional, default = <nothing>]

        --name  string
                name of the agent
                [Optional, default = <nothing>]

        --host  string
                host where remote hive agent will be deployed
                [Optional, default = <nothing>]

        --port  integer
                port to use by remote hive agent
                [Optional, default = <nothing>]

        --autodeploy    automatically deploy remote agent. If specified, you must specify sshKey to connect.
                [Optional, default = false]

        --ssh-user  string
                ssh user to use for authentication on remote host to perform automatic deployment
                [Optional, default = <nothing>]

        --ssh-key  file
                ssh key to use for authentication on remote host to perform automatic deployment
                [Optional, default = <nothing>]

        --ssh-port  int
                ssh port to use to perform automatic deployment
                [Optional, default = 22]

        --use-sudo      use sudo for privileged commands while performing remote installation
                [Optional, default = false]

        --ignore-host-checking  ignore strict host key checking for unknown hosts
                [Optional, default = false]
```

#### Mandatory Parameters

Not applicable

#### Optional Parameters

##### Parameters for local or remote hive agents

* **`--config-path`** The path to the directory containing the Hive configuration files (for example: `/etc/hive/conf`).
* **`--kerberos-principal`** The Kerberos principal to use to access the Hive service (for example: `hive/_HOST@REALM.COM`). Not required if Kerberos is disabled.
* **`--kerberos-keytab`** The path to the Kerberos keytab containing the principal to access the Hive service (for example: `/etc/security/keytabs/hive.service.keytab`). Not required if Kerberos is disabled.
* **`--name`** The identifier to give to the new Hive agent.

##### Parameters for remote hive agents only

* **`--host`** The host where the remote hive agent will be deployed.
* **`--port`** The port for the remote hive agent to use on the remote host. This port is used to communicate with the local LiveData Migrator server.
* **`--autodeploy`** The remote agent will be automatically deployed when this flag is used. If using this, the `--ssh-key` parameter must also be specified.
* **`--ssh-user`** The SSH user to use for authentication on the remote host to perform automatic deployment (when using the `--autodeploy` parameter).
* **`--ssh-key`** The absolute path to the SSH private key to use for authentication on the remote host to perform automatic deployment (when using the `--autodeploy` parameter).
* **`--ssh-port`** The SSH port to use for authentication on the remote host to perform automatic deployment (when using the `--autodeploy` parameter). Default is port `22`.
* **`--use-sudo`** All commands performed by the SSH user will use `sudo` on the remote host when performing automatic deployment (using the `--autodeploy` parameter).
* **`--ignore-host-checking`** Ignore [strict host key checking](https://www.redhat.com/sysadmin/linux-knownhosts-failures) when performing the automatic deployment (using the `--autodeploy` parameter).

#### Examples

```text title="Example for local Apache Hive deployment"
hive agent add hive --name sourceAgent --kerberos-keytab /etc/security/keytabs/hive.service.keytab --kerberos-principal hive/_HOST@REALM.COM
```

```text title="Example for remote Apache Hive deployment"
hive agent add hive --name targetAgent --kerberos-keytab /etc/security/keytabs/hive.service.keytab --kerberos-principal hive/_HOST@REALM.COM --config-path /etc/hive/conf --host myRemoteHost.example.com --port 5052 --autodeploy --ssh-user root --ssh-key /root/.ssh/id_rsa --ssh-port 22
```

----

### `hive agent check`

Check the configuration of an existing hive agent using `hive agent check`.

```text title="Check if agent configuration is valid & connectable"
SYNOPSYS
        hive agent check [--name] string

OPTIONS
        --name  string
                name of the agent
                [Mandatory]
```

#### Example

```text
hive agent check --name azureAgent
```

----

### `hive agent configure azure`

Change the configuration of an existing Azure hive agent using `hive agent configure azure`.

The parameters that can be changed are the same as the ones listed in the [`hive agent add azure`](#hive-agent-add-azure) section.

All parameters are optional except `--name`, which is required to specify the existing hive agent that you wish to configure.

#### Example

```text
hive agent configure azure --name azureAgent --database-password CorrectPassword
```

----

### `hive agent configure filesystem`

Change the configuration of an existing filesystem hive agent using `hive agent configure filesystem`.

The parameters that can be changed are the same as the ones listed in the [`hive agent add filesystem`](#hive-agent-add-filesystem) section.

All parameters are optional except `--name`, which is required to specify the existing hive agent that you wish to configure.

#### Example

```text
hive agent configure filesystem --name fsAgent --root-folder /user/dbuser/databases
```

----

### `hive agent configure glue`

Change the configuration of an existing AWS Glue hive agent using `hive agent configure glue`.

The parameters that can be changed are the same as the ones listed in the [`hive agent add glue`](#hive-agent-add-glue) section.

All parameters are optional except `--name`, which is required to specify the existing hive agent that you wish to configure.

#### Example

```text
hive agent configure glue --name glueAgent --aws-region us-east-2
```

----

### `hive agent configure hive`

Change the configuration of an existing Apache hive agent using `hive agent configure hive`.

The parameters that can be changed are the same as the ones listed in the [`hive agent add hive`](#hive-agent-add-hive) section.

All parameters are optional except `--name`, which is required to specify the existing hive agent that you wish to configure.

#### Example

```text
hive agent configure hive --name sourceAgent --kerberos-keytab /opt/keytabs/hive.keytab --kerberos-principal hive/myhostname.example.com@REALM.COM
```

----

### `hive agent delete`

Delete the specified hive agent with `hive agent delete`.

```text title="Delete agent"
SYNOPSYS
        hive agent delete [--name] string

OPTIONS
        --name  string
                name of the agent
                [Mandatory]
```

#### Example

```text
hive agent delete --name azureAgent
```

----

### `hive agent list`

List configured hive agents with `hive agent list`.

```text title="List already added agents"
SYNOPSYS
        hive agent list [--detailed]

OPTIONS
        --detailed
                [Optional, default = false]
```

#### Example

```text
hive agent list --detailed
```

----

### `hive agent show`

Show the configuration of a hive agent with `hive agent show`.

```text title="Show agent configuration"
SYNOPSYS
        hive agent show [--name] string

OPTIONS
        --name  string
                name of the agent
                [Mandatory]
```

#### Example

```text
hive agent show --name azureAgent
```

----

### `hive agent types`

Print a list of supported hive agent types with `hive agent types`.

```text title="Print list of supported agent types"
SYNOPSYS
        hive agent types
```

#### Example

```text
hive agent types
```

## Hive Rule commands

----

### `hive rule add`,`hive rule create`

Create a hive migration rule that is used to define which databases and tables are migrated.

:::info
Specify these rules when [starting a new migration](#hive-migration-add) to control which databases and tables are migrated.
:::

```text title="Add new hive migration rule"
SYNOPSYS
        hive rule add [--database-pattern] string  [--table-pattern] string  [[--name] string]

OPTIONS
        --database-pattern  string
                Pattern to match database name. For example db* would include all databases starting with 'db', like 'dbname1'.
                [Mandatory]

        --table-pattern  string
                Pattern to match table name. For example table* would include all tables starting with 'table', like 'tablename1'.
                [Mandatory]

        --name  string
                Rule name
                [Optional, default = <nothing>]

ALSO KNOWN AS
        hive rule create
```

#### Mandatory Parameters

* **`--database-pattern`** Specify a [regex](https://regex101.com/) pattern that will match the database names you want to migrate.
* **`--table-pattern`** Specify a [regex](https://regex101.com/) pattern that will match the table names you want to migrate.

:::tip
You can use a single asterisk (`*`) if you want to match all databases and/or all tables within the metastore/database.
:::

#### Optional Parameters

* **`--name`** The name for the hive rule.

#### Example

```text title="Match all database names that start with test and all tables inside of them"
hive rule add --name test_databases --database-pattern test* --table-pattern *
```

----

### `hive rule configure`

Change the parameters of an existing hive rule.

The parameters that can be changed are the same as the ones listed in the [`hive rule add`,`hive rule create`](#hive-rule-addhive-rule-create) section.

All parameters are optional except `--name`, which is required to specify the existing hive rule that you wish to configure.

#### Example

```text
hive rule configure --name test_databases --database-pattern test_db*
```

----

### `hive rule delete`

Delete a hive rule.

```text title="Delete selected hive migration rule"
SYNOPSYS
        hive rule delete [--name] string

OPTIONS
        --name  string
                Rule name
                [Mandatory]
```

#### Example

```text
hive rule delete --name test_databases
```

----

### `hive rule list`

List all hive rules.

```text title="Get a list of defined rules"
SYNOPSYS
        hive rule list
```

#### Example

```text
hive rule list
```

----

### `hive rule show`

Show details of a hive rule.

```text title="Show rule details"
SYNOPSYS
        hive rule show [--name] string

OPTIONS
        --name  string
                Rule name
                [Mandatory]
```

#### Example

```text
hive rule show --name test_databases
```

## Hive Migration Commands

----

### `hive migration add`

Create a new hive migration to initiate metadata migration from your source database or metastore.

:::info
[Create hive rules](#hive-rule-addhive-rule-create) before initiating a hive migration to specify which databases and tables are migrated.
:::

```text title="create new migration"
SYNOPSYS
        hive migration add [--source] string  [--target] string  [[--rule-names] list]  [[--name] string]  [--auto-start]  [--once]

OPTIONS
        --source  string
                name of agent which should be a source of migration
                [Mandatory]

        --target  string
                name of agent which should be a target of migration
                [Mandatory]

        --rule-names  list
                rule name or a list of rule names to match objects on a source & target for migration. List of rules can be specified separated by the comma (','). You can also use quotes if there are spaces around commas.
                [Optional, default = <nothing>]

        --name  string
                migration name
                [Optional, default = <nothing>]

        --auto-start    immediately start created migration
                [Optional, default = <nothing>]

        --once  migration will be stopped after all matching objects are migrated
                [Optional, default = <nothing>]
```

#### Mandatory Parameters

* **`--source`** The name of the hive agent for the source of migration.
* **`--target`** The name of the hive agent for the target of migration.

#### Optional Parameters

* **`--rule-names`** The rule name or list of rule names to use with the migration. Multiple rules need to be comma separated (for example: `rule1,rule2,rule3`).
* **`--name`** The name to identify the migration with.
* **`--auto-start`** Specify this parameter to start the migration immediately after creation.
* **`--once`** Specify this parameter to perform a one-time migration, and not continuously scan for new or changing metadata.

#### Example

```text
hive migration add --source sourceAgent --target remoteAgent --rule-names test_dbs,user_dbs --name hive_migration --auto-start
```

----

### `hive migration delete`

Delete a hive migration.

:::note
A hive migration must be stopped state before it can be deleted, this can be achieved by using the `--force-stop` parameter with this command.
:::

```text title="Delete migration from the list, migration should be stopped"
SYNOPSYS
        hive migration delete [--name] string  [--force-stop]

OPTIONS
        --name  string
                migration name
                [Mandatory]

        --force-stop    also stop migration if it's in progress. By default, migration should be stopped before delete.
                [Optional, default = false]
```

#### Example

```text
hive migration delete --name hive_migration --force-stop
```

----

### `hive migration list`

List all hive migrations.

```text title="print a list of all migrations"
SYNOPSYS
        hive migration list
```

#### Example

```text
hive migration list
```

----

### `hive migration pause`

Pause a hive migration or a list of hive migrations (comma separated).

```text title="Pause migration from the list"
SYNOPSYS
        hive migration pause [--names] list

OPTIONS
        --names  list
                migration name. List of migrations can be specified separated by comma (','). You can also use quotes if there are spaces around commas.
                [Mandatory]
```

#### Example

```text
hive migration pause --names hive_migration1,hive_migration2
```

### `hive migration pause --all`

Pause all hive migrations.

```text title="Pause all migrations"
SYNOPSYS
        hive migration pause --all
```

#### Example

```text
hive migration pause --all
```

----

### `hive migration resume`

Resume a paused hive migration or a list of paused hive migrations (comma separated).

```text title="Resume migration from the list"
SYNOPSYS
        hive migration resume [--names] list

OPTIONS
        --names  list
                migration name. List of migrations can be specified separated by comma (','). You can also use quotes if there are spaces around commas.
                [Mandatory]
```

#### Example

```text
hive migration resume --names hive_migration1,hive_migration2
```

### `hive migration resume --all`

Resume all hive migrations.

```text title="Resume all migrations"
SYNOPSYS
        hive migration resume --all
```

#### Example

```text
hive migration resume --all
```

----

### `hive migration show`

Display information about a hive migration.

```text title="Show info about specific migration"
SYNOPSYS
        hive migration show [--name] string

OPTIONS
        --name  string
                migration name
                [Mandatory]
```

#### Example

```text
hive migration show --name hive_migration
```

----

### `hive migration start`

Start a hive migration or a list of hive migrations (comma separated).

:::note
Specify the `--once` parameter to perform a one-time migration, and not continuously scan for new or changing metadata.
:::

```text title="Start migration"
SYNOPSYS
        hive migration start [--names] list  [--once]

OPTIONS
        --names  list
                migration name. List of migrations can be specified separated by comma (','). You can also use quotes if there are spaces around commas.
                [Mandatory]

        --once
                [Optional, default = false]
```

#### Example

```text
hive migration start --names hive_migration1,hive_migration2
```

### `hive migration start --all`

Start all hive migrations.

:::note
Specify the `--once` parameter to perform a one-time migration, and not continuously scan for new or changing metadata.
:::

```text title="Start migration"
SYNOPSYS
        hive migration start --all [--once]

OPTIONS
        --once
                [Optional, default = false]
```

#### Example

```text
hive migration start --all --once
```

----

### `hive migration status`

Show the status of a hive migration or a list of hive migrations (comma separated).

```text title="Show migration status"
SYNOPSYS
        hive migration status [--names] list

OPTIONS
        --names  list
                migration name. List of migrations can be speficied separated by comma (','). You can also use quotes if there are spaces around commas.
                [Mandatory]
```

#### Example

```text
hive migration status --names hive_migration1,hive_migration2
```

### `hive migration status --all`

Show the status of all hive migrations.

```text title="Start migration"
SYNOPSYS
        hive migration status --all
```

#### Example

```text
hive migration status --all
```

----

### `hive migration stop`

Stop a running hive migration or a list of running hive migrations (comma separated).

```text title="Stop running migration"
SYNOPSYS
        hive migration stop [--names] list

OPTIONS
        --names  list
                migration name. List of migrations can be speficied separated by comma (','). You can also use quotes if there are spaces around commas.
                [Mandatory]
```

#### Example

```text
hive migration stop --names hive_migration1,hive_migration2
```

### `hive migration stop --all`

Stop all running hive migrations.

```text title="Stop all running migrations"
SYNOPSYS
        hive migration stop --all
```

#### Example

```text
hive migration stop --all
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
Although present when invoking the `help` command, Local Filesystem functionality is not yet available. This will be coming in a future release.
:::

```text title="help"
AVAILABLE COMMANDS

Bandwidth Policy Commands
        bandwidth policy del: Allow the application to use unlimited bandwidth.
        bandwidth policy set: Set the application bandwidth limit, in bytes per second.
        bandwidth policy show: Get details of the application bandwidth limit, in bytes per second.

Built-In Commands
        clear: Clear the shell screen.
        echo: Print message
        exit, quit: Exit the api.
        help: Display help about available commands.
        history: Display or save the history of previously run commands
        script: Read and execute commands from a file.

Change log level commands
        log debug: Enable debug level logging
        log info: Enable info level logging
        log off: Disable logging
        log trace: Enable trace level logging

Connect commands
        connect hivemigrator: connect hivemigrator
        connect livemigrator: connect livemigrator

Exclusion Commands
        exclusion add date: Create a new date-based rule.
        exclusion add file-size: Create a new file size rule.
        exclusion add regex: Create a new regex exclusion rule.
        exclusion del: Delete an exclusion rule.
        exclusion list: List all exclusion rules.
        exclusion show: Get details for a particular exclusion rule.

Filesystem Commands
        filesystem add adls2 sharedKey: Add an ADLS2 FileSystem via HCFS API FileSystem With Shared Key
        filesystem add gcs: Add a GCS FileSystem via HCFS API FileSystem
        filesystem add hdfs: Add a Hadoop HDFS FileSystem FileSystem
        filesystem add local: Add a Local FileSystem via HCFS
        filesystem add s3a: Add a S3A FileSystem via HCFS API
        filesystem auto-discover-source hdfs: Auto-discover-source Hadoop HDFS FileSystem FileSystem
        filesystem clear: Delete all targets.
        filesystem del: Delete a target.
        filesystem list: List of targets.
        filesystem show: Get target details.
        filesystem types: List the types of target Filesystems available

Hive Agent configuration commands
        hive agent add azure: Add Azure SQL agent
        hive agent add filesystem: Add filesystem agent.
        hive agent add glue: Add AWS Glue agent
        hive agent add hive: Add local or remote hive agent.
        hive agent check: Check if agent configuration is valid & connectable
        hive agent configure azure: Change agent configuration
        hive agent configure filesystem: Change agent configuration
        hive agent configure glue: Change agent configuration
        hive agent configure hive: Change agent configuration
        hive agent delete: Delete agent
        hive agent list: List already added agents.
        hive agent show: Show agent configuration.
        hive agent types: Print list of supported agent types.

Hive migration commands
        hive migration add: create new migration
        hive migration delete: delete migration from the list. Migration should be stopped
        hive migration list: print a list of all migrations
        hive migration pause: pause migration from the list
        hive migration pause --all: pause all migrations
        hive migration resume: resume migration from the list
        hive migration resume --all: resume all migrations
        hive migration show: show info about specific migration
        hive migration start: start migration
        hive migration start --all: start all migrations
        hive migration status: show migration status
        hive migration status --all: show all migration statuses
        hive migration stop: stop running migration
        hive migration stop --all: stop all running migrations

Hive rule configuration commands
        hive rule add, hive rule create: Add new hive migration rule
        hive rule configure: Change selected rule parameters
        hive rule delete: Delete selected hive migration rule
        hive rule list: Get a list of defined rules
        hive rule show: Show rule details

License manipulation commands
        license show: show used license
        license upload: upload license file

Migration Commands
      * migration add: Create a new migration.
        migration del: Delete a migration.
        migration exclusion add: Add an exclusion to a migration.
        migration exclusion del: Remove an exclusion from a migration.
        migration list: List running and active migrations.
        migration run: Start or resume a migration.
        migration show: Get migration details.
        migration stop: Stop migration.
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

The service scripts can be used to control operation of each individual service at any time.

### LiveData Migrator

`service livedata-migrator start|stop|force-reload|restart|status`

### HiveMigrator

`service hivemigrator start|stop|force-reload|restart|status`

### LiveData UI

`service livedata-ui start|stop|force-reload|restart|status`
