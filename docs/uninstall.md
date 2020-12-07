---
id: uninstall
title: Uninstall a previous release
sidebar_label: Uninstall a previous release
---

Follow these steps to uninstall LiveData Migrator and all of its components.

:::important
Make a note of your current migrations and backup any configuration files (located in `/etc/wandisco`) before uninstalling LiveData Migrator.
:::

## Stop all active migrations

Stop all active migrations of data and/or metadata:

* [UI](./operation-ui.md#manage-migrations)
* [CLI: Data](./command-reference.md#migration-stop) / [CLI: Metadata](./command-reference.md#hive-migration-stop---all)

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
