---
id: about
title: LiveData Migrator
sidebar_label: About LiveData Migrator
---

WANdisco LiveData Migrator is a fully self-service data migration solution that is immediate, live, and scalable.

**Immediate:** enabling administrators to easily deploy the solution and begin migration of data lake content to the cloud immediately. It is entirely non-intrusive and requires zero changes to applications, cluster or node configuration or operation.

**Live:** WANdisco’s LiveData capabilities enable data migration to occur while the source data is under active change, without requiring any production system downtime or business disruption supporting complete and continuous data migration.

**Scalable:** able to accommodate data migration at any scale, without any risk of data loss.

## Features

LiveData Migrator _migrates changing data_ at scale from HDFS to your choice of target environment, including the ongoing changes made to those data before, throughout and after migration. Targets include  [ADLS Gen 2](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction), [GCS](https://cloud.google.com/storage), [HDFS](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html), and [S3](https://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html) (including [IBM COS](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-getting-started-cloud-object-storage)).

Manage your migrations through a **user interface**, a **command-line interface** or from the self-documenting **REST API**, track and **monitor migration progress**, and take advantage of optional management from WANdisco's **browser-based user interface** and deep integration with **cloud vendors' management interfaces**.

- A robust and efficient scanner that visits source items only once to identify content for migration.
- Integration with HDFS notifications that describe changes in source data while migration is  underway.
- Selective and flexible choices of data to be migrated.
- Measurement and monitoring of migration progress to help estimate completion and plan your other activities.
- Bandwidth management to control how much of your network capacity is used for migrations.

## Hive Migrator

Hive Migrator is an optional extra component of LiveData Migrator that allows replication of Hive and other SQL engines’ metadata.

By default, LiveData Migrator installation package automatically installs Hive Migrator. But if you have already installed a previous version of LiveData Migrator that did not include Hive Migrator, you must install Hive Migrator separately to use it.

## Get started

Ready to use LiveData Migrator? See the [prerequisites](./installation.md#prerequisites) to prepare your environment for installation and successful data migrations. Once set up, you're ready to [install LiveData Migrator](./installation.md).
