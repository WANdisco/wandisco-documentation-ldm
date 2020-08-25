---
id: configuration
title: Configuration
sidebar_label: Configuration
---

:::note Public Preview
LiveData Migrator is in public preview. This gives you access to all product functionality for review, but limits operation time to 10 minutes during the preview period.
:::

Find details here for the configuration properties that you can use when running LiveData Migrator as a system service. Properties are defined in the `/etc/wandisco/livedata-migrator/application.properties` file. Each configuration property can also be provided to LiveData Migrator as a command-line argument when launched, e.g. `--server.port=19999`.

An example `application.properties` file:

```text
# pretty print JSON output in API results
spring.jackson.serialization.INDENT_OUTPUT=true
springdoc.swagger-ui.path=/lm2-api.html
# spring.main.lazy-initialization = true
pull.threads=50
engine.threads=1000
persisted.store=true
server.port=18080
shell.history.filePath=~/.livemigrator_history
cli.enabled=true
ssh.shell.enable=true
ssh.shell.prompt.local.enable=${cli.enabled}
spring.shell.interactive.enabled=${cli.enabled}

# prevayler configuration
install.dir=
prevayler.databaseLocation=${install.dir}db
prevayler.persistent=true
prevayler.force=true
prevayler.bufferedJournal=true
prevayler.mirrored=true

# security configuration for basic authentication
security.type=off
#security.type=basic
#security.basic.user=admin
#security.basic.password={bcrypt}$2a$10$kXzfqwiiCY/ZW9e9BboNmuIbe5xe2kNjdk1YNUxmsCaQ7PlBLCe4W
adls1.fs.type.default.properties=fs.scheme,fs.account.name,fs.container.name,fs.auth.type,fs.oauth2.client.id
adls2.fs.type.default.properties=fs.scheme,fs.account.name,fs.container.name,fs.auth.type,fs.oauth2.client.id
hdfs.fs.type.default.properties=fs.defaultFS
s3a.fs.type.default.properties=fs.defaultFS
local.fs.type.default.properties=fs.root

lm.kerberos.is.enabled=false
#lm.kerberos.principal=hdfs-dmagen-02@WANDISCO.HADOOP
#lm.kerberos.keytab.location=/etc/security/keytabs/hdfs.headless.keytab
lm.kerberos.principal=
lm.kerberos.keytab.location=

# HTTP traffic logging config
logging.level.org.zalando.logbook=TRACE
logbook.format.style=http
logbook.write.max-body-size=1024
logbook.exclude=/v3/api-docs/**,/swagger-ui/**
# HTTP message masking properties
#logbook.obfuscate.parameters=access_token,password
#logbook.obfuscate.headers=authorization,x-auth-password,x-auth-token,X-Secret
#obfuscate.json.properties=foo,bar

ssh.shell.prompt.text=WANdisco LiveMigrator >>\u0020
ssh.shell.prompt.color=white
ssh.shell.authentication=simple
ssh.shell.user=user
ssh.shell.password=password
ssh.shell.port=2222
ssh.shell.historyFile=${user.home}/.livemigrator_history
#ssh.shell.authorized-public-keys-file=samples/public-keys-sample
```

## General configuration

These configuration properties are used to adjust general items of operation.

| Name | Details |
| --- | --- |
| `spring.jackson.serialization.INDENT_OUTPUT` | Whether to apply indentation to JSON output from command results<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |
| `springdoc.swagger-ui.path` | The path at which clients can access the Swagger documentation for the LiveData Migrator REST API<br/><br/>**Default value**: `/lm2-api.html`<br/>**Allowed values**: Any valid file path |
| `pull.threads` | The size of the thread pool that is used for executing activities related to notifications of changes in an HDFS environment<br/><br/>**Default value**: `50`<br/>**Allowed values**: An integer value between `1` and `10000` |
| `engine.threads` | The size of the thread pool used to perform migration of content from the source file system to targets<br/><br/>**Default value**: `1000`<br/>**Allowed values**: An integer value between `1` and `10000` |
| `persisted.store` | Reserved for future use |
| `server.port` | The TCP port used to listen for clients interacting with the [REST API](./api-reference.md)<br/><br/>**Default value**: `18080`<br/>**Allowed values**: An integer value between `1024` and `65535` |
| `shell.history.filePath` | Location of the record of commands issued at the action prompt<br/><br/>**Default value**: `~/.livemigrator_history`<br/>**Allowed values**: The full path to a valid filename in a directory that is writable by the user running LiveData Migrator (typically `hdfs`.) |
| `cli.enabled` | Whether the action prompt interface will be made available from the LiveData Migrator instance<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |
| `spring.shell.interactive.enabled` | Whether the console session with the action prompt is interactive or non-interactive, affecting prompt output, command completino and other interactive features<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |

## SSH access

These configuration properties govern whether and how access to LiveData Migrator is provided using the [SSH protocol](https://en.wikipedia.org/wiki/Secure_Shell). You can manage LiveData Migrator when it operates as a system service using either the [REST API](./api-reference.md), or using SSH access to the console interface.

| Name | Details |
| --- | --- |
| `ssh.shell.enable` | Whether LiveData Migrator will accept connections from an SSH client to provide access to the action prompt. Setting this to false will prevent access via SSH from any client.<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |
| `ssh.shell.prompt.local.enable` | Whether LiveData Migrator will allow local access via SSH to the action prompt. Setting this to `false` will prevent access from local clients.<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |
| `ssh.shell.prompt.text` | This is the text content presented as the action prompt. You can override it to provide instance-specific text.<br/><br/>**Default value**: `WANdisco LiveMigrator >>\u0020`<br/>**Allowed values**: Any text string |
| `ssh.shell.prompt.color` | The color used for the action prompt. <br/><br/>**Default value**: `white`<br/>**Allowed values**: One of the color names `black`, `white`, `red`,`yellow`, `green`, `blue`.
| `ssh.shell.authentication` | Defines the authentication mechanism used by LiveData Migrator for SSH access. `simple` denotes authentication provided by the username and password defined in the `ssh.shell.user` and `ssh.shell.password` configuration properties, while `security` denotes authentication using a private key that matches one of the public keys in the file specified with the `ssh.shell.authorized-public-keys-file` configuration property.<br/><br/>**Default value**: `simple`<br/>**Allowed values**: `simple`, `security` |
| `ssh.shell.user` | The username that an SSH client must provide when LiveData Migrator is configured for simple authentication.<br/><br/>**Default value**: `user`<br/>**Allowed values**: Any string that defines a username (no whitespace) |
| `ssh.shell.password` | The password that an SSH client must provide when LiveData Migrator is configured to use simple authentication.<br/><br/>**Default value**: `password`<br/>**Allowed values**: Any string |
| `ssh.shell.port` | The TCP port on which LiveData Migrator will listen for new SSH connections<br/><br/>**Default value**: `2222`<br/>**Allowed values**: An integer value between `1024` and `65535` |
| `ssh.shell.historyFile` | The full path to the file in which the record of commands issued to the action prompt will be recorded<br/><br/>**Default value**: `${user.home}/.livemigrator_history`<br/>**Allowed values**: The full path to a valid filename in a directory that is writable by the user running LiveData Migrator (typically `hdfs`.)
| `ssh.shell.authorized-public-keys-file` | The file containing public keys against which client credentials will be matched to authorize access to the console over SSH when LiveData Migrator is configured for `security` authentication<br/><br/>**Default value**: `samples/public-keys-sample`<br/>**Allowed values**: The full path to a file that contains one line entry per public key, in the same format used by `sshd`. |

## Logging

Configure how LiveData Migrator logs requests made against the [REST API](./api-reference.md).

| Name | Details |
| --- | --- |
| `logging.level.org.zalando.logbook` | The logging level to apply to HTTP activity against the REST API of LiveData Migrator. This must be set to `TRACE` to record any log information.<br/><br/>**Default value**: `TRACE`<br/>**Allowed values**: `TRACE`, `NONE` |
| `logbook.format.style` | The logging style applied to HTTP activity records<br/><br/>**Default value**: `http`<br/>**Allowed values**: `http`, `curl` |
| `logbook.write.max-body-size` | The maximum number of bytes from an HTTP request or response body to include in a log entry<br/><br/>**Default value**: 1024<br/>**Allowed values**: Any integer between `1` and `2147483647` |
| `logbook.exclude` | A comma-separated list of patterns that match URIs for which HTTP activity should not be logged<br/><br/>**Default value**: `/v3/api-docs/**,/swagger-ui/**`<br/>**Allowed values**: Any valid comma-separated list of patterns |
| `logbook.obfuscate.parameters` | A comma-separated list of HTTP parameters that should not be recorded in log entries, e.g. `access_token,password`<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any valid comma-separated list of HTTP parameter names |
| `logbook.obfuscate.headers` | A comma-separated list of HTTP headers that should not be recorded in log entries, e.g. `authorization,x-auth-password,x-auth-token,X-Secret`<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any valid comma-separated list of HTTP headers |
| `obfuscate.json.properties` | A comma-separated list of JSON request properties by name that should not be recorded in log entries, e.g. `foo,bar`<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any valid comma-separated list of property names |

## State

LiveData Migrator employes an internally-managed database to record state during operation called the Prevayler.

| Name | Details |
| --- | --- |
| `prevayler.databaseLocation` | The directory in which LiveData Migrator will write files to manage state<br/><br/>**Default value**: `${install.dir}/db`<br/>**Allowed values**: The full path to a directory in which database files will be managed. It must be writable by the user running LiveData Migrator (typically `hdfs`.) |
| `prevayler.persistent` | Whether LiveData Migrator will persist state to disk in files<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |
| `prevayler.force` | Whether the database performs a sync operation to ensure content is written to persistent storage on each write activity<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |
| `prevayler.bufferedJournal` | Whether buffered journal I/O is used for the database<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |
| `prevayler.mirrored` | Whether actions tracked in-memory by the database are mirrored to disk on every modification. The alternative is for operation to periodically flush to disk and flush on shutdown.<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |

## Security

Secure access to the LiveData Migrator [REST API](./api-reference.md) through configuration. Choose between no security or HTTP basic security.

| Name | Details |
| --- | --- |
| `security.type` | The method of securing access to the REST API<br/><br/>**Default value**: `off`<br/>**Allowed values**: `off`, `basic` |
| `security.basic.user` | The username that needs to be provided by a REST client to gain access to a secured REST API, e.g. `admin`<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any string that defines a username (no whitespace) |
| `security.basic.password` | A bcrypt-encrypted representation of the password that needs to be provided using HTTP basic authentication to acceess the REST API when LiveData Migrator is configured for `basic` security, e.g. `{bcrypt}$2a$10$kXzfqwiiCY/ZW9e9BboNmuIbe5xe2kNjdk1YNUxmsCaQ7PlBLCe4W`<br/><br/>**Default value**: (none)<br/>**Allowed values**: A valid bcrypt-encrypted string |

## Kerberos Integration

Configure LiveData Migrator to work against securely-configured Hadoop environments using Kerberos. Note that when run as a command-line application, LiveData Migrator can use Kerberos credentials that are available as a result of the use of `kinit` instead of static configuration defined with these properties.

| Name | Details |
| --- | --- |
| `lm.kerberos.is.enabled` | Whether LiveData Migrator should attempt to authenticate against HDFS using Kerberos<br/><br/>**Default value**: `false`<br/>**Allowed values**: `true`, `false` |
| `lm.kerberos.principal` | The Kerberos principal to use when authenticating to HDFS, e.g. `hdfs-dmagen-02@WANDISCO.HADOOP`<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any valid Kerberos principal name |
| `lm.kerberos.keytab.location` | The location of the keytab file in which credentials for the user defined above are provided, e.g. `/etc/security/keytabs/hdfs.headless.keytab`<br/><br/>**Default value**: (none)<br/>**Allowed values**: The full path to a keytab file that can be read by the user identity used to run LiveData Migrator (typically `hdfs`) |

## File system defaults

Each file system supported by LiveData Migrator can apply properties defined using the `--properties` or `--properties-files` parameters to the [various `filesystem add` commands](./command-reference#file-system-commands). You can set default properties that will apply to each type of file system at time of creation through these configuration items.

| Name | Details |
| --- | --- |
| `adls1.fs.type.default.properties` | A comma-separated list of default properties to apply to ADLS Gen 1 file system resources on creation.<br/><br/>**Default value**: `fs.scheme,fs.account.name,fs.container.name,fs.auth.type,fs.oauth2.client.id`<br/>**Allowed values**: Any comma-separated list of valid ADLS Gen 1 configuration properties |
| `adls2.fs.type.default.properties` | A comma-separated list of default properties to apply to ADLS Gen 2 file system resources on creation.<br/><br/>**Default value**: `fs.scheme,fs.account.name,fs.container.name,fs.auth.type,fs.oauth2.client.id`<br/>**Allowed values**: Any comma-separated list of valid ADLS Gen 2 configuration properties |
| `hdfs.fs.type.default.properties` | A comma-separated list of default properties to apply to ADLS Gen 1 file system resources on creation.<br/><br/>**Default value**: `fs.defaultFS`<br/>**Allowed values**: Any comma-separated list of valid HDFS configuration properties |
| `s3a.fs.type.default.properties` | A comma-separated list of default properties to apply to S3A file system resources on creation.<br/><br/>**Default value**: `fs.defaultFS`<br/>**Allowed values**: Any comma-separated list of valid S3A configuration properties |
| `local.fs.type.default.properties` | A comma-separated list of default properties to apply to S3A file system resources on creation.<br/><br/>**Default value**: `fs.root`<br/>**Allowed values**: Any comma-separated list of valid S3A configuration properties |