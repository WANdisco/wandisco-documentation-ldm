---
id: configuration-ui
title: Configuring the LiveData UI
sidebar_label: LiveData UI
---

Find details here for the configuration properties of LiveData Migrator UI. Properties are defined in the following file:

`/etc/wandisco/ui/application-prod.properties`

Restart the LiveData UI service when adding new properties or changing existing values:

```text
service livedata-ui restart
```

## General configuration

Configure how the UI is run overall.

| Name | Details |
| --- | --- |
| `server.port` | Set the port on which the UI will be available. This is overridden by the `server.ssl.port` when SSL is enabled.<br/><br/>**Default value**: `8081`<br/>**Allowed values**: An integer value between `1024` and `65535` |

## Logging

Configure how the UI logs information about its state or user interactions.

| Name | Details |
| --- | --- |
| `logging.output.path` | The output path for all logging.<br/><br/>**Default value**: `/var/log/wandisco/ui`<br/>**Allowed values**: The full path to a valid directory that is writable by the user running the UI (typically `hdfs`.)  |

## Security

### Basic authentication

If basic authentication is enabled on [LiveData Migrator](./configuration-ldm.md#basic-authentication) or [HiveMigrator](./configuration-hvm.md#basic-authentication) (or both), additional steps are required to maintain LiveData UI functionality.

#### LiveData Migrator

Follow the steps below to configure the LiveData UI to work with LiveData Migrator basic authentication:

1. On the LiveData UI host, run the following command:

   ```text
   livedata-ui encryptor
   ```

1. Select the `Setup LDM Basic Auth` option when the menu appears.

1. Enter the `username` and `password` values in plain text that were defined for the `security.basic.user` and `security.basic.password` properties in the `application.properties` file.

1. Select the `Exit` option once complete.

1. Restart the LiveData UI to make the changes active:

   ```text "Example"
   service livedata-ui restart
   ```

#### HiveMigrator

Follow the steps below to configure the LiveData UI to work with HiveMigrator basic authentication:

1. On the LiveData UI host, run the following command:

   ```text
   livedata-ui encryptor
   ```

1. Select the `Setup HVM Basic Auth` option when the menu appears.

1. Enter the `username` and `password` values in plain text that were defined for the `username` and `password` key values in the `application.yaml` file.

1. Select the `Exit` option once complete.

1. Restart the LiveData UI to make the changes active:

   ```text "Example"
   service livedata-ui restart
   ```

## TLS/SSL

Configure how the UI uses TLS/SSL, which is disabled by default.

| Name | Details |
| --- | --- |
| `server.ssl.enabled` | Set to `true` to enable SSL. If no other SSL values are set, this will use an internal keystore and a self-signed certificate to serve the UI.<br/><br/>**Default value**: `false`<br/>**Allowed values**: `true`, `false` |
| `server.ssl.port` | Set the port on which the UI should be available when SSL is enabled.<br/><br/>**Default value**: `8443`<br/>**Allowed values**: An integer value between `1024` and `65535` |
| `server.ssl.key-store` | The path to the key store which should be used instead of the internal default |
| `server.ssl.key-store-password` | The password to be used to access the key store |
| `server.ssl.key-alias` | The alias of the certificate to be used |
| `server.ssl.key-store-type` | Optional: set the key store type. Defaults to `PKCS12` |
| `application.liveMigratorV2.client.noCheckCertificate` | Optional: add this property and set the value to `true` if you want to implicitly trust certificates from remote LiveData Migrator instances. <br/>**Default value**: `false` <br/><br/> It is not recommended to use this property unless you are fully aware of the consequences. A safer method is to import your server certificate inside a truststore (see the tip below for an example). |

:::tip
The example command below will import a certificate named `server_cert.key` into an existing Java truststore named `cacerts`:

```text
keytool -import -trustcacerts -alias wandisco-ui -file server_cert.key -keystore cacerts
```

See the [Oracle documentation](https://docs.oracle.com/cd/E19906-01/820-4916/geygn/index.html) for details on the parameters used.
:::

## Directory structure

The following directories are used for the LiveData UI:

| Location | Content |
|---|---|
| `/var/log/wandisco/ui` | Logs |
| `/etc/wandisco/ui` | Configuration files |
| `/opt/wandisco/ui` | Operation files |
| `/var/run/livedata-ui` | Runtime files |
