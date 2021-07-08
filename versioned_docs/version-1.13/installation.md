---
id: installation
title: Install LiveData Migrator
sidebar_label: Install LiveData Migrator
---

Ready to install? Check the [prerequisites](./prereqs.md) and then follow these steps to get up and running with LiveData Migrator. The latest version of LiveData Migrator includes functionality that you can use to migrate metadata.

:::note
Do you have an older version already installed? If so, perform the steps in the [Uninstall a previous release](./uninstall.md) page first.

Check the component versions of your current installation by running `livedata-migrator --version` on your LiveData Migrator host machine.
:::

## Download and install LiveData Migrator

1. Download LiveData Migrator and upload to your chosen host. If you're migrating from HDFS, install LiveData Migrator on an edge node in the Hadoop cluster.

   <div class="download">
   <a href="https://www2.wandisco.com/ldm-trial">Download LiveData Migrator</a>
   </div>

1. Make the installation script executable and install as the root (or sudo) user. These commands assume that the installer is inside your working directory.

   ```text
   chmod +x livedata-migrator.sh && ./livedata-migrator.sh
   ```

   :::important Known Issue
   On CentOS 6, start the `livedata-migrator` and `livedata-ui` services manually using the following commands:

   ```text
   initctl start livedata-migrator
   ```

   ```text
   initctl start livedata-ui
   ```

   :::

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

## Default system users

The default system user for the LiveData Migrator and LiveData UI services is `hdfs`, and the default system user for the HiveMigrator service is `hive`.

[Configure system users](./configure-system-users.md) if you want to change these defaults.

## Next Steps

Once you have LiveData Migrator running, you're ready to [get started](./get-started.md).
