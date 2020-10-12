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

## WANdisco LiveData Platform

LiveData Migrator is a part of the WANdisco LiveData Platform, which provides the easiest and most capable solution for migrating your on-premises Hadoop data to cloud environments. Use it to:

- Rapidly **provision a Live Data service** that supports simple and advanced migration needs.
- **Reduce the cost and risk** of bringing your business-critical data to [Azure Data Lake Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction), [AWS S3](https://aws.amazon.com/s3/), [IBM Cloud Object Storage](https://www.ibm.com/uk-en/cloud/object-storage), [Google Cloud Storage](https://cloud.google.com/storage), other [HDFS](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html) or [Hadoop-compatible storage platforms](https://cwiki.apache.org/confluence/display/HADOOP2/HCFS).
- **Continue to run** your on-premises big data operations while migration is in progress.

LiveData Platform solves the challenges of migrating large data volumes from Hadoop to the cloud and keeping those data consistent across storage systems throughput migration, _even while data are under continual change_. It employs a unique, wide-area network capable consensus engine to achieve data consistency and to implement migration of data with consistency guarantees while data are ingested or modified.

## Get started

Ready to use LiveData Migrator? See the [prerequisites](./installation.md#prerequisites) to prepare your environment for installation and successful data migrations. Once set up, you're ready to [install LiveData Migrator](./installation.md).
