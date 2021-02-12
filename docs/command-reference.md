---
id: command-reference
title: Command Reference
sidebar_label: Command Reference
---

Looking to learn more about LiveData Migrator commands? This reference page includes a comprehensive description of each command available from the LiveData Migrator CLI.

Each command description includes the information available from the `help` command. Tab-completion will also give you guidance when entering commands on the available options and help auto-complete the needed values.

:::tip
You can also find information about UI configuration items here. Look for them in their equivalent CLI mandatory and optional parameters.
:::

## Built-in commands

The built-in commands are always available in a LiveData Migrator command line interactive session. They are unrelated to migration resources and operation (other than `exit`/`quit`), but help you to interact with LiveData Migrator and automate processing through scripts for the action prompt.

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
```

#### Optional Parameters

* **`--verbose`** Include all configuration properties for the source file system in the response.

## File System Commands

----

### `filesystem add adls2 oauth`

Add an Azure Data Lake Storage Gen 2 container as a migration target using the `filesystem add adls2 oauth` command, which requires a [service principal](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal) and [OAuth 2](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-protocols) credentials.

:::note
The service principal that you want to use must have the **Storage Blob Data Owner** role assigned to the ADLS Gen2 storage account. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-rbac-portal#assign-an-azure-built-in-role) for further guidance.
:::

```text title="Add an ADLS2 FileSystem via HCFS API FileSystem With OAuth"
SYNOPSYS
        filesystem add adls2 oauth [--file-system-id] string
                                   [--storage-account-name] string
                                   [--oauth2-client-id] string
                                   [--oauth2-client-secret] string
                                   [--oauth2-client-endpoint] string
                                   [--container-name] string
                                   [--insecure]
                                   [[--properties-files] list]
                                   [[--properties] string]
```

#### Mandatory Parameters

* **`--file-system-id`** The identifier to give the new file system resource. This is referenced in the UI as **Storage Name**.
* **`--storage-account-name`** The name of the ADLS Gen 2 storage account to target. This is referenced in the UI as **Account Name**.
* **`--oauth2-client-id`** The client ID (also known as [application ID](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#get-tenant-and-app-id-values-for-signing-in)) for your Azure service principal. This is referenced in the UI as **Client ID**.
* **`--oauth2-client-secret`** The client secret (also known as [application secret](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#option-2-create-a-new-application-secret)) for the Azure service principal. This is referenced in the UI as **Secret**.
* **`--oauth2-client-endpoint`** The [client endpoint](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-protocols#endpoints) for the Azure service principal. This is referenced in the UI as **Endpoint**.  
This will often take the form of `https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token` where `{tenant}` is the [directory ID](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#get-tenant-and-app-id-values-for-signing-in) for the Azure service principal. You can specify a custom URL if desired (such as a proxy endpoint that manually interfaces with Azure Active Directory).
* **`--container-name`** The name of the container in the storage account to which content will be migrated. This is referenced in the UI as **Container Name**.

#### Optional Parameters

* **`--insecure`** When provided, LiveData Migrator will not use TLS to encrypt communication with ADLS Gen 2. This may improve throughput, but should only be used when you have other means of securing communication. This is referenced in the UI when **Use Secure Protocol** is unchecked.
* **`--properties-files`** Reference a list of existing properties files, each that contains Hadoop configuration properties in the format used by `core-site.xml` or `hdfs-site.xml`.
* **`--properties`** Specify properties to use in a comma-separated key/value list.

#### Example

```text
filesystem add adls2 oauth --file-system-id mytarget --storage-account-name myadls2 --oauth2-client-id b67f67ex-ampl-e2eb-bd6d-client9385id --oauth2-client-secret 2IPO8*secretk-9OPs8n*TexampleHJ= --oauth2-client-endpoint https://login.microsoftonline.com/78u098ex-ampl-e498-8bce-ndpoint5f2e5/oauth2/v2.0/token --container-name lm2target
```

----

### `filesystem add adls2 sharedKey`

Add an Azure Data Lake Storage Gen 2 container as a migration target using the `filesystem add adls2 sharedKey` command, which requires credentials in the form of an [account key](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#view-account-access-keys).

```text title="Add an ADLS2 FileSystem via HCFS API FileSystem With Shared Key"
SYNOPSYS
        filesystem add adls2 sharedKey [--file-system-id] string
                                       [--storage-account-name] string
                                       [--shared-key] string
                                       [--container-name] string
                                       [--insecure]
                                       [[--properties-files] list]
                                       [[--properties] string]
```

#### Mandatory Parameters

* **`--file-system-id`** The identifier to give the new file system resource. This is referenced in the UI as **Storage Name**.
* **`--storage-account-name`** The name of the ADLS Gen 2 storage account to target. This is referenced in the UI as **Account Name**.
* **`--shared-key`** The [shared account key](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#view-account-access-keys) to use as credentials to write to the storage account. This is referenced in the UI as **Access Key**.
* **`--container-name`** The name of the container in the storage account to which content will be migrated. This is referenced in the UI as **Container Name**.

#### Optional Parameters

* **`--insecure`** When provided, LiveData Migrator will not use TLS to encrypt communication with ADLS Gen 2. This may improve throughput, but should only be used when you have other means of securing communication. This is referenced in the UI when **Use Secure Protocol** is unchecked.
* **`--properties-files`** Reference a list of existing properties files, each that contains Hadoop configuration properties in the format used by `core-site.xml` or `hdfs-site.xml`.
* **`--properties`** Specify properties to use in a comma-separated key/value list.

#### Example

```text
filesystem add adls2 sharedKey --file-system-id mytarget --storage-account-name myadls2 --container-name lm2target --shared-key Yi8NxHGqoQ79DBGLVn+COK/sRDwbNqAEXAMPLEDaMxRkvXt2ijUtASHAREDj/vaS/NbzR5rtjEKEY31eIopUVA==
```

----

### `filesystem add gcs`

Add a Google Cloud Storage as a migration target using the `filesystem add gcs` command, which requires credentials in the form of an account key file.

```text title="Add a Google Cloud Storage file system"
SYNOPSYS
        filesystem add gcs [--file-system-id] string
                           [[--service-account-json-key-file] string]
                           [[--service-account-p12-key-file] string]
                           [[--service-account-json-key-file-server-location] string]
                           [[--service-account-p12-key-file-server-location] string]
                           [[--service-account-email] string]
                           [--bucket-name] string
                           [[--properties-files] list]
                           [[--properties] string]
```

#### Mandatory Parameters

* **`--file-system-id`** The identifier to give the new file system resource. This is referenced in the UI as **Storage Name**.
* **`--bucket-name`** The bucket name of a Google Cloud Storage account. This is referenced in the UI as **Bucket Name**.

#### Service account key parameters

:::info
Provide your service account key for the GCS bucket by choosing one of the parameters below.

You can also upload the service account key directly when using the UI (this is not supported through the CLI).
:::

* **`--service-account-json-key-file-server-location`** The absolute filesystem path on the LiveData Migrator server of your service account key file in JSON format. You can either [create a GCS service account key](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating_service_account_keys) or [use an existing one](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#listing_service_account_keys).  
This is referenced in the UI as **Key File** when the _Key File Options -> Provide a Path_ option is selected.
* **`--service-account-p12-key-file-server-location`** The absolute filesystem path on the LiveData Migrator server of your service account key file in P12 format. You can either [create a GCS service account key](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating_service_account_keys) or [use an existing one](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#listing_service_account_keys).  
This is referenced in the UI as **Key File** when the _Key File Options -> Provide a Path_ option is selected.
* **`--service-account-json-key-file`** The absolute filesystem path on the host running the LiveData Migrator CLI of your service account key file in JSON format. Only use this parameter if you are running the LiveData Migrator CLI on a different host to your LiveData Migrator server.
* **`--service-account-p12-key-file`** The absolute filesystem path on the host running the LiveData Migrator CLI of your service account key file in P12 format. Only use this parameter if you are running the LiveData Migrator CLI on a different host to your LiveData Migrator server.

#### Optional Parameters

* **`--service-account-email`** The email address linked to your GCS service account. This is referenced in the UI as **Email address** and is required when selecting the **Upload P12 Key File** option.
* **`--properties-files`** Reference a list of existing properties files, each that contains Hadoop configuration properties in the format used by `core-site.xml` or `hdfs-site.xml`.
* **`--properties`** Specify properties to use in a comma-separated key/value list.

#### Example

```text
filesystem add gcs --file-system-id gcsAgent --bucket-name myGcsBucket --service-account-p12-key-file-server-location /user/hdfs/targetStorage/myAccountKey.p12 --service-account-email user@mydomain.com
```

----

### `filesystem add hdfs`

Add a Hadoop Distributed File System as either a migration source or target using the `filesystem add hdfs` command.

Creating an HDFS file system resource with this command will normally only be used when migrating to a target HDFS (rather than another storage service like ADLS Gen 2 or S3a). LiveData Migrator will attempt to auto-detect the *source* HDFS file system when started from the command line unless Kerberos is enabled on your source environment.

If Kerberos is enabled on your source environment, use the [`filesystem auto-discover-source hdfs`](#filesystem-auto-discover-source-hdfs) command to provide Kerberos credentials and auto-discover your source HDFS configuration.

```text title="Add a Hadoop Distributed File System"
SYNOPSYS
        filesystem add hdfs [--file-system-id] string
                            [[--default-fs] string]
                            [[--user] string]
                            [[--kerberos-principal] string]
                            [[--kerberos-keytab] string]
                            [--source]
                            [--scan-only]
                            [[--properties-files] list]
                            [[--properties] string]
```

#### Mandatory Parameters

* **`--file-system-id`** The identifier to give the new file system resource. This is referenced in the UI as **Storage Name**.
* **`--default-fs`** A string that defines how LiveData Migrator accesses HDFS. This is referenced in the UI as **Default FS**.  
  It can be specified in a number of forms:
  1. As a single HDFS URI, such as `hdfs://192.168.1.10:8020` (using an IP address) or `hdfs://myhost.localdomain:8020` (using a hostname).
  1. As an HDFS URI that references a nameservice ID defined in the cluster properties, like `hdfs://mynameservice`, where there is a configuration property for the cluster that defines the value of the `dfs.nameservices` value to include that nameservice ID, like `mynameservice` and all required configuration properties for that nameservice, like `dfs.ha.namenodes.mynameservice`, `dfs.namenode.rpc-address.mynameservice.nn1`, and `dfs.namenode.http-address.mynameservice.nn1`, etc.

#### Optional Parameters

:::important Kerberos: Cross-realm authentication required between source and target HDFS
[Cross-realm authentication](https://web.mit.edu/kerberos/krb5-1.5/krb5-1.5.4/doc/krb5-admin/Cross_002drealm-Authentication.html) is required in the following scenario:

* Migration will occur between a source and target HDFS.
* Kerberos is enabled on both clusters.

See the links below for guidance for common Hadoop distributions:

* [CDH](https://docs.cloudera.com/documentation/enterprise/6/6.3/topics/cm_sg_kdc_def_domain_s2.html)
* [CDP](https://docs.cloudera.com/cdp-private-cloud-base/7.1.5/security-kerberos-authentication/topics/cm-security-kerberos-authentication-kdc-cross-realm-trust.html)
* [Red Hat](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/system-level_authentication_guide/using_trusts) (Unmanaged)
* [HDP](https://community.cloudera.com/t5/Community-Articles/Kerberos-cross-realm-trust-for-distcp/ta-p/245590)
:::

* **`--user`** The name of the HDFS user to be used when performing operations against the file system. In environments where Kerberos is disabled, this user must be the HDFS super user, such as `hdfs`.
* **`--kerberos-principal`** The Kerberos principal to authenticate with and perform migrations as. This principal should map to the [HDFS super user](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User) using [auth_to_local](https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/SecureMode.html#Mapping_from_Kerberos_principals_to_OS_user_accounts) rules.
* **`--kerberos-keytab`** The Kerberos keytab containing the principal defined for the `--kerberos-principal` parameter. This must be accessible to the local system user running the LiveData Migrator service (default is `hdfs`).
* **`--source`** Provide this parameter to use the file system resource created as a source.  This is referenced in the UI when configuring the _Unknown source_.
* **`--scan-only`** Provide this parameter to create a static source filesystem for use in [static migrations](./non-live-migration.md). Requires `--source`.
* **`--properties-files`** Reference a list of existing properties files that contain Hadoop configuration properties in the format used by `core-site.xml` or `hdfs-site.xml`.  This is referenced in the UI as **Provide a path to files** under the _Additional Configuration_ option.
* **`--properties`** Specify properties to use in a comma-separated key/value list. This is referenced in the UI as **Additional Configuration** under the _Additional Configuration_ option.

##### Properties files are required for NameNode HA

If your Hadoop cluster has [NameNode HA enabled](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HDFSHighAvailabilityWithQJM.html), you must provide the local filesystem path to the properties files that define the configuration for the nameservice ID.

**Source HDFS filesystem**: These configuration files will likely be in a default location depending on the distribution of the Hadoop cluster.

**Target HDFS filesystem**: Ensure that the target Hadoop cluster configuration is available on your LiveData Migrator host's local filesystem.

* For the UI, use **Provide a path to files** under the _Additional Configuration_ option and define the directory containing the `core-site.xml` and `hdfs-site.xml` files.

  ```text title="Example for path containing source cluster configuration"
  /etc/hadoop/conf
  ```

  ```text title="Example for path containing target cluster configuration"
  /etc/targetClusterConfig
  ```

  Alternatively, define the absolute filesystem paths to these files:

  ```text title="Example for absolute paths to source cluster configuration files"
  /etc/hadoop/conf/core-site.xml
  /etc/hadoop/conf/hdfs-site.xml
  ```

  ```text title="Example for absolute paths to target cluster configuration files"
  /etc/targetClusterConfig/core-site.xml
  /etc/targetClusterConfig/hdfs-site.xml
  ```

* For the CLI/API, use the `--properties-files` parameter and define the absolute paths to the `core-site.xml` and `hdfs-site.xml` files (see the [Examples](#examples) section for CLI usage of this parameter).

#### Examples

##### HDFS as source

```text title="Example for source NameNode HA cluster"
filesystem add hdfs --file-system-id mysource --source --default-fs hdfs://sourcenameservice --properties-files /etc/hadoop/conf/core-site.xml,/etc/hadoop/conf/hdfs-site.xml
```

```text title="Example for source NameNode HA cluster with Kerberos enabled"
filesystem add hdfs --file-system-id mysource --source --default-fs hdfs://sourcenameservice --properties-files /etc/hadoop/conf/core-site.xml,/etc/hadoop/conf/hdfs-site.xml --kerberos-keytab /etc/security/keytabs/hdfs.headless.keytab --kerberos-principal hdfs@SOURCEREALM.COM
```

##### HDFS as target

:::note
When specifying a HDFS filesystem as a target, the property files for the target cluster must exist on the local filesystem and be accessible to the LiveData Migrator system user.
:::

```text title="Example for target NameNode HA cluster with Kerberos enabled"
filesystem add hdfs --file-system-id mytarget --default-fs hdfs://targetnameservice --properties-files /etc/targetClusterConfig/core-site.xml,/etc/targetClusterConfig/hdfs-site.xml --kerberos-keytab /etc/security/keytabs/hdfs.headless.keytab --kerberos-principal hdfs@SOURCEREALM.COM
```

```text title="Example for target single NameNode cluster"
filesystem add hdfs --file-system-id mytarget --default-fs hdfs://namenode.targetdomain:8020 --user hdfs
```

----

### `filesystem add local`

Add a Hadoop Compatible local filesystem as either a migration target or source using the `filesystem add local` command.

```text title="Add a Local FileSystem via HCFS API."
SYNOPSYS
        filesystem add local [--file-system-id] string
                                       [[--fs-root] string]
                                       [--source]
                                       [--scan-only]
                                       [[--properties-files] list]
                                       [[--properties] string]
```

#### Mandatory Parameters

* **`--file-system-id`** The identifier to give the new file system resource. This is referenced in the UI as **Storage Name**.

#### Optional Parameters

* **`--fs-root`** The directory in the local filesystem to scan for data or send data to, depending on whether the filesystem is defined as a source or a target. Should be supplied using the full directory path from the root.
* **`--source`** Provide this parameter to use the file system resource created as a source.  This is referenced in the UI when configuring the _Unknown source_.
* **`--scan-only`** Provide this parameter to create a static source filesytem for use in [static migrations](./non-live-migration.md). Requires `--source`.
* **`--properties-files`** Reference a list of existing properties files, each that contains Hadoop configuration properties in the format used by `core-site.xml` or `hdfs-site.xml`.
* **`--properties`** Specify properties to use in a comma-separated key/value list.

:::note
  If no `fs-root` is specified, the file path will default to the root of your system.
:::

#### Examples

##### Local filesystem as source

```text
filesystem add local --file-system-id mytarget --fs-root ./tmp --source
```

##### Local filesystem as a target

```text
filesystem add local --file-system-id mytarget --fs-root ./Users/username/destinationfolder/
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

#### S3a Properties

:::info
When adding properties via the UI or API, for example to set a custom `fs.s3a.endpoint`, it is required to also set the following properties manually. They are added by default when using the CLI.
:::

* **`fs.s3a.impl`** (default `org.apache.hadoop.fs.s3a.S3AFileSystem`): The implementation class of the S3A Filesystem.
* **`fs.AbstractFileSystem.s3a.impl`** (default `org.apache.hadoop.fs.s3a.S3A`): The implementation class of the S3A AbstractFileSystem.
* **`fs.s3a.user.agent.prefix`** (default `WANdisco/LiveDataMigrator`): Sets a custom value that will be pre-pended to the User-Agent header sent in
    HTTP requests to the S3 back-end by S3AFileSystem.
* **`fs.s3a.impl.disable.cache`** (default `true`): Disables the S3 file system cache when set to 'true'.
* **`fs.hadoop.tmp.dir`** (default `tmp`): The parent directory for other temporary directories.
* **`fs.s3a.fast.upload.buffer`** (default `disk`): Defines how the filesystem will [buffer the upload](#upload-buffering).
* **`fs.s3a.fast.upload.active.blocks`** (default `8`): Defines how many blocks a single output stream can have uploading or queued at a given time.
* **`fs.s3a.block.size`** (default `32M`): Defines the maximum size of blocks during file transfer. Use the suffix `K`, `M`, `G`, `T` or `P` to scale the value in Kilobytes, Megabytes, Gigabytes, Terabytes or Petabytes respectively.
* **`fs.s3a.buffer.dir`** (default `tmp`): Defines the directory used by [disk buffering](#upload-buffering).

You can additionally find a list of S3A properties in the [S3A documentation](https://hadoop.apache.org/docs/r3.2.1/hadoop-aws/tools/hadoop-aws/index.html).

#### Example

```text
filesystem add s3a --file-system-id mytarget --bucket-name mybucket1 --credentials-provider org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider --access-key B6ZAI18Z3UIO002Y777A --secret-key OP87Chokisf4hsTP0Q5j95yI904lT7AaDBGJpp0D
```

#### Upload Buffering

Migrations using an S3A target destination will buffer all uploads. By default, the buffering will occur on the local disk of system LiveData Migrator is running on, in the `/tmp` directory.

LiveData Migrator will automatically delete the temporary buffering files once they are no longer needed.

If you want to use a different type of buffering, you can change the property `fs.s3a.fast.upload.buffer`. The following values can be supplied:

| Buffering Option | Details | Property Value |
| -------- | -------- | -------- |
| Array Buffer | Buffers the uploaded data in memory instead of on disk, using the Java heap. | `array` |
| Byte Buffer | Buffers the uploaded data in memory instead of on disk, but does not use the Java heap. | `bytebuffer` |
| Disk Buffering | The default option. Buffers the upload to disk. | `disk` |

Both the `array` and `bytebuffer` options may lead to the consumption of large amounts of memory. Other properties (such as `fs.s3a.fast.upload.active.blocks`) may be used to fine-tune the migration to avoid issues.

:::note
  If you run out of disk space on which to buffer the migration, the migration will stall with a series of errors. To avoid this, ensure the file system containing the directory used for buffering (`/tmp` by default) has enough remaining space to facilitate the transfer.
:::

----

### `filesystem auto-discover-source hdfs`

Discover your local HDFS filesystem by specifying the Kerberos credentials for your source environment.

You can also manually configure the source HDFS filesystem using the [`filesystem add hdfs`](#filesystem-add-hdfs) command.

```text title="Auto-discover-source Hadoop HDFS FileSystem FileSystem"
SYNOPSYS
        filesystem auto-discover-source hdfs [[--kerberos-principal] string]
                                             [[--kerberos-keytab] string]
```

#### Kerberos parameters

* **`--kerberos-principal`** The Kerberos principal to authenticate with and perform migrations as. This principal should map to the [HDFS super user](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User) using [auth_to_local](https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/SecureMode.html#Mapping_from_Kerberos_principals_to_OS_user_accounts) rules.
* **`--kerberos-keytab`** The Kerberos keytab containing the principal defined for the `--kerberos-principal` parameter. This must be accessible to the local system user running the LiveData Migrator service (default is `hdfs`).

#### Example

```text
filesystem auto-discover-source hdfs --kerberos-keytab /etc/security/keytabs/hdfs.headless.keytab --kerberos-principal hdfs@REALM.COM
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
```

#### Mandatory Parameters

* **`--verbose`** Include all properties for each file system in the JSON result.

----

### `filesystem show`

View details for a file system resource.

```text title="Get target details"
SYNOPSYS
        filesystem show [--file-system-id] string  [--verbose]
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

----

### `filesystem update adls2 oauth`

Update an existing Azure Data Lake Storage Gen 2 container migration target with a specified filesystem ID using the `filesystem update adls2 oauth` command. You will be prompted to optionally update the [service principal](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal) and [OAuth 2](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-protocols) credentials.


=======
Any optional parameters supplied will update the corresponding details of the existing filesystem.

Any optional parameters supplied will update the corresponding details of the existing filesystem. The parameters that can be changed are the same as the ones listed in the [`filesystem add adls2 oauth`](./command-reference.md#filesystem-add-adls2-oauth) section.

All parameters are optional except `--file-system-id`, which specifies the file system you want to update.

#### Example

```text
filesystem update adls2 oauth --file-system-id mytarget --storage-account-name myadls2 --oauth2-client-id b67f67ex-ampl-e2eb-bd6d-client9385id --oauth2-client-secret 2IPO8*secretk-9OPs8n*TexampleHJ= --oauth2-client-endpoint https://login.microsoftonline.com/78u098ex-ampl-e498-8bce-ndpoint5f2e5/oauth2/v2.0/token --container-name lm2target
```

----

### `filesystem update adls2 sharedKey`

Update an existing Azure Data Lake Storage Gen 2 container migration target using the `filesystem update adls2 sharedKey` command. You will be prompted to optionally update the [secret key](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#view-account-access-keys).

Any optional parameters supplied will update the corresponding details of the existing filesystem. The parameters that can be changed are the same as the ones listed in the [`filesystem add adls2 sharedKey`](./command-reference.md#filesystem-add-adls2-sharedkey) section.

All parameters are optional except `--file-system-id`, which specifies the file system you want to update.

#### Example

```text
filesystem update adls2 sharedKey --file-system-id mytarget --storage-account-name myadls2 --container-name lm2target --shared-key Yi8NxHGqoQ79DBGLVn+COK/sRDwbNqAEXAMPLEDaMxRkvXt2ijUtASHAREDj/vaS/NbzR5rtjEKEY31eIopUVA==
```

----

### `filesystem update gcs`

Update a Google Cloud Storage migration target using the `filesystem update gcs` command.

Any optional parameters supplied will update the corresponding details of the existing filesystem. The parameters that can be changed are the same as the ones listed in the [`filesystem add gcs`](./command-reference.md#filesystem-add-gcs) section.

All parameters are optional except `--file-system-id`, which specifies the file system you want to update.

#### Example

```text
filesystem update gcs --file-system-id gcsAgent --bucket-name myGcsBucket --service-account-p12-key-file-server-location /user/hdfs/targetStorage/myAccountKey.p12 --service-account-email user@mydomain.com
```

----

### `filesystem update hdfs`

Update either a source or target Hadoop Distributed File System using the `filesystem update hdfs` command.

Any optional parameters supplied will update the corresponding details of the existing filesystem. The parameters that can be changed are the same as the ones listed in the [`filesystem add hdfs`](./command-reference.md#filesystem-add-hdfs) section.

All parameters are optional except `--file-system-id`, which specifies the file system you want to update.

#### Examples

```text title="Example for source NameNode HA cluster"
filesystem update hdfs --file-system-id mysource --default-fs hdfs://sourcenameservice --properties-files /etc/hadoop/conf/core-site.xml,/etc/hadoop/conf/hdfs-site.xml
```

```text title="Example for source NameNode HA cluster with Kerberos enabled"
filesystem update hdfs --file-system-id mytarget --default-fs hdfs://sourcenameservice --properties-files /etc/hadoop/conf/core-site.xml,/etc/hadoop/conf/hdfs-site.xml --kerberos-keytab /etc/security/keytabs/hdfs.headless.keytab --kerberos-principal hdfs@SOURCEREALM.COM
```


----

### `filesystem update local`

Update a target or source local filesystem using the `filesystem update local` command.

Any optional parameters supplied will update the corresponding details of the existing filesystem. The parameters that can be changed are the same as the ones listed in the [`filesystem add local`](./command-reference.md#filesystem-add-local) section.

All parameters are optional except `--file-system-id`, which specifies the file system you want to update.

#### Example

```text
filesystem update local --file-system-id mytarget --fs-root ./tmp
```

----

### `filesystem update s3a`

Update an S3 bucket target file system using the `filesystem update s3a` command. This method also supports IBM COS buckets.

Any optional parameters supplied will update the corresponding details of the existing filesystem. The parameters that can be changed are the same as the ones listed in the [`filesystem add s3a`](./command-reference.md#filesystem-add-s3a) section.

All parameters are optional except `--file-system-id`, which specifies the file system you want to update.

#### Example

```text
filesystem update s3a --file-system-id mytarget --bucket-name mybucket1 --credentials-provider org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider --access-key B6ZAI18Z3UIO002Y777A --secret-key OP87Chokisf4hsTP0Q5j95yI904lT7AaDBGJpp0D
```

----

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
```

#### Mandatory Parameters

* **`--exclusion-id`** The identifier for the exclusion policy to show. This is referenced in the UI as **Name**.

#### Example

```text
exclusion show --exclusion-id 100mbfiles
```

## Path Mapping Commands

----

### `path mapping add`

Create a path mapping that allows you to define a alternative target path for a specific target filesystem. These will be automatically applied to a new migration.

When path mapping is not used, the source path is created on the target filesystem.

:::note
Path mappings cannot be applied to existing migrations. Delete and recreate a migration if you want a path mapping to apply.
:::

```text title="Create a new path mapping"
SYNOPSYS
        path mapping add [[--path-mapping-id] string]
                         [--source-path] string
                         [--target] string
                         [--target-path] string
                         [--description] string
```

#### Mandatory Parameters

* **`--source-path`** The path on the source filesystem.
* **`--target`** The target filesystem id (value defined for the `--file-system-id` parameter).
* **`--target-path`** The path for the target filesystem.
* **`--description`** Description of the path mapping enclosed in quotes (`"text"`).

#### Optional Parameters

* **`--path-mapping-id`** An identifier for this path mapping. An identifier will be auto-generated if one is not provided.

#### Example

```text title="Example for HDP to HDI - default Hive warehouse directory"
path mapping add --path-mapping-id hdp-hdi --source-path /apps/hive/warehouse --target mytarget --target-path /hive/warehouse --description "HDP to HDI - Hive warehouse directory"
```

----

### `path mapping del`

Delete a path mapping.

:::note
Deleting a path mapping will not affect any existing migrations that have the path mapping applied. Delete and recreate a migration if you no longer want a previous path mapping to apply.
:::

```text title="Delete a path mapping"
SYNOPSYS
        path mapping del [--path-mapping-id] string
```

#### Mandatory Parameters

* **`--path-mapping-id`** The identifier of the path mapping.

#### Example

```text
path mapping del --path-mapping-id hdp-hdi
```

----

### `path mapping list`

List all path mappings.

```text title="List all path mappings"
SYNOPSYS
        path mapping list [[--target] string]
```

#### Optional Parameters

* **`--target`** List path mappings for the specified target filesystem id.

#### Examples

```text title="Example for listing all path mappings"
path mapping list --target hdp-hdi
```

```text title="Example for listing path mappings for a specific target"
path mapping list --target hdp-hdi
```

----

### `path mapping show`

Show details of a specified path mapping.

```text title="Get path mapping details"
SYNOPSYS
        path mapping show [--path-mapping-id] string
```

#### Optional Parameters

* **`--path-mapping-id`** The identifier of the path mapping.

#### Example

```text
path mapping show --path-mapping-id hdp-hdi
```

## Migration Commands

----

### `migration stop`

Stop a migration from transferring content to its target, placing it into the `STOPPED` state. Stopped migrations can be resumed.

```text title="Stop a migration"
SYNOPSYS
        migration stop [--migration-id] string
```

#### Mandatory Parameters

* **`--migration-id`** The identifier of the migration to stop.

#### Example

```text
migration stop --migration-id 4ffa620b6ebb0cd34f2c591220d93830f91ccc7e
```

----

### `migration resume`

Resume a migration that you've stopped from transferring content to its target.

```text title="Resume a migration"
SYNOPSYS
        migration resume [--migration-id] string
```

#### Mandatory Parameters

* **`--migration-id`** The identifier of the migration to resume.

#### Example

```text
migration resume --migration-id 4ffa620b6ebb0cd34f2c591220d93830f91ccc7e
```

----

### `migration del`

Delete a stopped migration resource.

```text title="Delete a migration"
SYNOPSYS
        migration del [--migration-id] string
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

### `migration add`

Create a new migration to initiate data migration from your source file system.

```text title="Create a new migration"
SYNOPSYS
        migration add [[--migration-id] string]
                      [--path] string
                      [--target] string
                      [[--exclusions] string]
                      [[--action-policy] string]
                      [--auto-start]
```

#### Mandatory Parameters

* **`--path`** Defines the source file system directory that is the scope of the migration. All content (other than that excluded) will be migrated to the target. This is referenced in the UI as **Path for {source-filesystem}**.

  :::note
  ADLS Gen2 has a filesystem restriction of 60 segments. Make sure your path has less than 60 segments when defining the path string parameter.
  :::

* **`--target`** Specifies the name of the target file system resource to which migration will occur. This is referenced in the UI as **Target**.

#### Optional Parameters

* **`--migration-id`** Provide an identifier for the new migration. An identifier will be auto-generated if one is not provided.
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
migration add --path /repl1 --target mytarget –-migration-id myNewMigration --exclusions 100mbfiles
```

----



### `migration run`

Start a migration that was created without the `--auto-start` parameter.

```text title="Start a migration"
SYNOPSYS
        migration run [--migration-id] string
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
* List of migrations, including static migrations, with source path and migration id with current progress, broken down by migration state: completed, live, stopped, running and ready.

```text title="Get migration status"
NAME
        status - Get migration status.

SYNOPSYS
        status
```

### Optional Parameters

* **`--transfers`** Displays overall performance information about data transfers across the last 10 seconds, 1 minute and 30 minute intervals.
* **`--diagnostics`** Returns additional information about your LiveData Migrator instance and its migrations, useful for troubleshooting.

#### Example

```text title="Status"
WANdisco LiveMigrator >> status

Network             (10s)       (1m)       (30m)
---------
Average Throughput: 10.4 Gib/s  9.7 Gib/s  10.1 Gib/s
Average Files/s:    425         412        403

11 Migrations                                     dd:hh:mm  dd:hh:mm
-------------
Complete: 1         Transferred         Excluded  Duration
 /static1   5a93d5        67.1 GiB       2.3 GiB  00:12:34

Live:     3         Transferred         Excluded  Duration
 /repl1     9088aa       143.2 GiB      17.3 GiB  00:00:34
 /repl_psm1 a4a7e6       423.6 TiB       9.6 GiB  02:05:29
 /repl5     ab140d       118.9 GiB       1.2 GiB  00:00:34

Running:  5         Transferred         Excluded  Duration  Remaining
 /repl123   e3727c  30.3/45.2 GiB 67%    9.8 GiB  00:00:34  00:00:17
 /repl2     88e4e7  26.2/32.4 GiB 81%    0.2 GiB  00:01:27  00:00:12
 /repl3     372056   4.1/12.5 GiB 33%    1.1 GiB  00:00:25  00:01:05
 /repl4     6bc813  10.6/81.7 TiB  8%   12.4 GiB  00:04:21  01:02:43
 /replxyz   dc33cb   2.5/41.1 GiB  6%    6.5 GiB  01:00:12  07:34:23

Ready:    2
 /repl7     070910  543.2 GiB
 /repltest  d05ca0  7.3 GiB

WANdisco LiveMigrator >> status
```

```text title="Status with --transfers"
WANdisco LiveMigrator >> status --transfers

Files (10s) (1m) (30m)

Average Migrated/s: 362 158 4781
< 1 KB 14 27 3761
< 1 MB 151 82 0
< 1 GB 27 1 2
< 1 PB 0 0 0
< 1 EB 0 0 0

Peak Migrated/s: 505 161 8712
< 1 KB 125 48 7761
< 1 MB 251 95 4
< 1 GB 29 7 3
< 1 PB 0 0 0
< 1 EB 0 0 0

Average Scanned/s: 550 561 467
Average Rescanned/s: 24 45 56
Average Excluded/s: 7 7 6
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

Set the bandwidth policy that will determine how much bandwidth LiveData Migrator can use.

If no policy is defined, the default policy is unlimited bandwidth.

```text title="Set the application bandwidth limit, in bytes per second"
SYNOPSYS
        bandwidth policy set [--value] long  [--unit] string
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

Add a local or remote hive agent to connect to an [Azure SQL](https://docs.microsoft.com/en-gb/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview) database using the `hive agent add azure` command.

If your LiveData Migrator host can communicate directly with the Azure SQL database, then a local hive agent will be sufficient. Otherwise, consider using a remote hive agent.

:::info remote deployments
For a remote hive agent connection, specify a remote host (Azure VM, HDI cluster node) that will be used to communicate with the local LiveData Migrator server (constrained to a user-defined port).

A small service will be deployed on this remote host so that the hive agent can migrate data to and/or from the Azure SQL database.
:::

```text title="Add Azure SQL agent"
SYNOPSYS
        hive agent add azure [[--name] string]
                             [--db-server-name] string
                             [--database-name] string
                             [--database-user] string
                             [--database-password] string
                             [--storage-account] string
                             [--container-name] string
                             [[--root-folder] string]
                             [[--hdi-version] string]
                             [[--insecure] boolean]
```

#### Mandatory Parameters

:::info
The Azure hive agent requires a ADLS Gen2 storage account and container name, this is only for the purposes of generating the correct location for the database. The container will not be accessed by the Hive agent and no data will be written to the container.
:::

* **`--db-server-name`** The Azure SQL database server name. Only the name given to the server is required, the `.database.windows.net` suffix should be omitted.
* **`--database-name`** The Azure SQL database name.
* **`--storage-account`** The name of the ADLS Gen 2 storage account.
* **`--container-name`** The name of the container in the ADLS Gen2 storage account.

#### Authentication Parameters

Choose one of the authentication methods listed and include the additional parameters required for the chosen method.

* **`--auth-method`** The authentication method to use to connect to the Azure SQL server.  
  The following methods can be used:
  * `SQL_PASSWORD` - Provide a username and password to access the database.
  * `AD_MSI` - Use a system-assigned or user-assigned [managed identity](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview#managed-identity-types).

##### Required Parameters for SQL_PASSWORD

* **`--database-user`** The user name to access the database.
* **`--database-password`** The user password to access the database.

##### Required Parameters for AD_MSI

To use this method, the following pre-requirements must be met:

* LiveData Migrator or the remote Azure hive agent must be installed on an [Azure resource with the managed identity assigned to it](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/qs-configure-portal-windows-vm). The host must also have [Azure Active Directory authentication](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/login-using-aad) enabled.
* Your Azure SQL server must be enabled for [Azure Active Directory authentication](https://docs.microsoft.com/en-us/azure/azure-sql/database/authentication-aad-configure?tabs=azure-powershell).
* You have [created a contained user in the Azure SQL database that is mapped to the Azure Active Directory resource](https://docs.microsoft.com/en-us/azure/azure-sql/database/authentication-aad-configure?tabs=azure-powershell#create-contained-users-mapped-to-azure-ad-identities) (where LiveData Migrator or the remote Azure hive agent is installed).
  * The username of the contained user will depend on whether you are using a system-assigned or user-assigned identity.

    ```text title="Azure SQL database command for a system-assigned managed identity"
    CREATE USER "<azure_resource_name>" FROM EXTERNAL PROVIDER;
    ALTER ROLE db_owner ADD MEMBER "<azure_resource_name>";
    ```

    The `<azure_resource_name>` is the name of the Azure resource where LiveData Migrator or remote Azure hive agent is installed (for example: `myAzureVM`).

    ```text title="Azure SQL database command for a user-assigned managed identity"
    CREATE USER <managed_identity_name> FROM EXTERNAL PROVIDER;
    ALTER ROLE db_owner ADD MEMBER <managed_identity_name>;
    ```

    The `<managed_identity_name>` is the name of the user-assigned managed identity (for example: `myManagedIdentity`).

Once all pre-requirements are met, see the [system-assigned identity](#system-assigned-identity) or [user-assigned identity](#user-assigned-identity) parameters.

###### System-assigned identity

No other parameters are required for a system-managed identity.

###### User-assigned identity

The `--client-id` parameter must be specified:

* **`--client-id`** The Client ID of your Azure managed identity.

#### Optional Parameters

* **`--name`** The identifier to give to the new Hive agent.
* **`--root-folder`** The root directory for the Azure database.
* **`--hdi-version`** The [HDI](https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-component-versioning) version. This is relevant if you are intending to integrate your SQL server into a HDInsights cluster.
* **`--insecure`** Define an insecure connection (SSL disabled) to the Azure SQL database server (default is `false`).

#### Parameters for remote hive agents only

* **`--host`** The host where the remote hive agent will be deployed.
* **`--port`** The port for the remote hive agent to use on the remote host. Default is `5052`. This port is used to communicate with the local LiveData Migrator server.

##### Parameters for automated deployment

* **`--autodeploy`** The remote agent will be automatically deployed when this flag is used. If using this, the `--ssh-key` parameter must also be specified.
* **`--ssh-user`** The SSH user to use for authentication on the remote host to perform automatic deployment (when using the `--autodeploy` parameter).
* **`--ssh-key`** The absolute path to the SSH private key to use for authentication on the remote host to perform automatic deployment (when using the `--autodeploy` parameter).
* **`--ssh-port`** The SSH port to use for authentication on the remote host to perform automatic deployment (when using the `--autodeploy` parameter). Default is port `22`.
* **`--use-sudo`** All commands performed by the SSH user will use `sudo` on the remote host when performing automatic deployment (using the `--autodeploy` parameter).
* **`--ignore-host-checking`** Ignore [strict host key checking](https://www.redhat.com/sysadmin/linux-knownhosts-failures) when performing the automatic deployment (using the `--autodeploy` parameter).

##### Steps for manual deployment

If you do not wish to use the `--autodeploy` function, follow these steps to deploy a remote hive agent for Azure SQL manually:

1. Transfer the remote server installer to your remote host (Azure VM, HDI cluster node):

   ```text title="Example of secure transfer from local to remote host"
   scp /opt/wandisco/hivemigrator/hivemigrator-remote-server-installer.sh myRemoteHost:~
   ```

1. On your remote host, run the installer as root (or sudo) user in silent mode:

   ```text
   ./hivemigrator-remote-server-installer.sh -- --silent
   ```

1. On your remote host, start the remote server service:

   ```text
   service hivemigrator-remote-server start
   ```

1. On your local host, run the `hive agent add azure` command without using `--autodeploy` and its related parameters to configure your remote hive agent.

   See the **Example for remote Azure SQL deployment - manual** example below for further guidance.

#### Examples

```text title="Example for local Azure SQL deployment with SQL username/password"
hive agent add azure --name azureAgent --db-server-name mysqlserver --database-name mydb1 --auth-method SQL_PASSWORD --database-user azureuser --database-password mypassword --storage-account myadls2 --container-name mycontainer --root-folder /hive/warehouse --hdi-version 3.6
```

```text title="Example for remote Azure SQL deployment with System-assigned managed identity - automated"
hive agent add azure --name azureRemoteAgent --db-server-name mysqlserver --database-name mydb1 --auth-method AD_MSI --storage-account myadls2 --container-name mycontainer --root-folder /hive/warehouse --hdi-version 3.6 --autodeploy --ssh-user root --ssh-key /root/.ssh/id_rsa --ssh-port 22 --host myRemoteHost.example.com --port 5052
```

```text title="Example for remote Azure SQL deployment with User-assigned managed identity - manual"
hive agent add azure --name azureRemoteAgent --db-server-name mysqlserver --database-name mydb1 --auth-method AD_MSI --client-id b67f67ex-ampl-e2eb-bd6d-client9385id --storage-account myadls2 --container-name mycontainer --root-folder /hive/warehouse --hdi-version 3.6 --host myRemoteHost.example.com --port 5052
```

----

### `hive agent add filesystem`

Add a filesystem hive agent to connect to your host's local filesystem using the `hive agent add filesystem` command.

```text title="Add filesystem agent"
SYNOPSYS
        hive agent add filesystem [--filesystem-id] string
                                  [--root-folder] string
                                  [[--name] string]
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

Add an [AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html) hive agent to connect to an [AWS Glue data catalog](https://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html) using the `hive agent add glue` command.

```text title="Add AWS Glue agent"
SYNOPSYS
        hive agent add glue [[--name] string]
                            [[--config-path] string]
                            [[--access-key] string]
                            [[--secret-key] string]
                            [[--session-token] string]
                            [[--glue-endpoint] string]
                            [[--aws-region] string]
                            [[--aws-catalog-credentials-provider-factory-class] string]
                            [[--default-fs] string]
```

#### Optional Parameters

* **`--name`** The identifier to give to the new Hive agent.
* **`--config-path`** The path to the directory containing the `glue-site.xml`.
* **`--access-key`** The [AWS access key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).
* **`--secret-key`** The [AWS secret key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).
* **`--session-token`** The [AWS session token](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html). Only valid if using `SessionCredentialsProviderFactory` for the `--aws-catalog-credentials-provider-factory-class` parameter.
* **`--glue-endpoint`** The [AWS Glue endpoint](https://docs.aws.amazon.com/glue/latest/dg/console-connections.html?icmpid=docs_glue_console) for connections to databases.
* **`--aws-region`** The [AWS region](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/) that your database is located in (default is `us-east-1`).
* **`--aws-catalog-credentials-provider-factory-class`** The [AWS catalog credentials provider factory class](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html#credentials-specify-provider) (default is [DefaultAWSCredentialsProviderChain](https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/index.html?com/amazonaws/auth/DefaultAWSCredentialsProviderChain.html)).
* **`--default-fs`** The base URI of the filesystem to generate the locations within the database (for example: `s3://test_bucket/`).

#### Example

```text
hive agent add glue --name glueAgent --access-key ACCESS6HCFPAQIVZTKEY --secret-key SECRET1vTMuqKOIuhET0HAI78UIPfSRjcswTKEY --aws-region eu-west-1 --default-fs s3://test_bucket/
```

### `hive agent add hive`

Add a hive agent to connect to a local or remote [Apache Hive](https://cwiki.apache.org/confluence/display/Hive/Home) metastore using the `hive agent add hive` command.

Before deploying an agent, see our recommendations section on [enabling the Hive metastore event listener](./configuration-metadata.md#enable-hive-metastore-event-listener) for Apache Hive environments.

:::info remote deployments
When connecting to a remote Apache Hive metastore, specify a host on the remote cluster that will be used to communicate with the local LiveData Migrator server (constrained to a user-defined port).

A small service will be deployed on this remote host so that the hive agent can migrate data to and/or from the remote Apache Hive metastore.
:::

```text title="Add local or remote hive agent"
SYNOPSYS
        hive agent add hive [[--config-path] string]
                            [[--kerberos-principal] string]
                            [[--kerberos-keytab] string]
                            [[--name] string]
                            [[--host] string]
                            [[--port] integer]
                            [--autodeploy]
                            [[--ssh-user] string]
                            [[--ssh-key] file]
                            [[--ssh-port] int]
                            [--use-sudo]
                            [--ignore-host-checking]

```

#### Parameters for local or remote hive agents

* **`--config-path`** The path to the directory containing the Hive configuration files (for example: `/etc/hive/conf`).
* **`--kerberos-principal`** The Kerberos principal to use to access the Hive service (for example: `hive/_HOST@REALM.COM`). Not required if Kerberos is disabled.
* **`--kerberos-keytab`** The path to the Kerberos keytab containing the principal to access the Hive service (for example: `/etc/security/keytabs/hive.service.keytab`). Not required if Kerberos is disabled.
* **`--name`** The identifier to give to the new Hive agent.

#### Parameters for remote hive agents only

* **`--host`** The host where the remote hive agent will be deployed.
* **`--port`** The port for the remote hive agent to use on the remote host. Default is `5052`. This port is used to communicate with the local LiveData Migrator server.

##### Parameters for automated deployment

* **`--autodeploy`** The remote agent will be automatically deployed when this flag is used. If using this, the `--ssh-key` parameter must also be specified.
* **`--ssh-user`** The SSH user to use for authentication on the remote host to perform automatic deployment (when using the `--autodeploy` parameter).
* **`--ssh-key`** The absolute path to the SSH private key to use for authentication on the remote host to perform automatic deployment (when using the `--autodeploy` parameter).
* **`--ssh-port`** The SSH port to use for authentication on the remote host to perform automatic deployment (when using the `--autodeploy` parameter). Default is port `22`.
* **`--use-sudo`** All commands performed by the SSH user will use `sudo` on the remote host when performing automatic deployment (using the `--autodeploy` parameter).
* **`--ignore-host-checking`** Ignore [strict host key checking](https://www.redhat.com/sysadmin/linux-knownhosts-failures) when performing the automatic deployment (using the `--autodeploy` parameter).

##### Steps for manual deployment

If you do not wish to use the `--autodeploy` function, follow these steps to deploy a remote hive agent for Apache Hive manually:

1. Transfer the remote server installer to your remote host:

   ```text title="Example of secure transfer from local to remote host"
   scp /opt/wandisco/hivemigrator/hivemigrator-remote-server-installer.sh myRemoteHost:~
   ```

1. On your remote host, run the installer as root (or sudo) user in silent mode:

   ```text
   ./hivemigrator-remote-server-installer.sh -- --silent
   ```

1. On your remote host, start the remote server service:

   ```text
   service hivemigrator-remote-server start
   ```

1. On your local host, run the `hive agent add hive` command without using `--autodeploy` and its related parameters to configure your remote hive agent.

   See the **Example for remote Apache Hive deployment - manual** example below for further guidance.

#### Examples

```text title="Example for local Apache Hive deployment"
hive agent add hive --name sourceAgent --kerberos-keytab /etc/security/keytabs/hive.service.keytab --kerberos-principal hive/_HOST@LOCALREALM.COM
```

```text title="Example for remote Apache Hive deployment - automated"
hive agent add hive --name targetautoAgent --autodeploy --ssh-user root --ssh-key /root/.ssh/id_rsa --ssh-port 22 --host myRemoteHost.example.com --port 5052 --kerberos-keytab /etc/security/keytabs/hive.service.keytab --kerberos-principal hive/_HOST@REMOTEREALM.COM --config-path /etc/hive/conf
```

```text title="Example for remote Apache Hive deployment - manual"
hive agent add hive --name targetmanualAgent --host myRemoteHost.example.com --port 5052 --kerberos-keytab /etc/security/keytabs/hive.service.keytab --kerberos-principal hive/_HOST@REMOTEREALM.COM --config-path /etc/hive/conf
```

:::note
If specifying Kerberos and config path information for remote agents, ensure that the directories and Kerberos principal are correct for your chosen remote host (not your local host).
:::

----

### `hive agent check`

Check the configuration of an existing hive agent using `hive agent check`.

```text title="Check if agent configuration is valid & connectable"
SYNOPSYS
        hive agent check [--name] string
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
```

#### Example

```text
hive rule show --name test_databases
```

## Hive Migration Commands

----

### `hive migration add`

Create a new hive migration to initiate metadata migration from your source metastore.

:::info
[Create hive rules](#hive-rule-addhive-rule-create) before initiating a hive migration to specify which databases and tables are migrated.
:::

```text title="create new migration"
SYNOPSYS
        hive migration add [--source] string  [--target] string  [[--rule-names] list]  [[--name] string]  [--auto-start]  [--once]
```

#### Mandatory Parameters

* **`--source`** The name of the hive agent for the source of migration.
* **`--target`** The name of the hive agent for the target of migration.

#### Optional Parameters

* **`--rule-names`** The rule name or list of rule names to use with the migration. Multiple rules need to be comma-separated (for example: `rule1,rule2,rule3`).
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

Pause a hive migration or a list of hive migrations (comma-separated).

```text title="Pause migration from the list"
SYNOPSYS
        hive migration pause [--names] list
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

Resume a paused hive migration or a list of paused hive migrations (comma-separated).

```text title="Resume migration from the list"
SYNOPSYS
        hive migration resume [--names] list
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
```

#### Example

```text
hive migration show --name hive_migration
```

----

### `hive migration start`

Start a hive migration or a list of hive migrations (comma-separated).

:::note
Specify the `--once` parameter to perform a one-time migration, and not continuously scan for new or changing metadata.
:::

```text title="Start migration"
SYNOPSYS
        hive migration start [--names] list  [--once]
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
```

#### Example

```text
hive migration start --all --once
```

----

### `hive migration status`

Show the status of a hive migration or a list of hive migrations (comma-separated).

```text title="Show migration status"
SYNOPSYS
        hive migration status [--names] list
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

Stop a running hive migration or a list of running hive migrations (comma-separated).

```text title="Stop running migration"
SYNOPSYS
        hive migration stop [--names] list
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

## License Commands

----

### `license show`

Show the details of the active license.

```text title="show used license"
SYNOPSYS
        license show [--full]
```

----

### `license upload`

Upload a new license by submitting its location on the local filesystem.

```text title="upload license file"
SYNOPSYS
        license upload [--path] string
```

#### Example

```text
license upload --path /user/hdfs/license.key
```

## Connect Commands

----

### `connect livemigrator`

Connect to the LiveData Migrator service on your LiveData Migrator host with this command.

:::note
This is a manual method of connecting to the LiveData Migrator service as the `livedata-migrator` command (shown in [CLI - Log in](./get-started.md)) will attempt to establish this connection automatically.
:::

```text title="connect livemigrator"
SYNOPSYS
        connect livemigrator [--host] string
                             [--ssl]
                             [[--port] int]
                             [[--timeout] integer]
```

#### Mandatory Parameters

* **`--host`** The hostname or IP address for the LiveData Migrator host.

#### Optional Parameters

* **`--ssl`** Specify this parameter if you want to establish an SSL connection to LiveData Migrator. Enable [Server SSL](./configuration-ldm.md#server-ssl) on the LiveData Migrator service before using this parameter.
* **`--port`** The LiveData Migrator port to connect on (default is `18080`).
* **`--timeout`** Define the connection timeout in milliseconds. Set this parameter to override the default connection timeout of 5 minutes (300000ms).

#### Example

```text
connect livemigrator --host localhost --port 18080
```

----

### `connect hivemigrator`

Connect to the HiveMigrator service on your LiveData Migrator host with this command.

:::note
This is a manual method of connecting to the HiveMigrator service as the `livedata-migrator` command (shown in [CLI - Log in](./get-started.md) section) will attempt to establish this connection automatically.
:::

```text title="connect hivemigrator"
SYNOPSYS
        connect hivemigrator [--host] string
                             [--ssl]
                             [[--port] int]
                             [[--timeout] long]
```

#### Mandatory Parameters

* **`--host`** The hostname or IP address for the LiveData Migrator host that contains the HiveMigrator service.

#### Optional Parameters

* **`--ssl`** Specify this parameter if you want to establish an SSL connection to HiveMigrator.
* **`--port`** The HiveMigrator service port to connect on (default is `6780`).
* **`--timeout`** Define the connection timeout in milliseconds. Set this parameter to override the default connection timeout of 5 minutes (300000ms).

#### Example

```text
connect hivemigrator --host localhost --port 6780
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

Prints whatever text that you write to the console. This can be used to sanity check a command before running it (for example: `echo migration add --path /repl1 --target mytarget –-migration-id myNewMigration --exclusions 100mbfiles`).

```text title="Print message"
SYNOPSYS
        echo [--message] string
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

```

#### Example

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
```

#### Optional Parameters

* **`--file`** The name of the file in which to save the history of commands.

----

### `script`

Load and execute commands from a text file using the `script --file <filename>` command. This file should have one command per line, and each will be executed as though they were entered directly at the action prompt in that sequence.

```text title="Read and execute commands from a file"
SYNOPSYS
        script [--file] file
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

## System Service Commands

The service scripts can be used to control operation of each individual service at any time.

### LiveData Migrator

`service livedata-migrator start|stop|force-reload|restart|status`

### HiveMigrator

`service hivemigrator start|stop|force-reload|restart|status`

### LiveData UI

`service livedata-ui start|stop|force-reload|restart|status`

## Log Commands

The following commands will only affect logging of the CLI terminal, and will not affect other components of LiveData Migrator:

`log off`  
`log info`  
`log debug`  
`log trace`
