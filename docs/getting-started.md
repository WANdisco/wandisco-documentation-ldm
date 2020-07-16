---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

:::note Public Preview
LiveData Migrator is in public preview. This gives you access to all product functionality for review, but limits operation time to 10 minutes during the preview period.
:::

Here, you'll find complete information about how to obtain and run LiveData Migrator.

If you're new to the concept of LiveData, or want to know what LiveData Migrator does, please read the [introduction to LiveData Migrator](./about.md) before learning how to install and use the product.

## Prerequisites

:::info
The pre-requisites for running LiveData Migrator are simple, but differ based on your source environment. For production use, please ensure that all pre-requsities are satisfied before operating LiveData Migrator.
:::

1. A **Linux host** running either Red Hat, Centos, Debian or Ubuntu, with a version that matches the requirements of your Hadoop cluster,
1. If migrating from an HDFS source, your Linux host will need to be configured as an **edge node** of the Hadoop cluster, giving it access to necessary Hadoop client libraries and configuration,
1. When migrating from HDFS, you will need to be able to **authenticate** as the `hdfs` user if running from the command line,
1. **Network connectivity** from that host to your target storage endpoint if migrating to ADLS Gen 2, S3 or another Hadoop-compatible file system,
1. Sufficient **network bandwidth** to accommodate the transfer of existing data and ongoing changes, and
1. If your HDFS source is in a secure (Kerberos-enabled) Hadoop cluster, you will need a **valid keytab file** for the `hdfs` user available on the Linux host.

### Recommendations

1. We recommend a minimum of 100GB of **free disk space**, more if you are expecting to migrate large files to cloud storage services because a temporary disk buffer will be used during migration,
1. We also recommend **CPU and memory capacity** on the host to support the processing needed for operation, which will be dominated by TLS encoding when transferring content to a remote target file system. Consider a modern 4-core VM instance type or physical machine, with 16GB of RAM or more as a base.

## Get LiveData Migrator

You can get LiveData Migrator during public preview using the WANdisco Customer Product Download portal. The current version is LiveData Migrator 1.1.1. WANdisco will update versions as the preview period continues.

There are three files available, any one of which can be used to run LiveData Migrator:

* The **LiveData Migrator standalone Java archive** (jar), which requires no installation process and is the fastest option to begin migration from the command line,
* The **RPM package** that offers a system service for RPM-based Linux environments, and
* The **DEB package** that offers the same system service for DEB-based Linux environments.

Both of the Linux packages also contain the same Java archive that can also be used to run LiveData Migrator from the command line.

<div class="download">
<a href="https://customer.wandisco.com">Download LiveData Migrator</a>
</div>

### Installation Files

When LiveData Migrator is installed as a system service, the following directory locations are used:

| Location | Content |
|---|---|
| `/var/log/wandisco/live-migrator` | Log files created by LiveData Migrator during operation |
| `/etc/wandisco/live-migrator` | Configuration files used by LiveData Migrator |
| `/opt/wandisco/live-migrator` | Java archive files for LiveData Migrator |
| `/opt/wandisco/live-migrator/db` | LiveData Migrator runtime state |

## Get LiveData Migrator with a user interface (UI)

If you want to try out LiveData Migrator during public preview, you can download and install LiveData Migrator with a UI. This is a quick way of installing both LiveData Migrator and the UI from the command line.

You'll need a Red Hat or Debian operating system, a Java version of at least 1.8.0, and the following machine specifications:
* 4 CPU Cores / 16 GB Memory / 32 GB Temp Disk / 16GB Cache / 2GB Throughput (minimum)
* 16 CPU Cores / 32 GB Memory / 64 GB Temp disk (SSD) / 192 GB (Premium cache storage) / very high network throughput (recommended)

### Download the LiveData Migrator and UI installation files
Depending on your Linux distribution, copy `wget https://fusion-jenkins.wandisco.com/job/oneui-lm2-installer/job/DAP-615/2/`
or
`wget https://fusion-jenkins.wandisco.com/view/ONEUI/job/oneui/job/master/lastSuccessfulBuild/artifact/installer/one-ui_lm_deb_installer.sh`

### Install the files
1. Run the following commands:
```
chmod +x one-ui_lm_*_installer.sh
```
```
./one-ui_lm_<package-type>_installer.sh (or _deb_)
```

2. Check the service statuses:
```
/etc/init.d/live-migrator status
```
```
/etc/init.d/one-ui-server status
```
:::note
The UI is referred to as OneUI in terminal messaging.

### Create a LiveData Migrator administrator account
1. Navigate to http://<your.livedatamigrator.server>:8081
2. Complete the registration form and click **CREATE ACCOUNT**.
3. Add storages by clicking the pulsing + button. You need at least one source and one target.

### Troubleshooting
**How do I check the logs?**  
In your terminal, run the following commands:

`less /var/log/fusion/one-ui-server/oneui.<YYYY-MM-DD>.log`

`less /var/log/wandisco/live-migrator/live-migrator.log`

## Running LiveData Migrator

You can run LiveData Migrator:
* from the _command line_
* as a _system service_
* with the UI (if installed)

You only need to install the product if you want to run it as a system service, which allows you to maintain long-lived migrations, have a common configuration that survives service restarts, and to retain logging information in a central directory. Running LiveData Migrator from the command line allows you to get started with migration in just a few seconds, and does not need any special local system privileges to operate.

:::note
Without a WANdisco-provided license file, LiveData Migrator will stop running after 10 minutes. You have full access to all functionality during that time, but operation will cease immediately after that time period has expired.

[Contact WANdisco](https://www.wandisco.com) for a license that will meet your migration needs.
:::

### Command line operation

Download the `live-migrator.jar` file, then as the `hdfs` user on a cluster edge node, execute

```
$ hadoop jar live-migrator.jar
```

to start LiveData Migrator and view the action prompt:

```

      #     #     #     &&           &&   &&&&& && && && &    &&&&&&,    &   &&&&&    &&&&&   ,&&&&&,
    ##### #####  ###     &&   &&&   &&  &&      && &&&    &&  &      &   &  &        &       &       &
  ############### ###     && && && &&   &       && &&     &&  &       &  &   &&&&&  &        &       &
   ###### ###### ###      &&&    &&&    &&      && &&     &&  &      &   &        &  &       &       &
     ##     ##   ##        &&    &&      &&&&&& && &&     &&  &&&&&&`    &  &&&&&&    &&&&&   `&&&&&`

 WANdisco LiveMigrator  (v1.1.1)

  Welcome to WANdisco LiveMigrator
  - Type "help" for assistance, <TAB> for completion.
  - REST API documentation available at http://localhost:18080/lm2-api.html

  Successfully registered source file system: fsId=auto-discovered-source-hdfs, fsType=hdfs, isSource=true, eventsPosition=0, properties={fs.defaultFS=hdfs://myhost.localdomain:8020}

WANdisco LiveMigrator >>
```

### System service installation

Download and install LiveData Migrator to begin migrating your Hadoop data to other environments. Download `live-migrator-x.x.x.rpm` or `live-migrator-x.x.x.deb` depending on your Linux distribution, then Installation on RPM-based Linux distributions such as CentOS or Red Hat uses `rpm` or `yum` as the root user:

```
# rpm -i live-migrator-1.0.0.rpm
```

while installation on DEB-based distributions such as Debian or Ubuntu uses `dpkg` or `apt` as the root user:

```
# dpkg -i live-migrator-1.0.0.deb
```

Once installed, you can start the LiveData Migrator service using the init script:

```
# service live-migrator start
```

and stop the LiveData migrator service in a similar manner:

```
# service live-migrator stop
```

#### Management Access

LiveData Migrator offers a REST API and command line interface. Once started, you can access the action prompt for LiveData Migrator as any system user using SSH.

:::caution
By default, SSH access is insecure, with username `user`, and password `password` on port 2222. Change this using the [configuration properties](./configuration.md#ssh-access) for SSH access to:
1. **Comment out the SSH password configuration property** `ssh.shell.password` so that password access is disabled, and
2. **Specify an authorized keys file** with `ssh.shell.authorized-public-keys-file` to allow access only from authorized clients that hold a matching private key.
:::

Without any change to configuration, you can login as the `user` user with the password `password` on port `2222`, e.g.

```text
$ ssh user@localhost -p 2222
Password authentication
Password: <type "password" here>


      #     #     #     &&           &&   &&&&& && && && &    &&&&&&,    &   &&&&&    &&&&&   ,&&&&&,
    ##### #####  ###     &&   &&&   &&  &&      && &&&    &&  &      &   &  &        &       &       &
  ############### ###     && && && &&   &       && &&     &&  &       &  &   &&&&&  &        &       &
   ###### ###### ###      &&&    &&&    &&      && &&     &&  &      &   &        &  &       &       &
     ##     ##   ##        &&    &&      &&&&&& && &&     &&  &&&&&&`    &  &&&&&&    &&&&&   `&&&&&`


 WANdisco LiveMigrator


  Welcome to WANdisco LiveMigrator
  - Type "help" for assistance, <TAB> for completion.

Please type `help` to see available commands
WANdisco LiveData Migrator >>
```

#### Defining a source

:::note
You will need to define an HDFS file system resource using the `--source` parameter on the [`filesystem add hdfs`](./command-reference.md#filesystem-add-hdfs) command to create a suitable HDFS source file system when running as a system service.
:::

## Running in Secure Environments

Hadoop can run in a secure mode that uses Kerberos to authenticate users and applications. LiveData Migrator can be configured easily to operate with Kerberos security.

When run from the command line, LiveData Migrator will use the initial ticket-granting ticket for a principal obtained by previous execution of `kinit`:
1. Login to a system shell as the user that will run LiveData Migrator,
1. Execute the `kinit` command to obtain a Kerberos ticket-granting ticket, then
1. [Run LiveData Migrator from the command-line](#option-1-command-line-operation).

When run as a system service, LiveData Migrator will honor the [configuration for Kerberos security](./configuration.md#kerberos-integration) in `application.properties`.
1. Configure your Kerberos security to accept credentials in a keytab file available to the user identity that will be used to run LiveData Migrator (typically the `hdfs` user)
1. Configure LiveData migrator properties for Kerberos integration, then
1. [Run LiveData Migrator as a system service](#option-2-system-service-installation).

# LiveData Migrator Operation

Once you have LiveData Migrator running, you will [interact with the action prompt](./operation.md) to configure, manage and monitor resources that control how your migration takes place.
