---
id: prereqs
title: Prerequisites
sidebar_label: Prerequisites
---

Ready to start? Check the prerequisites and then follow these steps to get ready for LiveData Migrator. This latest version of LiveData Migrator also includes a metadata migration feature. Prerequisites to migrate metadata are included in the list below, and you'll find instructions explaining how to use the feature throughout this guide.

[Read the release notes](https://community.wandisco.com/s/article/Release-Notes-WANdisco-LiveData-Migrator-Release-Notes-1-11-1) to get the latest information about the current version of LiveData Migrator.

## Recommended Technical Knowledge

### System administration

* Linux operating system installation
* Disk management
* Memory monitoring and management
* Command line administration and manually editing configuration files
* Service configuration and management

### Networking

* IP Address assignation
* TCP/IP ports and Firewall setup or server certificates (for SSL)

### Cloud Storage Technologies

* Proficiency with intended target storage technologies, such as ADLS Gen 2, GCS, HDFS, and Amazon Simple Storage Service (S3).
* For Amazon Web Services, this includes:
  * Knowledge of AWS Marketplace, Amazon Elastic Compute Cloud (Amazon EC2) Console, Amazon Simple Storage Service (Amazon S3), and AWS Command Line Tool.
  * Specifically, starting, stopping, and terminating AWS instances, understanding any storage persistence and related costs.
  * Ability to monitor and troubleshoot AWS services.

### LiveData

* An understanding of the installation procedures for your platform, as provided in this guide.

If you’re not confident about meeting the requirements, you can discuss a supported installation by contacting [WANdisco](https://www2.wandisco.com/ldmaquestion).

## Prerequisites

* Linux host
  * See the [release notes](https://community.wandisco.com/s/article/Release-Notes-WANdisco-LiveData-Migrator-Release-Notes-1-11-1) for a list of supported operating systems.
* Java 1.8 64-bit.
* Network connectivity from your LiveData Migrator host to your target storage (for example: ADLS Gen2 endpoint or S3 bucket).
* Port 8081 accessible on your Linux host (to access the UI through a web browser).
* If migrating from HDFS:
  * Hadoop client libraries must be installed on the Linux host.
  * Ability to authenticate as the [HDFS superuser](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User) (for example: `hdfs`).
  * If Kerberos is enabled on your Hadoop cluster, a valid keytab containing a suitable principal for the HDFS superuser must be available on the Linux host.
* If you want to migrate metadata to or from [Apache Hive](https://cwiki.apache.org/confluence/display/Hive/Home):
  * The Hive service must be present on the cluster.
  * SSH/CLI access to the cluster.
  * If Kerberos is enabled on your Hadoop cluster, a valid keytab containing a suitable principal for the Hive service user must be available. The host for the keytab will depend on whether you deploy locally, remotely, or both (see the [`hive agent add hive`](./command-reference.md#hive-agent-add-hive) section for more information).

## Machine Specification

* **16 CPUs, 32 GB RAM** (minimum **4 CPUs, 16 GB RAM**)
  * If deploying LiveData Migrator on a Hadoop cluster, the host machine should be an edge node that matches at least 75-80% of the NameNode host specification.
* **200 GB** (SSD-backed volumes) (minimum **100 GB**)
* **2 Gbps** minimum network. Your network bandwidth must be able to cope with transferring data and ongoing changes from your source storage.

## Production Use Configuration

We recommended you configure [Data Migration properties](./configuration-data-migrations) on your Hadoop Distributed File System to ensure smooth operation.

## Next Steps

Once you have all the prerequisites, set up your [network](./network.md) and then [download and install](./installation.md) LiveData Migrator.
