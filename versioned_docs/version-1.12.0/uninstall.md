---
id: uninstall
title: Uninstall and upgrade LiveData Migrator
sidebar_label: Uninstalling and upgrading
---

We recommend that you regularly upgrade LiveData Migrator so you can take advantage of new functionality and other improvements. To upgrade, uninstall your current version and then [install the new version](./installation.md).

The following steps explain how to uninstall LiveData Migrator and its components.

:::important
Backup any configuration files that you wish to save (located in `/etc/wandisco`) before uninstalling LiveData Migrator.

If you are installing a newer release afterward, note the details of any current migrations that you want to start again once the new version is installed.
:::

## Stop all active migrations

Before uninstalling LiveData Migrator, stop all active migrations of data and/or metadata.

* Stop migrations in the UI when [viewing the migration](./manage-migrations.md#manage-migrations-with-the-ui).

* If you prefer to stop data migrations in the CLI, run the [stop migration](./command-reference.md#migration-stop) command:

  ```text title="Example"
  migration stop --migration-id <migration-id>
  ```

* To stop metadata migrations, run the [stop metadata migration](./command-reference.md#hive-migration-stop-all) command:

  ```text title="Example"
  hive migration stop all
  ```

## Uninstall any remote agents

If you have deployed any remote agents (for target metastore connections), log in to the hosts for the remote agents and uninstall them using the following commands:

1. Stop the service:

   ```text
   service hivemigrator-remote-server stop
   ```

1. Remove the remote server package:

   ```text title="Red Hat/CentOS"
   yum remove -y hivemigrator-remote-server.noarch
   ```

   ```text title="Ubuntu"
   apt-get purge -y hivemigrator-remote-server
   ```

   ```text title="SUSE 12"
   zypper remove -y hivemigrator-remote-server
   ```

1. Delete all related directories:

   ```text
   rm -rf /etc/wandisco/hivemigrator-remote-server /var/run/hivemigrator-remote-server
   ```

## Uninstall LiveData Migrator

1. Stop all LiveData Migrator services:

   ```text
   service livedata-ui stop && service hivemigrator stop && service livedata-migrator stop
   ```

1. Remove all LiveData Migrator components:

   ```text title="Red Hat/CentOS"
   yum remove -y hivemigrator.noarch hivemigrator-azure-hdi.noarch livedata-migrator.noarch livedata-migrator-cli.noarch livedata-ui.noarch
   ```

   ```text title="Ubuntu"
   apt-get purge -y hivemigrator hivemigrator-azure-hdi livedata-migrator livedata-migrator-cli livedata-ui
   ```

   ```text title="SUSE 12"
   zypper remove -y hivemigrator hivemigrator-azure-hdi livedata-migrator livedata-ui && rpm -e livedata-migrator-cli
   ```

1. Delete all related directories:

   ```text
   rm -rf /etc/wandisco/ui /etc/wandisco/hivemigrator /var/run/hivemigrator /var/run/livedata-migrator /var/run/livedata-ui
   ```

## Next Steps

[Install the latest version](./installation.md) of LiveData Migrator.
