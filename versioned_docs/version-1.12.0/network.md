---
id: network-requirements
title: Network Requirements
sidebar_label: Network requirements
---

Configure your network to allow connectivity between your source and target environments, and for accessing the management interface (LiveData UI).

There are three LDM components that use network ports for TCP connections: LiveData Migrator, HiveMigrator and LiveData UI.

## LiveData Migrator port requirements

Ensure the following ports are open on your on-premises network:

| Port | Description | Direction |
|:-----|:------------|:----------|
| 18080 | LDM REST API | Outbound |
| 443 | Data transfer (HTTPS) | Outbound |

For more information (such as port changes), see [General configuration for LiveData Migrator](https://docs.wandisco.com/live-data-migrator/docs/configuration-ldm#general-configuration).

## HiveMigrator port requirements

Ensure the following ports are open on your on-premises network:

:::note
You only need to enable one of these ports depending on whether your connection will utilise HTTP or HTTPS.
:::

| Port | Description | Direction |
|:-----|:------------|:----------|
| 6780 | Metadata transfer (HTTP) | Outbound |
| 6781 | Metadata transfer (HTTPS) | Outbound |

## LiveData UI port requirements

Ensure the following port is open on your platform to allow bi-directional communication for WANdisco's management user interface (LiveData UI).

| Port | Description | Direction |
|:-----|:------------|:----------|
| 8081 | LiveData UI | Bi-directional |

For more information (such as port changes), see [General configuration for LiveData UI](https://docs.wandisco.com/live-data-migrator/docs/configuration-ui#general-configuration).

## Troubleshooting

If you are having problems with networking, you can find solutions in the [troubleshooting guide](./troubleshooting.md).

## Next steps

[Install LiveData Migrator](./installation.md) after setting up your network.
