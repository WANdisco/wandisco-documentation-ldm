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
| `logging.level.ROOT` | The [log level](https://docs.spring.io/spring-boot/docs/2.1.6.RELEASE/reference/html/boot-features-logging.html#boot-features-custom-log-levels).<br/><br/>**Default value**: `INFO`<br/>**Allowed values**: A valid log level: `TRACE`, `DEBUG`, `INFO`, `WARN`, `ERROR`, `FATAL`, or `OFF`  |
| `logging.audit.output.filename` | The output filename for the audit log. This will be suffixed with the date in `yyyy-MM-dd` format.<br/><br/>**Default value**: `livedata_ui_audit`<br/>**Allowed values**: A valid string |
| `logging.audit.days-kept` | The amount of days that the audit log will be retained.<br/><br/>**Default value**: `90`<br/>**Allowed values**: An integer value representing the number of days |

## User management through LDAP

Use LDAP to set up access privileges for LiveData UI users.

### Configure LDAP Authentication in the UI

You can configure the LDAP login credentials for LiveData Migrator users through the UI:

1. Anywhere in the LiveData Migrator UI, open Settings by clicking on the gear icon in the bottom left.
1. Select "LDAP Authentication" from the Settings tab that opens.
1. Tick the box labelled "Enable LDAP Authentication" at the top of the page.
1. Fill in the LDAP Server Configuration Details section with the authentication details for your LDAP Server.
1. Click the "Check Connection" button to test your connection to the LDAP server.
1. Fill in the User Search Configuration section to select which users you wish to apply the LDAP Server Configuration details to.
1. Confirm the user matches automatically returned by the form are as you intended.
1. Click the "Save" button to save the configuration and log out all LiveData Migrator users currently in the UI.

The configuration form in the UI provides all that you need to know to acquire the necessary information.

:::note
After you save your configured LDAP login credentials, all users currently logged in to the LiveData Migrator UI will be logged out.
:::

### Configure LDAP Authentication through the CLI

:::note
You're advised to configure LDAP Authentication through the UI where possible, as the CLI will not provide diagnostic information if you supply incorrect configuration details.
:::

Configure a single LDAP user to log in to the UI by using the `encryptor` tool:

1. On the LiveData UI host, run the following command:

   ```text
   livedata-ui encryptor
   ```

1. [Encrypt your LDAP Manager password](#encrypt-the-manager-password) if you have one and save the encrypted string for step 4.

   1. Select the `Encrypt a string` option when the menu appears.

   1. When the `Please enter a string` prompt appears, enter the password in plain text that you want to encrypt.

      The encrypted password string is then returned, for example: `LvglJEyAySUQBuyUcEeRcYhzrJX6NMl0`.

1. Select the `Setup Livedata UI LDAP authentication` option when the menu appears.

1. Provide your LDAP configuration.

   See the [LDAP configuration properties](#ldap-configuration-properties) for descriptions and examples of each property mentioned below.

   ```text title="Values needed"
   LDAP base url, (e.g. ldap://localhost): "application.ldap.baseUrl"
   LDAP port: "application.ldap.port"
   LDAP base dn: "application.ldap.baseDn"
   LDAP Manager dn:  (Optional, enter to skip) "application.ldap.managerDn"
   LDAP manager password: "application.ldap.managerPassword"
   Use LDAP bind auth? (y/n) "application.ldap.bindAuth"
   Password attribute. (Optional, enter to skip) "application.ldap.passwordAttribute"
   User dn patterns (Optional, enter to skip) "application.ldap.userDnPatterns"
   User search base (Optional, enter to skip) "application.ldap.userSearchBase"
   User search filter. (Optional, enter to skip) "application.ldap.userSearchFilter"
   Group search base. (Optional, enter to skip) "application.ldap.groupSearchBase"
   Group search filter. (Optional, enter to skip) "application.ldap.groupSearchFilter"
   ```

   Here are two examples of LDAP configuration:

   ```text title="Example with LDAP bind auth and no Manager"
   LDAP base url, (e.g. ldap://localhost): ldap://localhost
   LDAP port: 389
   LDAP base dn: dc=springframework,dc=org
   LDAP Manager dn:  (Optional, enter to skip)
   Use LDAP bind auth? (y/n) y
   User dn patterns (Optional, enter to skip) {0},ou=people
   User search base (Optional, enter to skip)
   User search filter. (Optional, enter to skip)
   Group search base. (Optional, enter to skip)
   Group search filter. (Optional, enter to skip)
   ```

   ```text title="Example with password attribute and Manager"
   LDAP base url, (e.g. ldap://localhost): ldap://localhost
   LDAP port: 389
   LDAP base dn: dc=springframework,dc=org
   LDAP Manager dn:  (Optional, enter to skip) CN=manager,OU=city,DC=example,DC=com
   LDAP manager password: LvglJEyAySUQBuyUcEeRcYhzrJX6NMl0
   Use LDAP bind auth? (y/n) n
   Password attribute. (Optional, enter to skip) userPassword
   User dn patterns (Optional, enter to skip)
   User search base (Optional, enter to skip) ou=people
   User search filter. (Optional, enter to skip) (uid={0})
   Group search base. (Optional, enter to skip)
   Group search filter. (Optional, enter to skip)
   ```

1. Select the `Exit` option once complete.

1. Restart the LiveData UI to make the changes active:

   ```text "Example"
   service livedata-ui restart
   ```

### LDAP configuration properties

The following properties will be written to the `application-prod.properties` file once LDAP has been configured. Use the descriptions and examples to help complete setup through the `livedata-ui encryptor` tool.

:::note
Don't configure these properties manually as the `encryptor` tool will handle special characters.
:::

| Name | Details |
| --- | --- |
| `application.ldap.enabled` | Enable LDAP login for the UI. If set to false, the default will be regular authentication (defined when logging in to the UI for the first time).<br/><br/>**Default value**: `false`<br/>**Allowed values**: `true`, `false` |
| `application.ldap.baseUrl` | The LDAP server base URL that includes the LDAP scheme, for example: `ldap://myldapserver`.<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any valid LDAP server base URL. |
| `application.ldap.port` | The LDAP server port, for example: `389`.<br/><br/>**Default value**: (none)<br/>**Allowed values**: An integer value between `1024` and `65535`.|
| `application.ldap.baseDn` | The [BaseDN](https://ldapwiki.com/wiki/BaseDN) for the LDAP search criteria, for example: `dc=example,dc=com`.<br/><br/>**Default value**: (none)<br/>**Allowed values**: A comma-separated list of valid LDAP sub-tree entries. |

#### Manager credentials

The manager credentials, used if the LDAP server has authentication enabled for read access.

| Name | Details |
| --- | --- |
| `application.ldap.managerDn` | The distinguished name (DN) for the LDAP manager, for example: `CN=manager,OU=city,DC=example,DC=com`.<br/><br/>**Default value**: (none)<br/>**Allowed values**: A comma-separated list of valid LDAP sub-tree entries. |
| `application.ldap.managerPassword` | The password of the LDAP manager. Encrypt the manager password using the `encryptor` tool before adding this value.<br/><br/>**Default value**: (none)<br/>**Allowed values**: An encrypted password. |

#### User authentication

Choose one of the following to use for user authentication with the LDAP server.

| Name | Details |
| --- | --- |
| `application.ldap.bindAuth` | Enable the [Bind Authenticator](https://docs.spring.io/spring-security/site/docs/5.1.5.RELEASE/reference/html/advanced-topics.html#using-bind-authentication) to match a specific user for authentication. If set to `false`, the `passwordAttribute` method is used by default.<br/><br/>**Default value**: (none)<br/>**Allowed values**: `true`, `false` |
| OR | |
| `application.ldap.passwordAttribute` | The LDAP attribute for the LDAP user password, for example: `userPassword`.<br/><br/>The value for the user password on the LDAP server **must** be in encrypted in [BCrypt](https://www.browserling.com/tools/bcrypt) format.<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any valid LDAP attribute. |

#### User match configuration

Choose between a user pattern or a search filter to match a valid LDAP user in the database.

| Name | Details |
| --- | --- |
| `application.ldap.userDnPatterns` | The [pattern to match the distinguished name (DN)](https://docs.spring.io/spring-security/site/docs/5.1.5.RELEASE/reference/html/advanced-topics.html#using-bind-authentication) for the user, for example: `uid={0},ou=people`. The `{0}` is used instead of the login name that would normally exist here. Use this method if all of your users are stored under a single node in the directory.<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any valid Java pattern format relative to the `application.ldap.baseDn` defined earlier. |
| OR |  |
| `application.ldap.userSearchBase` | The distinguished name (DN) of the LDAP object from where to start the search for a user account, for example: `ou=people`. This field can be left blank if you want to start the search from the `application.ldap.baseDn`.<br/><br/>**Default value**: (none)<br/>**Allowed values**: A valid LDAP DN relative to the `application.ldap.baseDn` defined earlier. |
| `application.ldap.userSearchFilter` | The LDAP query string to find the attribute representing the user account, for example `(uid={0})`. The value should be enclosed in brackets, and `{0}` is a required value as it is a token that represents the user account that will be validated.<br/><br/>**Default value**: (none)<br/>**Allowed values**: A valid LDAP attribute to represent the user login name. |

#### Group match configuration (not required)

:::info
Group match configuration is not yet used by the LiveData UI as it applies to multiple user accounts (which is not yet supported).
:::

Choose between a group pattern or a search filter to match a valid LDAP group in the database.

| Name | Details |
| --- | --- |
| `application.ldap.groupSearchBase` | The distinguished name (DN) from where to start the search for an LDAP group, for example: `ou=groups`. This field can be left blank if you want to start the search from the `application.ldap.baseDn`.<br/><br/>**Default value**: (none)<br/>**Allowed values**: A valid LDAP DN relative to the `application.ldap.baseDn` defined earlier. |
| `application.ldap.groupSearchFilter` | The filter to use to search for group membership, for example `uniqueMember={0}`.<br/><br/>**Default value**: `uniqueMember={0}`<br/>**Allowed values**: A valid LDAP attribute to represent the user group membership. |

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
