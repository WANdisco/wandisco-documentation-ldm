---
id: backup-and-restore
title: Backup and Restore
sidebar_label: Backup and Restore
---

:::note
Backup and Restore is currently available as a preview feature, and is subject to significant future changes. You must [enable this feature in the application properties file](./preview-features) to use it.

Backup and Restore can currently only be used via REST API requests. A later version of LiveData Migrator will allow you to use this function in the UI and CLI.
:::

LiveData Migrator allows you to save a backup of all of your configured migrations, exclusions and settings through the CLI. You may then restore this backup at any time to revert your LiveData Migrator instance to its prior state. This will not undo file transfers that have already been completed.

The backup will save:

* Path mappings
* Bandwidth Policy
* Exclusions
* Path mappings
* Source configuration
* All target filesystem configurations
* Migrations
* Secure keys for accessing filesystems\*

\* These are masked by default, unless the `mask=false` property is supplied in the backup request.

By default, created backups are stored in `/opt/wandisco/livedata-migrator/db/backup`.

## API Commands

The backup and restore feature makes use of a REST API to send backup and restore requests. You can send these requests via curl commands:

### Create a backup

Use the following command to write a backup to file on the machine the command is used on:


```text title="Save a masked backup"
curl -X POST http://myldmhost:18080/backups
```

```text title="Save an unmasked backup"
curl -X POST http://myldmhost:18080/backups?mask=false
```

In the above example, `myldmhost` should be replaced with the IP address or domain name of the server hosting LiveData Migrator.

The `mask` parameter, which is `true` by default, means secure keys - such as those used to access filesystems - will be masked for security purposes. This means they will have to be resupplied with the correct values after recovery. If the `mask=false` parameter is supplied, the backup will store these properties as plain text. It will therefore not be necessary to resupply them.

Use the following command to write the backup to a specified file (in this case, `backup.json`):

```text title="Write the backup to a specific file"
curl -X POST http://myldmhost:18080/backups?mask=false > backup.json
```

### Restore from backup

:::warning
Before restoring LiveData Migrator from a backup, you should delete the `default-db` file to ensure there are no setting conflicts. By default, the folder is in the directory `/opt/wandisco/livedata-migrator/db/default-db`.

The restoration process will still reinstate your previously backed up settings, meaning you will not lose them.
:::

To restore LiveData Migrator to a state previously stored as a backup, use the following curl command:

```text title="Restore from backup"
curl -X POST -H "Content-Type: application/json" -d @backup.json http://myldmhost:18080/backups/restore --verbose
```
