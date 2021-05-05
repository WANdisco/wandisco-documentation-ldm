---
id: configure-system-users
title: Configuring System Users
sidebar_label: System users
---

Adjust the system user or group for each LiveData Migrator service to suit your environment.

## Defaults

The default system users and groups for each service are as follows:

| Service | Default system user | Default system group |
|---|---|---|
|`livedata-migrator`|`hdfs`|`hdfs`|
|`livedata-ui`|`hdfs`|`hdfs`|
|`hivemigrator`|`hive`|`hadoop`|
|`hivemigrator-remote-server`|`hive`|`hadoop`|

## Running a service as a different user or group

Follow the steps depending on which service or services you want to change the user/group for.

### LiveData Migrator and LiveData UI

1. Adjust the system user or group in the service configuration. Choose one of options below depending on your operating system.

   1. **Linux distributions with systemd**  
      Create an override service file for the intended service:

      ```text title="livedata-migrator"
      systemctl edit livedata-migrator
      ```

      ```text title="livedata-ui"
      systemctl edit livedata-ui
      ```

      In the text editor that opens automatically, override the `User` and `Group` variables with your preferred user and group:

      ```text title="Example"
      [Service]
      User=<user>
      Group=<group>
      ```

   1. **Linux distributions without systemd**  
      Update the values for `USERNAME` and `GROUPNAME` in the configuration file for the intended service:

      ```text title="livedata-migrator"
      /etc/wandisco/livedata-migrator/vars.env
      ```

      ```text title="livedata-ui"
      /etc/wandisco/ui/vars.env
      ```

1. Change ownership of the related directories to the new system user/group:

   ```text title="livedata-migrator"
   chown -R <user>:<group> /opt/wandisco/livedata-migrator \
   chown -R <user>:<group> /etc/wandisco/livedata-migrator \
   chown -R <user>:<group> /var/log/wandisco/livedata-migrator \
   chown -R <user>:<group> /var/run/livedata-migrator
   ```

   ```text title="livedata-ui"
   chown -R <user>:<group> /opt/wandisco/ui \
   chown -R <user>:<group> /etc/wandisco/ui \
   chown -R <user>:<group> /var/log/wandisco/ui \
   chown -R <user>:<group> /var/run/livedata-ui
   ```

1. Once you've finished making changes, restart the corresponding service:

   1. **Linux distributions with systemd**  

      ```text title="livedata-migrator"
      systemctl restart livedata-migrator
      ```

      ```text title="livedata-ui"
      systemctl restart livedata-ui
      ```

   1. **Linux distributions without systemd**  

      ```text title="livedata-migrator"
      service livedata-migrator restart
      ```

      ```text title="livedata-ui"
      service livedata-ui restart
      ```

### HiveMigrator and HiveMigrator remote server

1. Update the values for `HIVE_MIGRATOR_SERVER_USER` and `HIVE_MIGRATOR_SERVER_GROUP` in the configuration file for the intended service:

   ```text title="hivemigrator"
   /etc/wandisco/hivemigrator/vars.sh
   ```

   ```text title="hivemigrator-remote-server"
   /etc/wandisco/hivemigrator-remote-server/vars.sh
   ```

1. Change ownership of the related directories to the new system user/group:

   ```text title="hivemigrator"
   chown -R <user>:<group> /opt/wandisco/hivemigrator \
   chown -R <user>:<group> /etc/wandisco/hivemigrator \
   chown -R <user>:<group> /var/log/wandisco/hivemigrator \
   chown -R <user>:<group> /var/run/hivemigrator
   ```

   ```text title="hivemigrator-remote-server"
   chown -R <user>:<group> /opt/wandisco/hivemigrator-remote-server \
   chown -R <user>:<group> /etc/wandisco/hivemigrator-remote-server \
   chown -R <user>:<group> /var/log/wandisco/hivemigrator-remote-server \
   chown -R <user>:<group> /var/run/livedata-hivemigrator-remote-server
   ```

1. Once you've finished making changes, restart the corresponding service:

   ```text title="hivemigrator"
   service hivemigrator restart
   ```

   ```text title="hivemigrator-remote-server"
   service hivemigrator-remote-server restart
   ```
