---
id: about
title: About LiveData Migrator
sidebar_label: About
---

:::note Public Preview
LiveData Migrator is in public preview. This gives you access to all product functionality for review, but limits operation time to 10 minutes during the preview period.
:::

LiveData Migrator _migrates changing data_ at scale from HDFS to your choice of target environment. Targets include  [ADLS Gen 2](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction), [HDFS](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html), local file systems, and [S3](https://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html).

<div style={{textAlign: 'center'}}>

![LiveData Migration](/wandisco-documentation-ldm/img/migration.png)

</div>

Use WANdisco's LiveData platform for risk-free, automated, and scalable migration of Hadoop data to cloud storage or other targets. Migrate your data while your business applications continue to run. LiveData Migrator migrates data lake content easily and simply for architects, administrators and operators. It is *Immediate*, *Live*, and *Scalable*.

**Immediate**: Deployment, removal, initiating migration, getting feedback, responding to environmental differences, and general operations are all _immediate_, providing an excellent user experience and eliminating any operational risk during migration. Begin migrating your data in seconds without making any changes to your on-premises data lake configuration or infrastructure.

**Live**: At scale, data are always being ingested, modified and deleted. Handling changing data is critical for migration of data lakes. Migration does not repeatedly scan source and targets for differences, because data that change throughout the time needed for that scan and comparison make consistent migration outcomes impossible. Instead, migration is *Live*, handling data that are changed at any time.

**Scalable**: Data lakes are large and growing. Migration is *scalable* to accommodate data at petabyte and exabyte volumes, including high throughput transfer, handling uncertain and change data profiles, and being able to grow with hardware capacity.

## Features

LiveData Migrator **migrates HDFS data** to other Hadoop-compatible file systems and cloud storage, including the ongoing changes made to those data before, throughout and after migration. Manage your migrations through a comprehensive and intuitive **command-line interface** or from the self-documenting **REST API**, track and **monitor migration progress**, and take advantage of optional management from WANdisco's **browser-based user interface** and deep integration with **cloud vendors' management interfaces**.

The features of LiveData Migrator are designed to work together to provide migration capabilities for big data environments that are powerful, yet extremely easy to use. It combines:

- A robust and efficient scanner that visits source items only once to identify content for migration,
- Integration with HDFS notifications that describe changes in source data while migration is  underway,
- Selective and flexible choices of data to be migrated, and
- Measurement and monitoring of migration progress to help estimate completion and plan your other activities.

## WANdisco LiveData Platform

LiveData Migrator is a part of the WANdisco LiveData Platform, which provides the easiest and most capable solution for migrating your on-premises Hadoop data to cloud environments. Use it to:

- rapidly **provision a Live Data service** that supports simple and advanced migration needs,
- **reduce the cost and risk** of bringing your business-critical data to [Azure Data Lake Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction), [AWS S3](https://aws.amazon.com/s3/), [Google Cloud Storage](https://cloud.google.com/storage), or to other [HDFS](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html) or [Hadoop-compatible storage platforms](https://cwiki.apache.org/confluence/display/HADOOP2/HCFS), and
- **continue to run** your on-premises big data operations while migration is in progress.

Take advantage of the WANdisco LiveData Platform to solve the challenges of migrating large data volumes from Hadoop to the cloud and keeping those data consistent across storage systems throughput migration, _even while data are under continual change_. It employs a unique, wide-area network capable consensus engine to achieve data consistency and to implement migration of data with consistency guarantees while data are ingested or modified.

By removing the need to halt your data processing and modifications, you are freed from rigid migration approaches that incur system downtime and planned outages. Keep your big data environments in full operation even while moving their data to a new environment.

## Getting Started

If you just want to use LiveData Migrator immediately, follow the [Quickstart](./quickstart.md) guide.

You can be fully prepared by following all the [prerequisites](./getting-started#prerequisites) to prepare your environment for installation and successful data migrations. You can then learn how to [run LiveData Migrator](./getting-started.md).
