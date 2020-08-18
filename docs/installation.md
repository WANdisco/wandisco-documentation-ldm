---
id: installation
title: Installation
sidebar_label: Installation
---

This guide teaches you how to obtain and install LiveData Migrator.

If you are new to the concepts of LiveData Migrator and what it does, we recommend you read through the [About](./about.md) section before learning how to install and use the product.

# Prerequisites

:::info
The pre-requisites for running LiveData Migrator are simple, but differ based on your source environment. For production use, please ensure that all prerequisites are satisfied before operating LiveData Migrator.
:::

* Linux host running either Red Hat, CentOS, Debian or Ubuntu.
  * Network connectivity from your LiveData Migrator host to your target storage (for example: ADLS Gen2 endpoint or S3 bucket).
  * Sufficient network bandwidth to accommodate the transfer of existing data and ongoing changes from your source storage.
  * If migrating from HDFS:
    * Hadoop client libraries must be installed on the Linux host.
    * You will need to be able to authenticate as the [HDFS superuser](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User) (for example: `hdfs`).
    * If Kerberos is enabled on your Hadoop cluster, a valid keytab containing a suitable principal for the HDFS superuser must be available on the Linux host.

## Recommendations

* Minimum size recommendation = **4 CPUs, 16 GB RAM**
* Minimum available storage = **100 GB**
* If migrating from HDFS, we recommend the LiveData Migrator is installed on an edge node in the Hadoop cluster.

# Download LiveData Migrator

Download LiveData Migrator using the WANdisco Customer Portal. You will need to upload your license key to access the customer download page.

<div class="download">
<a href="https://customer.wandisco.com">Download LiveData Migrator</a>
</div>

There are three files available, any one of which can be used to run LiveData Migrator:

* **LiveData Migrator standalone Java archive** (jar)
  * No installation process and is the fastest option to begin migration from the command line.
* **RPM package**
  * Install LiveData Migrator as a system service for RHEL/CentOS-based Linux environments.
* **DEB package**
  * Install LiveData Migrator as a system service for Debian-based Linux environments.

Both of the Linux packages also contain the same Java archive that can also be used to run LiveData Migrator from the command line.

# Install LiveData Migrator

There are two methods for installing LiveData Migrator:

1. [Command line operation](#option-1-command-line-operation)
   * Running LiveData Migrator from the command line does not need any special local system privileges to operate.
1. [System service](#option-2-system-service)
   * Installing LiveData Migrator as a system service allows you to maintain long-lived migrations, have a common configuration that survives service restarts, and retain logging information in a central directory.

:::note
Without a WANdisco-provided license file, LiveData Migrator will stop running after 10 minutes. You have full access to all functionality during that time, but operation will cease immediately after that time period has expired.

[Contact WANdisco](https://www.wandisco.com) for a license that will meet your migration needs.
:::

## Option 1: Command line operation

Download the `livedata-migrator.jar` file and upload to your LiveData Migrator host.

On your LiveData Migrator host, switch to the HDFS superuser and execute the jar file:

`$ hadoop jar livedata-migrator.jar`

This will start LiveData Migrator and the action prompt will appear.

### Kerberos authentication for CLI

If Kerberos is enabled in your environment, then prior to running the `livedata-migrator.jar`, you must obtain a Kerberos ticket for the HDFS superuser principal.

This must be performed by the user that will run LiveData Migrator.

_Example_  
`kinit -kt /etc/security/keytabs/hdfs.keytab hdfs@REALM.COM`

## Option 2: System service

Download `live-migrator-<ldm-version>.rpm` or `live-migrator-<ldm-version>.deb` depending on your Linux distribution and upload to your LiveData Migrator host.

Install the package as the root (or sudo) user:

_Red Hat_  
`# yum install -y livedata-migrator-<ldm-version>.rpm`

_Debian_  
`# apt install -y ./livedata-migrator-<ldm-version>.deb`

The above commands assume that the package is inside your working directory.

:::note
Before starting the service, ensure that you have met any additional requirements listed in the [Kerberos authentication for system service](#kerberos-authentication-for-system-service) and 
:::

### Kerberos authentication for system service

If Kerberos is enabled in your environment, edit the Kerberos security properties in the `/etc/wandisco/live-migrator/application.properties` file.

The required properties are detailed in the [Kerberos Integration](./configuration.md#kerberos-integration) section.

### Start LiveData Migrator

Once installed and configured, you can start the LiveData Migrator service using the init script:

`# service live-migrator start`

You can stop the service at any time using:

`# service live-migrator stop`

### Defining a source

Define an HDFS file system resource using the `--source` parameter with the [`filesystem add hdfs`](./command-reference.md#filesystem-add-hdfs) command.

This is required to create a suitable HDFS source file system when running as a system service.

### Management Access

LiveData Migrator offers a REST API and command line interface. Once started, you can access the action prompt for LiveData Migrator as any system user using SSH.

By default, SSH access is insecure, with username `user`, and password `password` on port 2222. Edit the SSH access properties in the `/etc/wandisco/live-migrator/application.properties` file to adjust to your requirements.

The configuration properties for SSH are listed in the [SSH access](./configuration.md#ssh-access) section.

#### Default access

Without any change to configuration, you can login as the `user` user with the password `password` on port `2222`.

_Example_
```
$ ssh user@localhost -p 2222
Password authentication
Password: password
```

This will start LiveData Migrator and the action prompt will appear.

#### Use authorized SSH keys

Configure the LiveData Migrator service to use authorized SSH keys instead of a password by following these steps:

1. Comment out the `ssh.shell.password` configuration property so that password access is disabled.
1. Specify an authorized keys file with `ssh.shell.authorized-public-keys-file` to allow access from authorized clients that hold a matching private key.

# Using LiveData Migrator

Once you have LiveData Migrator running, you can configure, manage and monitor resources that control how your migration takes place.

Choose your preferred interface below to get started:

* [UI](./operation-ui.md)
* [CLI](./operation-cli.md)

# Reference

## Directory structure

When LiveData Migrator is installed as a [system service](#option-2-system-service), the following directories are used:

| Location | Content |
|---|---|
| `/var/log/wandisco/livedata-migrator` | Logs |
| `/etc/wandisco/livedata-migrator` | Configuration files |
| `/opt/wandisco/livedata-migrator` | Java archive files |
| `/opt/wandisco/livedata-migrator/db` | LiveData Migrator runtime state |