---
id: uninstall
title: Uninstall and upgrade LiveData Migrator
sidebar_label: Uninstalling and upgrading
---

We recommend that you upgrade LiveData Migrator regularly to the latest release so you can take advantage of new functionality and other improvements. To upgrade, uninstall your current version and then [install the new version](./installation.md).

The following steps explain how to uninstall LiveData Migrator its components.

:::important
Backup any configuration files that you wish to save (located in `/etc/wandisco`) before uninstalling LiveData Migrator.

If you are installing a newer release afterward, note the details of any current migrations that you want to start again once the new version is installed.
:::

## Stop all active migrations

Before uninstalling LiveDat Migrator, stop all active migrations of data and/or metadata.

* Stop migrations in the UI when [viewing the migration](./manage-migrations.md#manage-migrations-with-the-ui).

* If you prefer to stop data migrations in the CLI, run the [stop migration](./command-reference.md#migration-stop) command:

  ```text title="Example"
  migration stop --migration-id 4ffa620b6ebb0cd34f2c591220d93830f91ccc7e
  ```

* To stop metadata migrations, run the [stop metadata migration](./command-reference.md#hive-migration-stop---all) command:

  ```text title="Example"
  hive migration stop --names hive_migration1,hive_migration2
  ```

## Uninstall LiveData Migrator

1. Stop all LiveData Migrator services:

   ```text
   service livedata-ui stop && service hivemigrator stop && service livedata-migrator stop
   ```

1. Remove all LiveData Migrator components:

   ```text title="Red Hat/CentOS"
   yum remove -y hivemigrator.noarch livedata-migrator.noarch livedata-migrator-cli.noarch livedata-ui.noarch
   ```

   ```text title="Ubuntu"
   apt-get purge -y hivemigrator livedata-migrator livedata-migrator-cli livedata-ui
   ```

   ```text title="SUSE 12"
   zypper remove -y hivemigrator livedata-migrator livedata-ui && rpm -e livedata-migrator-cli
   ```

1. Delete all related directories:

   ```text
   rm -rf /etc/wandisco /opt/wandisco /var/log/wandisco /var/run/wandisco
   ```

## Next Steps

[Install the latest version](./installation.md) of LiveData Migrator.
