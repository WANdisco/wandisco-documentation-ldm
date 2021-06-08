---
id: preview-features
title: Enable Preview Features
sidebar_label: Enable preview features
---

Preview features are LiveData Migrator features that are still under development and are subject to improvement. These are disabled by default, and must be enabled in the properties file:

`/etc/wandisco/livedata-migrator/application.properties`

Preview features must be enabled by finding the corresponding property with the prefix `preview.feature.` and changing the `OFF` value to `ON`. For example:

```text title="Example for enabling Backup & Restore"
preview.feature.backup-restore=ON
```

LiveData Migrator must then be restarted for the changes to take effect:

```text
service livedata-migrator restart
```

## Current preview features

The following preview features are currently available in LiveData Migrator.

### [Backup and Restore](./backup-and-restore.md)

This feature allows you to save LiveData Migrator's current state - including migrations, filesystems, path mappings and configuration - and restore it later. [View the full list of properties this feature backs up and restores here](./backup-and-restore).

Enable this feature with the following property:

```text
preview.feature.backup-restore=ON
```

### [Migration verifications](./migration-verifications.md)

This feature allows you to run a verification job on a [Live, Running or Completed](./manage-migrations.md#data-migration-states) data migration. The verification job will scan your source and target filesystems (in the migration path) and compare them for any discrepancies.

Enable this feature with the following property:

```text
preview.feature.verifications=ON
```

## Preview status

These features do not require enablement in the properties file.

### S3 as a source filesystem

LiveData Migrator supports Amazon Simple Storage Service (Amazon S3) buckets as source storage.

#### Creating an Amazon S3 source through the UI

To configure an Amazon S3 bucket as a source filesystem, select **Amazon S3** in the **Storage Type** dropdown menu when [configuring storage with the UI](./configure-storage.md#configure-storage-with-the-ui).

#### Creating an Amazon S3 source in the CLI

Supply the `--source` parameter to the [`filesystem add s3a` command](./command-reference.md#filesystem-add-s3a).

```text title="Example"
filesystem add s3a --file-system-id mytarget --bucket-name mybucket1 --credentials-provider org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider --access-key B6ZAI18Z3UIO002Y777A --secret-key OP87Chokisf4hsTP0Q5j95yI904lT7AaDBGJpp0D --source
```
