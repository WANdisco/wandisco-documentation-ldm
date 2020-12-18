---
id: installation
title: Install LiveData Migrator
sidebar_label: Install LiveData Migrator
---

Ready to install? Check the [prerequisites](./prereqs.md) and then follow these steps to get up and running with LiveData Migrator. The latest version of LiveData Migrator includes a preview of functionality that you can use to migrate metadata.

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

## Next Steps

Once you have LiveData Migrator running, you can use the [UI](./operation-ui.md) or [CLI](./operation-cli.md) to start migrating data.
