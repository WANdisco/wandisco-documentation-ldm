---
id: configuration-hvm
title: Configuring the HiveMigrator service
sidebar_label: HiveMigrator
---

The HiveMigrator service is responsible for communication between agents and migration of metadata.

Find details here for configuring the HiveMigrator service.

## Basic authentication

Follow these steps to enable basic authentication for the HiveMigrator REST API:

1. Edit the `/etc/wandisco/hivemigrator/application.yaml` file to enable authentication:

   ```text title="Change the enabled parameter from false to true"
   micronaut:
   
     security:
       enabled: true
   ```

1. In the same file, add two new lines for the `username` and `password` key values.

   They need to be top level parameters (like `storagePath` and `liveDataMigratorPort`). The password value needs to be encrypted using a [bcrypt generator](https://www.browserling.com/tools/bcrypt).

   :::important bcrypt password must have a 2a hash prefix
   HiveMigrator only supports "2a" hash prefixes for encrypted passwords. Ensure to use a [bcrypt generator](https://www.browserling.com/tools/bcrypt) that provides a "2a" prefix at the beginning of the encrypted password.

   The bcrypt library will be updated in a future release.
   :::

   ```text title="Example"
   storagePath: /opt/wandisco/hivemigrator/hivemigrator.db
   liveDataMigratorPort: 18080

   username: "admin"
   password: "$2a$10$GAlPCvug.i9q4Y6CYalxP.nsAWlGKcfDf9IBsbyWWDfwsv14GRjnS"
   ```

1. [If basic authentication has been enabled on the LiveData Migrator REST API](./configuration-ldm.md#security), the password needs to be added to the `/etc/wandisco/hivemigrator/application.yaml` file.

   Add the `lm2Password` key as a top level parameter. The value for this needs to be provided in plain text.

   ```text title="Example"
   username: "admin"
   password: "$2a$10$GAlPCvug.i9q4Y6CYalxP.nsAWlGKcfDf9IBsbyWWDfwsv14GRjnS"

   lm2Password: "password"
   ```

1. Restart the HiveMigrator service to enable the new configuration:

   ```text
   service hivemigrator restart
   ```

   :::tip
   The username and password values can be changed without having to restart the HiveMigrator service. They will become active once you have saved the file.
   :::

### Connecting to HiveMigrator with basic authentication

When basic authentication is enabled, provide the username and password when prompted to connect to HiveMigrator through the CLI:

```text title="Example"
  connect hivemigrator localhost: trying to connect...
Username: admin
Password: ***********
Connected to hivemigrator v1.2.1-428 on http://localhost:6780.
```

The username and password will also be required when accessing the HiveMigrator REST API directly.

## Directory structure

The following directories are used for HiveMigrator:

| Location | Content |
|---|---|
| `/var/log/wandisco/hivemigrator` | Logs |
| `/etc/wandisco/hivemigrator` | Configuration files |
| `/opt/wandisco/hivemigrator` | Java archive files |
| `/var/run/hivemigrator` | Runtime files |

### Remote servers

The following directories are used for HiveMigrator remote servers (remote agents):

| Location | Content |
|---|---|
| `/var/log/wandisco/hivemigrator-remote-server` | Logs |
| `/etc/wandisco/hivemigrator-remote-server` | Configuration files |
| `/opt/wandisco/hivemigrator-remote-server` | Java archive files |
| `/var/run/hivemigrator-remote-server` | Runtime files |
