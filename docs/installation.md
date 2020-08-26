---
id: installation
title: Installation
sidebar_label: Installation
---

This guide teaches you how to obtain and install LiveData Migrator.

If you are new to the concepts of LiveData Migrator and what it does, we recommend you read through the [About](./about.md) section before learning how to install and use the product.

## Prerequisites

:::info
The pre-requisites for running LiveData Migrator are simple, but differ based on your source environment. For production use, please ensure that all prerequisites are satisfied before operating LiveData Migrator.
:::

* Linux host running either Red Hat, CentOS, Debian or Ubuntu.
  * Java 1.8 64-bit.
  * Network connectivity from your LiveData Migrator host to your target storage (for example: ADLS Gen2 endpoint or S3 bucket).
  * Port 8081 accessible on your Linux host (to access the UI through a web browser).
  * If migrating from HDFS:
    * Hadoop client libraries must be installed on the Linux host.
    * Ability to authenticate as the [HDFS superuser](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User) (for example: `hdfs`).
    * If Kerberos is enabled on your Hadoop cluster, a valid keytab containing a suitable principal for the HDFS superuser must be available on the Linux host.

### Recommendations

* Minimum host specification = **4 CPUs, 16 GB RAM**
  * Recommended = **16 CPUs, 32 GB RAM**
* Minimum available storage = **100 GB**
  * Recommended = **200 GB** (SSD-backed volumes)
* Minimum network throughput = **2 Gbps**
  * Your network bandwidth will need to sufficiently accommodate the transfer of existing data and ongoing changes from your source storage.
* If migrating from HDFS, we recommend the LiveData Migrator is installed on an edge node in the Hadoop cluster.

## Download LiveData Migrator

Download LiveData Migrator using the WANdisco Customer Portal. You will need to upload your license key to access the customer download page.

<div class="download">
<a href="https://customer.wandisco.com">Download LiveData Migrator</a>
</div>

There are two installers available for LiveData Migrator:

* **RPM package**
  * Install LiveData Migrator as a system service for RHEL/CentOS-based Linux environments.
* **DEB package**
  * Install LiveData Migrator as a system service for Debian-based Linux environments.

## Install LiveData Migrator

Installing LiveData Migrator as a system service allows you to maintain long-lived migrations, have a common configuration that survives service restarts, and retain logging information in a central directory.

:::note
Without a WANdisco-provided license file, LiveData Migrator will stop running after 10 minutes. You have full access to all functionality during that time, but operation will cease immediately after that time period has expired.

[Contact WANdisco](https://www.wandisco.com) for a license that will meet your migration needs.
:::

1. Download `one-ui_lm_rpm_installer.sh` or `one-ui_lm_deb_installer.sh` depending on your Linux distribution and upload to your LiveData Migrator host.

1. Make the script executable and install as the root (or sudo) user:

   _Red Hat_  
   `chmod +x one-ui_lm_rpm_installer.sh`  
   `./one-ui_lm_rpm_installer.sh`  

   _Debian_  
   `chmod +x one-ui_lm_deb_installer.sh`  
   `./one-ui_lm_deb_installer.sh`  

   The above commands assume that the installer is inside your working directory.

1. You have two options for running LiveData Migrator.

   1. [Configure the LiveData Migrator system service](#configure-the-livedata-migrator-system-service).
   1. [Run LiveData Migrator using the jar file (CLI access only)](./operation-cli.md#using-the-livedata-migrator-jar-optional).

## Configure the LiveData Migrator system service

### Kerberos authentication

If Kerberos is enabled in your environment, edit the Kerberos security properties in the `/etc/wandisco/livedata-migrator/application.properties` file.

Refer to the [Kerberos Integration](./configuration.md#kerberos-integration) section for details about the required properties.

Restart the LiveData Migrator service to make any configuration changes live:

`service livedata-migrator restart`

## Using LiveData Migrator

Once you have LiveData Migrator running, you can configure, manage and monitor resources that control how your migration takes place.

Use the LiveData Migrator service with the UI, CLI, or REST API. Choose your preferred interface below to get started:

* [UI](./operation-ui.md)
* [CLI](./operation-cli.md)
* [REST API](./api-reference.md)

## Reference

### Directory structure

When LiveData Migrator is installed as a [system service](#option-2-system-service), the following directories are used:

| Location | Content |
|---|---|
| `/var/log/wandisco/livedata-migrator` | Logs |
| `/etc/wandisco/livedata-migrator` | Configuration files |
| `/opt/wandisco/livedata-migrator` | Java archive files |
| `/opt/wandisco/livedata-migrator/db` | LiveData Migrator runtime state |

### System service commands

#### LiveData Migrator

The LiveData Migrator service script can be used to control operation of the service at any time:

`service livedata-migrator start|stop|force-reload|restart|status`

## UI

The UI service script can be used to control operation of the service at any time:

`service one-ui-server start|stop|force-reload|restart|status`
