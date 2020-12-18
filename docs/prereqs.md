---
id: prereqs
title: Prerequisites
sidebar_label: Prerequisites
---

Ready to start? Check the prerequisites and then follow these steps to get ready for LiveData Migrator. This latest version of LiveData Migrator also includes a preview of a metadata migration feature. Prerequisites to migrate metadata are included in the list below, and you'll find instructions explaining how to use the feature throughout this guide.

[Read the release notes](https://community.wandisco.com/s/article/WANdisco-LiveData-Migrator-Release-Notes-1-8-3) to get the latest information about the current version of LiveData Migrator.

## Prerequisites

* Linux host
  * See the [release notes](https://community.wandisco.com/s/article/WANdisco-LiveData-Migrator-Release-Notes-1-8-3) for a list of supported operating systems.
* Java 1.8 64-bit.
* Network connectivity from your LiveData Migrator host to your target storage (for example: ADLS Gen2 endpoint or S3 bucket).
* Port 8081 accessible on your Linux host (to access the UI through a web browser).
* If migrating from HDFS:
  * Hadoop client libraries must be installed on the Linux host.
  * Ability to authenticate as the [HDFS superuser](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User) (for example: `hdfs`).
  * If Kerberos is enabled on your Hadoop cluster, a valid keytab containing a suitable principal for the HDFS superuser must be available on the Linux host.
* If you want to migrate metadata to or from [Apache Hive](https://cwiki.apache.org/confluence/display/Hive/Home) in our preview of the feature:
  * The Hive service must be present on the cluster.
  * SSH/CLI access to the cluster.
  * If Kerberos is enabled on your Hadoop cluster, a valid keytab containing a suitable principal for the Hive service user must be available. The host for the keytab will depend on whether you deploy locally, remotely, or both (see the [`hive agent add hive`](./command-reference.md#hive-agent-add-hive) section for more information).

## Machine specification

* **16 CPUs, 32 GB RAM** (minimum **4 CPUs, 16 GB RAM**)
  * If deploying LiveData Migrator on a Hadoop cluster, the host machine should be an edge node that matches at least 75-80% of the NameNode host specification.
* **200 GB** (SSD-backed volumes) (minimum **100 GB**)
* **2 Gbps** minimum network. Your network bandwidth must be able to cope with transferring data and ongoing changes from your source storage.

## Next Steps

Once you have all the prerequisites, you're ready to [download and install](./installation.md) LiveData Migrator.
