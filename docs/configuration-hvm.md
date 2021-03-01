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

1. In the `/etc/wandisco/hivemigrator/application.yaml` file, add two new lines for the `username` and `password` key values.

   They need to be top level parameters (like `storagePath` and `liveDataMigratorPort`). The password value needs to be encrypted using a [bcrypt generator](https://bcrypt-generator.com/).

   ```text title="Example"
   storagePath: /opt/wandisco/hivemigrator/hivemigrator.db
   liveDataMigratorPort: 18080

   username: "admin"
   password: "$2y$12$yOcvS7C0DHFRi4eeUuFh4u5hMUuSwfEHYt1JyOsfLgV7sjghw5zGm"
   ```

1. [If basic authentication has been enabled on the LiveData Migrator REST API](./configuration-ldm.md#security), the password needs to be added to the `/etc/wandisco/hivemigrator/application.yaml` file.

   Add the `lm2Password` key as a top level parameter. The value for this needs to be provided in plain text.

   ```text title="Example"
   username: "admin"
   password: "$2y$12$yOcvS7C0DHFRi4eeUuFh4u5hMUuSwfEHYt1JyOsfLgV7sjghw5zGm"

   lm2Password: "password"
   ```

1. Restart the HiveMigrator service to enable the new configuration:

   ```text
   service hivemigrator restart
   ```

   :::info
   Enabling or disabling basic authentication of the HiveMigrator REST API will always require a restart of HiveMigrator service.

   However, the username and password values can be changed without having to restart the service to make them active.
   :::
