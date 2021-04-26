---
id: configuration-smtp
title: Configuring an SMTP server
sidebar_label: SMTP Server
---

<!-- This file is temporary until I figure out where to put the info -->

## SMTP

Configuring an SMTP server for LiveData Migrator allows the use of [email notifications](./configuration-ui.md), which notify the user via email when certain events occur in LiveData Migrator.

### Configure an SMTP server in the UI

Configure an SMTP server in the UI by accessing the SMTP configuration tab and filling in the necessary fields:

1. Click on the LiveData Migrator instance name (e.g. "localhost") on the dashboard to access the overview page.
2. Under the configuration category on the left, select "SMTP Settings".
3. Provide the necessary details in the empty form.
4. Click Save.

### Configure an SMTP server through the CLI

Use the following command to set up an SMTP server through the CLI:

```
notification email smtp set
```

Supply the following parameters:

#### Mandatory Parameters

| Name | Details |
| --- | --- |

| `--host` |  |
| `--port` | The port to use for the SMTP server. Most SMTP servers use port 25. |
<!-- This is a complete guess until I hear back from engineers: -->
| `--security` | The type of security to use on the server. 0=None, 1=STARTTLS, 2=SSL/TLS. |
| `--email` | The email address for the SMTP server to use. This address will be the sender of all configured [email notifications](./configuration-ui.md). |

#### Optional Parameters

| `--login` | The email address to be used when logging in to the server. Usually your address. |
| `--password` | The password to associate with the SMTP server login. |

#### Example

```text
notification email smtp set --host myldmhost --port myport --security 0 --email ldmsystem@domain.com  --login myusername --password mypassword
```
