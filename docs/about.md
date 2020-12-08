---
id: about
title: LiveData Migrator
sidebar_label: LiveData Migrator
---

LiveData Migrator _migrates changing data_ at scale from HDFS to your choice of target environment, including the ongoing changes made to those data before, throughout and after migration. Targets include  [ADLS Gen 2](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction), [GCS](https://cloud.google.com/storage), [HDFS](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html), and [S3](https://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html) (including [IBM COS](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-getting-started-cloud-object-storage)).

The latest version of LiveData Migrator is **1.8.3** and includes a **preview** of a feature that migrates metadata in either direction between metastores and databases. Supported platforms include [Apache Hive](https://cwiki.apache.org/confluence/display/Hive/Home), [Azure SQL](https://docs.microsoft.com/en-gb/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview), [AWS-hosted databases](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/database.html), and local filesystems.

:::note
LiveData Migrator 1.8.3 was released on 20 November 2020 and includes metadata and external CLI functionality. If you are using a previous version of LiveData Migrator, use the numbered dropdown at the top right of this page and select **1.4.7** to get the right docs for you.
:::

## Get started

Ready to use LiveData Migrator? See the [prerequisites](./prereqs.md) to prepare your environment for installation and successful data migrations. Once set up, you're ready to [install LiveData Migrator](./installation.md).
