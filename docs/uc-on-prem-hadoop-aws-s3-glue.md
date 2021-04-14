---
id: uc-on-prem-hadoop-aws-s3-glue
title: On-premises Hadoop to AWS S3 and Glue
sidebar_label: On-premises Hadoop to AWS S3 & Glue
---

These are an outline of the steps needed to ready your environment for migration of data and metadata.

**Time to complete:** 1 hour (assuming all prerequisites are met).

## Recommended technical knowledge

* Linux operating system
* Apache Hadoop administration
  * Hadoop Distributed Filesystem (HDFS)
  * Apache Hive
* AWS Service configuration and management
  * AWS S3
  * AWS Glue

## Prerequisites

### On-premises Hadoop cluster

* All [prerequisites](./prereqs.md#prerequisites) are met for the source environment.

* Network connectivity between your edge node and [AWS S3](https://docs.aws.amazon.com/general/latest/gr/s3.html) & [AWS Glue](https://docs.aws.amazon.com/general/latest/gr/glue.html). These are some of the options available depending on your use-case:

  * [AWS Site-to-Site VPN](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) - suitable for small/medium/test migrations.
  * [AWS Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html) - suitable for larger migrations (up to 100Gbps).

### AWS S3 and Glue

For your target environment, make sure you have the following:

* An [AWS account](https://aws.amazon.com/account/).
* An [AWS S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/GetStartedWithS3.html).
* An [AWS Glue connection](https://docs.aws.amazon.com/glue/latest/dg/console-connections.html) to your AWS S3 bucket.

## Configure for data migrations

### Add HDFS as source filesystem

1. Configure your on-premises HDFS as the source filesystem:

   * [UI](./configure-storage.md#configure-source-storage)
   * [CLI](./command-reference.md#filesystem-auto-discover-source-hdfs)

1. _(CLI only)_ Validate that your on-premises HDFS is now set as your source filesystem:

   [`source fs show`](./command-reference.md#source-fs-show)

   If the filesystem shown is incorrect, delete it using [`source del`](./command-reference.md#source-del) and configure the source manually:

   [`filesystem add hdfs`](./command-reference.md#filesystem-add-hdfs)

   Ensure to include the `--source` parameter when using the command above.

### Add AWS S3 bucket as target filesystem

Configure your AWS S3 bucket as your target filesystem:

* [UI](./configure-storage.md#add-target-storages)
* [CLI](./command-reference.md#filesystem-add-s3a)

## (Optional) Create path mappings

[Create path mappings](./create-path-mappings.md) to ensure that data for managed Hive databases and tables are migrated to an appropriate [folder location on your AWS S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-folders.html).

This lets you start using your source data and metadata immediately after migration, as it will be referenced correctly by your [AWS Glue crawler](https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html) and/or [AWS Glue Studio](https://docs.aws.amazon.com/glue/latest/ug/edit-jobs-source-s3-files.html).

## Configure for metadata migrations

### Add source hive agent

1. (Recommended) [Enable the Hive metastore event listener](./configuration-metadata.md#enable-hive-metastore-event-listener) on the on-premises Hadoop cluster.

1. Configure the source hive agent to connect to the Hive metastore on the on-premises Hadoop cluster:

   * [UI](./connect-metastores.md#add-source-agent)
   * [CLI](./command-reference.md#hive-agent-add-hive)

1. Check that the configuration for the hive agent is correct:

   * UI - the agent will show a healthy connection.
   * CLI

     ```text title="Example"
     hive agent check --name hiveAgent
     ```

### Add target hive agent

1. Configure a hive agent to connect to AWS Glue:

   * [UI](./connect-metastores.md#add-target-agents)
   * [CLI](./command-reference.md#hive-agent-add-glue)

1. Check that the configuration for the hive agent is correct:

   * UI - the agent will show a healthy connection.
   * CLI

     ```text title="Example"
     hive agent check --name azureAgent
     ```

## Next Steps

Start [defining exclusions](./configure-exclusions.md) and [migrating data](./create-migration.md). You can also [create metadata rules](./define-metadata-rules.md) and start [migrating metadata](./migrate-metadata.md).
