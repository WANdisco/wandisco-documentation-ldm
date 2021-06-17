---
id: configuration-hvm
title: Configuring the HiveMigrator service
sidebar_label: HiveMigrator
---

The HiveMigrator service is responsible for communication between agents and migration of metadata.

Find details here for configuring the HiveMigrator service.

## Security

### Basic authentication

:::important
When basic authentication is enabled on HiveMigrator, [update the LiveData UI with the credentials to maintain functionality](./configuration-ui.md#hivemigrator).
:::

Follow these steps to enable basic authentication on the HiveMigrator REST API:

1. Edit the `/etc/wandisco/hivemigrator/application.yaml` file to enable authentication:

   ```text title="Change the enabled parameter from false to true"
   micronaut:

     security:
       enabled: true
   ```

1. [If basic authentication is enabled on the LiveData Migrator REST API](./configuration-ldm.md#security), add two properties, `username` and `password`, inside the integration section of the `/etc/wandisco/hivemigrator/application.yaml` file. Use the same username for HiveMigrator and LiveData Migrator. If the LiveData Migrator credentials and the HiveMigrator credentials (defined in the next step) are the same, you will only need to authenticate once when [connecting through the CLI](#connecting-to-hivemigrator-with-basic-authentication).

  The password string needs to be encrypted using a [bcrypt generator](https://www.browserling.com/tools/bcrypt) that provides a "2a" prefix at the beginning of the encrypted password, as shown in the following example.

   ```text title="Example"
   micronaut:
  liveDataMigrator:
    port: 18080
    useSsl: false
    username: "admin"
    password: "password"
storagePath: /opt/wandisco/hivemigrator/hivemigrator.db
username: "admin"
password: "$2a$10$3gc/9QTnGQQj51e0YRAK.OAplbj4A9S4sx7rRpMSOSpb5UrLW2p/."
   ```

1. Restart the HiveMigrator service to enable the new configuration:

   ```text
   service hivemigrator restart
   ```

   :::tip
   The username and password values can be changed without having to restart the HiveMigrator service. They will become active once you have saved the file.
   :::

#### Connecting to HiveMigrator with basic authentication

:::note
Follow these steps if you have used different credentials for [LiveData Migrator](./configuration-ldm.md#security) and HiveMigrator, or if basic authentication is not enabled on LiveData Migrator.

If you have used the same credentials for both services, this step is not required.
:::

When basic authentication is enabled, provide the username and password when prompted to connect to HiveMigrator through the CLI:

```text title="Example"
  connect hivemigrator localhost: trying to connect...
Username: admin
Password: ***********
Connected to hivemigrator v1.2.1-428 on http://localhost:6780.
```

The username and password will also be required when accessing the HiveMigrator REST API directly.

## TLS/SSL certificates

When deploying a remote agent (for example: [Azure SQL](./command-reference.md#hive-agent-add-azure) or [AWS Glue](./command-reference.md#hive-agent-add-glue)), a TLS/SSL connection will be established by default between HiveMigrator and the remote agent.

Certificates (and keys) are automatically generated for this connection for both HiveMigrator and the remote agent. These are placed in the following directories:

```text title="HiveMigrator - Client and Root CA certificates"
/etc/wandisco/hivemigrator/client-key.pem
/etc/wandisco/hivemigrator/client-cert.pem
/etc/wandisco/hivemigrator/ca-cert.pem
/etc/wandisco/hivemigrator/ca-key.pem
/etc/wandisco/hivemigrator/ca-cert.srl
```

```text title="Remote agent - Server and Root CA certificates"
/etc/wandisco/hivemigrator-remote-server/server-key.pem
/etc/wandisco/hivemigrator-remote-server/server-cert.pem
/etc/wandisco/hivemigrator-remote-server/ca-cert.pem
```

You can [generate new certificates](#generate-new-certificates) at any time or [upload your own](#upload-your-own-certificates).

### Generate new certificates

:::important
You must generate new certificates for HiveMigrator and all remote agents that are connected.

Generating certificates for just one of these components will break existing connections.
:::

Generate new certificates and keys by using the following [HiveMigrator REST API](./api-reference.md#metadata-migrations) endpoints:

```text title="HiveMigrator"
POST ​/config​/certificates​/generate
```

```text title="Remote agent"
POST ​/agents/{name}/certificates/generate
```

The remote agent service will automatically restart when new certificates are generated this way. The HiveMigrator service does not require a restart to start using new certificates.

### Upload your own certificates

:::important
Make sure the correct certificates and keys are uploaded for HiveMigrator and all remote agents that are connected.

Existing connections will break if the trust relationship is not established between HiveMigrator and remote agents.
:::

Upload certificates and keys by using the following [HiveMigrator REST API](./api-reference.md#metadata-migrations) endpoints:

```text title="HiveMigrator"
POST ​/config​/certificates​/upload
```

```text title="Remote agent"
POST ​/agents/{name}/certificates/upload
```

The remote agent service will automatically restart when new certificates are uploaded this way. The HiveMigrator service does not require a restart to start using new certificates.

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
