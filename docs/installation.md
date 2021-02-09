---
id: installation
title: Install LiveData Migrator
sidebar_label: Install LiveData Migrator
---

Ready to install? Check the [prerequisites](./prereqs.md) and then follow these steps to get up and running with LiveData Migrator. The latest version of LiveData Migrator includes a preview of functionality that you can use to migrate metadata.

:::note
Do you have an older version already installed? If so, perform the steps in the [Uninstall a previous release](./uninstall.md) page first.
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

### Default system user

The default system user assigned to the livedata-migrator and livedata-ui services is 'hdfs', whereas the default system user for hivemigrator is 'hive'. To run these services as a different user, update the `USERNAME` and `GROUPNAME` environment variables stored in `/etc/wandisco/livedata-migrator/vars.env`, `/etc/wandisco/ui/vars.env` or `/etc/wandisco/hivemigrator/vars.env` respectively.

If you're running a `systemd`-based operating system, create an override service file. To do so, run one of the following commands depending on which service you want to update:

| Component | Command |
| -------- | -------- |
| LiveData Migrator | `systemctl edit livedata-migrator` |
| LiveData UI | `systemctl edit livedata-ui` |
| Hive Migrator | `systemctl edit hivemigrator` |

In the text editor that opens automatically, override the `User` and `Group` variables with your preferred user:

```text="Example"
[Service]
User=myuser
Group=myuser
```

Once you've finished making changes, save the file and restart the corresponding process.
:::

## Next Steps

Once you have LiveData Migrator running, you're ready to [get started](./get-started.md).
