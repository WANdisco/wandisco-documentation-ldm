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

* Linux host running either Red Hat, CentOS, Debian or Ubuntu.
* Java 1.8 64-bit.
* Network connectivity from your LiveData Migrator host to your target storage (for example: ADLS Gen2 endpoint or S3 bucket).
* Port 8081 accessible on your Linux host (to access the UI through a web browser).
* If migrating from HDFS:
  * Hadoop client libraries must be installed on the Linux host.
  * Ability to authenticate as the [HDFS superuser](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User) (for example: `hdfs`).
  * If Kerberos is enabled on your Hadoop cluster, a valid keytab containing a suitable principal for the HDFS superuser must be available on the Linux host.

### Machine specification

* **16 CPUs, 32 GB RAM** (minimum **4 CPUs, 16 GB RAM**)
* **200 GB** (SSD-backed volumes) (minimum **100 GB**)
* **2 Gbps** minimum network. Your network bandwidth must be able to cope with transferring data and ongoing changes from your source storage.

### License

The LiveData Migrator preview license is limited to 14 days operation and 5TB of data migration. This gives you full use of LiveData Migrator up to either of these limits. [Contact WANdisco to upgrade to a full license.](https://www.wandisco.com)

## Install LiveData Migrator

1. Make the script executable and install as the root (or sudo) user. If you're migrating from HDFS, install LiveData Migrator on an edge node in the Hadoop      cluster.

1. Install LiveData Migrator with one of the following commands. These commands assume that the installer is inside your working directory.

   ```bash title="Red Hat/CentOS"
   chmod +x one-ui_lm_rpm_installer.sh && ./one-ui_lm_rpm_installer.sh
   ```

   ```bash title="Debian"
   chmod +x one-ui_lm_deb_installer.sh && ./one-ui_lm_deb_installer.sh
   ```

1. Check the service statuses with these commands:

   ```bash
   service livedata-migrator status
   ```

   ```bash
   service one-ui-server status
   ```

1. If Kerberos is enabled in your environment:

   1. Edit the Kerberos security properties in the `/etc/wandisco/livedata-migrator/application.properties` file.  
      Refer to the [Kerberos Integration](./configuration.md#kerberos-integration) section for details about the required properties.

   1. Restart the LiveData Migrator service to make any configuration changes live:  
      `service livedata-migrator restart`

## Using LiveData Migrator

Once you have LiveData Migrator running, you can use the [UI](./operation-ui.md), [CLI](./operation-cli.md), or [REST API](./api-reference.md) to start migrating data.
