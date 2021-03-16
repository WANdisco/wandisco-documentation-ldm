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

## LDAP (preview)

:::info
This release of LiveData Migrator contains preview functionality for LDAP UI login.
:::

Configure a single LDAP user to log in to the UI.

| Name | Details |
| --- | --- |
| `application.ldap.enabled` | Enable LDAP login for the UI. If set to false, the default will be regular authentication (defined when logging in to the UI for the first time).<br/><br/>**Default value**: `false`<br/>**Allowed values**: `true`, `false` |
| `application.ldap.baseUrl` | The LDAP server base URL that includes the LDAP scheme, for example: `ldap://myldapserver`.<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any valid LDAP server base URL. |
| `application.ldap.port` | The LDAP server port, for example: `389`.<br/><br/>**Default value**: (none)<br/>**Allowed values**: An integer value between `1024` and `65535`.|
| `application.ldap.baseDn` | The [BaseDN](https://ldapwiki.com/wiki/BaseDN) for the LDAP search criteria, for example: `dc=example,dc=com`.<br/><br/>**Default value**: (none)<br/>**Allowed values**: A comma-separated list of valid LDAP sub-tree entries. |

### Manager credentials

Provide the manager credentials if the LDAP server has authentication enabled for read access.

| Name | Details |
| --- | --- |
| `application.ldap.managerDn` | The distinguished name (DN) for the LDAP manager, for example: `CN=manager,OU=city,DC=example,DC=com`.<br/><br/>**Default value**: (none)<br/>**Allowed values**: A comma-separated list of valid LDAP sub-tree entries. |
| `application.ldap.managerPassword` | The password of the LDAP manager. [Encrypt the manager password](#encrypt-the-manager-password) instead of entering this property manually.<br/><br/>**Default value**: (none)<br/>**Allowed values**: An encrypted password. |

#### Encrypt the manager password

Use the LiveData UI encryptor tool to encrypt the LDAP manager password and store it in `application-prod.properties` file.

1. On the LiveData UI host, run the following command:

   ```text
   livedata-ui encryptor
   ```

1. Select the `Encrypt and save a property to /etc/wandisco/ui/application-prod.properties` option when the menu appears.

1. Provide the following entries when prompted:

   * `Key` = `application.ldap.managerPassword`
   * `Value` = (LDAP Manager password in plain text, for example: `myPassword`)

The `/etc/wandisco/ui/application-prod.properties` file is updated with the new property and encrypted password.

### User match configuration

Choose between a user pattern or a search filter to match a valid LDAP user in the database.

| Name | Details |
| --- | --- |
| `application.ldap.userDnPatterns` | The [pattern to match the distinguished name (DN)](https://docs.spring.io/spring-security/site/docs/5.1.5.RELEASE/reference/html/advanced-topics.html#using-bind-authentication) for the user, for example: `uid={0},ou=people`. The `{0}` is used instead of the login name that would normally exist here. Use this method if all of your users are stored under a single node in the directory.<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any valid Java pattern format relative to the `application.ldap.baseDn` defined earlier. |
| OR |  |
| `application.ldap.userSearchBase` | Provide the distinguished name (DN) of the LDAP object from where to start the search for a user account, for example: `ou=people`. This field can be left blank if you want to start the search from the `application.ldap.baseDn`.<br/><br/>**Default value**: (none)<br/>**Allowed values**: A valid LDAP DN relative to the `application.ldap.baseDn` defined earlier. |
| `application.ldap.userSearchFilter` | The LDAP query string to find the attribute representing the user account, for example `(uid={0})`. The value should be enclosed in brackets, and `{0}` is a required value as it is a token that represents the user account that will be validated.<br/><br/>**Default value**: (none)<br/>**Allowed values**: A valid LDAP attribute to represent the user login name. |

#### User authentication

Choose one of the following properties to use for user authentication with the LDAP server.

| Name | Details |
| --- | --- |
| `application.ldap.bindAuth` | Enable the [Bind Authenticator](https://docs.spring.io/spring-security/site/docs/5.1.5.RELEASE/reference/html/advanced-topics.html#using-bind-authentication) to match a specific user for authentication. If set to `false`, the `passwordAttribute` method is used by default.<br/><br/>**Default value**: (none)<br/>**Allowed values**: `true`, `false` |
| OR | |
| `application.ldap.passwordAttribute` | Provide the LDAP attribute for the LDAP user password, for example: `userPassword`.<br/><br/>The value for the user password on the LDAP server **must** be in encrypted in [BCrypt](https://www.browserling.com/tools/bcrypt) format.<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any valid LDAP attribute. |

## Security

### Basic authentication compatibility

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
