---
id: preview-features
title: Enable Preview Features
sidebar_label: Enable Preview Features
---

Preview features are LiveData Migrator features that are still under development and are subject to improvement. These are disabled by default, and must be enabled in the properties file:

`/etc/wandisco/livedata-migrator/application.properties`

Preview features must be enabled by finding the corresponding property with the prefix `preview.feature.` and changing the `OFF` value to `ON`. For example:

```text title="Example for enabling Backup & Restore"
preview.feature.backup-restore=ON
```

LiveData Migrator must then be restarted for the changes to take effect:

`service livedata-migrator restart`

## Current Preview Features

The following preview features are currently available in LiveData Migrator.

### [Backup and Restore](./backup-and-restore.md)

This feature allows the user to save LiveData Migrator's current state - including migrations, filesystems, path mappings and configuration - and restore it later. [View the full list of properties this feature backs up and restores here](./backup-and-restore).

Enable this feature with the following property:

`preview.feature.backup-restore=ON`

### Migration Verifications

<!--Documentation pending-->

Enable this feature with the following property:

```text
preview.feature.verifications=ON
```
