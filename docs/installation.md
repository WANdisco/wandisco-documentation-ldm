---
id: installation
title: Installation
sidebar_label: Installation
---

Ready to install? Check the prerequisites and then follow these steps to get up and running with LiveData Migrator.

If you're new to the concept of LiveData, or want to know what LiveData Migrator does, see the [introduction to LiveData Migrator](./about.md).

## Before you start

[Read the release notes](https://community.wandisco.com/s/article/WANdisco-LiveData-Migrator-Release-Notes-1-4-7) to get the latest information about the current version of LiveData Migrator.

### Prerequisites

* Linux host
  * See the release notes link in the [Before you start](#before-you-start) section for a list of supported operating systems.
* Java 1.8 64-bit.
* Network connectivity from your LiveData Migrator host to your target storage (for example: ADLS Gen2 endpoint or S3 bucket).
* Port 8081 accessible on your Linux host (to access the UI through a web browser).
* If migrating from HDFS:
  * Hadoop client libraries must be installed on the Linux host.
  * Ability to authenticate as the [HDFS superuser](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User) (for example: `hdfs`).
  * If Kerberos is enabled on your Hadoop cluster, a valid keytab containing a suitable principal for the HDFS superuser must be available on the Linux host.
* If migrating metadata to or from [Apache Hive](https://cwiki.apache.org/confluence/display/Hive/Home):
  * The Hive service must be present on the cluster.
  * SSH/CLI access to the cluster.
  * If Kerberos is enabled on your Hadoop cluster, a valid keytab containing a suitable principal for the Hive service user must be available. The host for the keytab will depend on whether you deploy locally, remotely, or both (see the [`hive agent add hive`](./command-reference.md#hive-agent-add-hive) section for more information).

### Machine specification

* **16 CPUs, 32 GB RAM** (minimum **4 CPUs, 16 GB RAM**)
  * If deploying LiveData Migrator on a Hadoop cluster, the host machine should be an edge node that matches at least 75-80% of the NameNode host specification.
* **200 GB** (SSD-backed volumes) (minimum **100 GB**)
* **2 Gbps** minimum network. Your network bandwidth must be able to cope with transferring data and ongoing changes from your source storage.

### License

The LiveData Migrator trial license is limited to 14 days operation and 5TB of data migration. This gives you full use of LiveData Migrator up to either of these limits. [Contact WANdisco to upgrade to a full license.](https://www.wandisco.com)

## Download and install LiveData Migrator

1. Download LiveData Migrator and upload to your chosen host. If you're migrating from HDFS, install LiveData Migrator on an edge node in the Hadoop cluster.

   <div class="download">
   <a href="https://www2.wandisco.com/ldm-trial">Download LiveData Migrator</a>
   </div>

1. Make the installation script executable and install as the root (or sudo) user. These commands assume that the installer is inside your working directory.

   ```text
   chmod +x livedata-migrator.sh && ./livedata-migrator.sh
   ```

   If you're migrating from HDFS, install LiveData Migrator on an edge node in the Hadoop cluster using the HDFS superuser.

   ```text title="Example for HDFS superuser"
   su - hdfs

   chmod +x livedata-migrator.sh && sudo ./livedata-migrator.sh
   ```

1. Check the service statuses with these commands:

   ```text
   service livedata-migrator status
   ```

   ```text
   service hivemigrator status
   ```

   ```text
   service livedata-ui status
   ```

## Using LiveData Migrator

Once you have LiveData Migrator running, you can use the [UI](./operation-ui.md), [CLI](./operation-cli.md), or [REST API](./api-reference.md) to start migrating data.
