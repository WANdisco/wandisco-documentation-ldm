---
id: get-started
title: Before you start
sidebar_label: Before you start
---



## Get started with the LiveData Migrator UI

LiveData Migrator's UI can manage multiple LiveData Migrators as well as LiveData Plane from one convenient interface. It is designed to be intuitive and contains on-screen instructions to help you perform migrations and configuration tasks successfully.

The UI is available on port 8081 on your LiveData Migrator host. For example, if you were running LiveData Migrator on a host named `myldmhost.example.com`, the URL would be:

```text
http://myldmhost.example.com:8081
```

### Register

You'll be asked to register a LiveData Migrator account the first time you use the UI. Fill in the registration form to create your user account.

Internet access from the host is not required, but when it is available, you'll be sent confirmation of your registration. We'll use your registration information to send you important information about your LiveData Migrator account, such as a reminder before your license expires. You can also opt in to receive additional product updates.

## Get started with the LiveData Migrator CLI

You can use LiveData Migrator's command line interface (CLI) to create and manage resources in LiveData Migrator, and migrate data and metadata.

### Log in

Log in to the LiveData Migrator CLI using the following command:

```bash
livedata-migrator --host=localhost
```

The command prompt will then load and automatically connect to the LiveData Migrator services located on your host.
