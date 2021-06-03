---
id: get-started
title: Get started
sidebar_label: Get started
---

You can use the LiveData Migrator UI or CLI to manage resources and migrate data.

If you want to use the [UI](#get-started-with-the-livedata-migrator-ui) to operate LiveData Migrator, register your LiveData Migrator account after installation. If you want to use the [CLI](#get-started-with-the-livedata-migrator-cli) to operate LiveData Migrator, you're ready to log in.

## LiveData UI

The LiveData UI can manage multiple LiveData Migrators as well as LiveData Plane from one convenient interface. It is designed to be intuitive and contains on-screen instructions to help you perform migrations and configuration tasks successfully.

The UI is available on port 8081 on your LiveData Migrator host. For example, if you were running LiveData Migrator on a host named `myldmhost.example.com`, the URL would be:

```text
http://myldmhost.example.com:8081
```

### Register your user account

You'll be asked to register the first time you use the UI. Fill in the registration form to create your user account.

Internet access from the host is not required, but when it is available, you'll be sent confirmation of your registration. We'll use your registration information to send you important information about your LiveData Migrator account, such as a reminder before your license expires. You can also opt in to receive additional product updates.

### Add additional LiveData Migrators

If you have additional LiveData Migrator instances, these can be managed in the LiveData UI.

Follow these steps to add an additional instance of LiveData Migrator:

1. On the LiveData UI dashboard, click **+** to add an additional **Products**.
1. On the **Connect to a New Product** page, select **LiveData Migrator**.
1. Fill in the LiveData Migrator instance details:
   * **Product name** - Give your LiveData Migrator instance a name (for example: `LDM-02`).
   * **Hostname or IP address** - Provide the fully qualified domain name or IP address of the LiveData Migrator host machine (for example: `myldm02host.example.com`).
   * **LiveData Migrator Port** - Provide the LiveData Migrator port (for example: `18080`).
   * **Connect to Hive Migrator** - If you LiveData Migrator instance has the [HiveMigrator](./configuration-hvm.md) service running as well, check this box to connect to it.
     * **Hive Migrator port** - Provide the HiveMigrator port (for example: `6780`).
   * **Use Basic Authentication** - If [basic authentication](./configuration-ldm.md#basic-authentication) is enabled on your LiveData Migrator instance, check this box and supply the credentials:
     * **Username** - Provide the LiveData Migrator instance username for basic authentication (for example: `admin`).
     * **Password** - Provide the LiveData Migrator instance password for basic authentication (for example: `password`).
1. Click **Connect** once all details have been filled.

You will be taken to the LiveData Migrator **Overview** page once the UI has connected to the instance. The new LiveData Migrator instance will also be displayed on the dashboard in the **Products** section.

### Remove LiveData Migrators

Follow these steps if you want to remove a LiveData Migrator instance from the UI:

1. On the LiveData UI dashboard, click the LiveData Migrator instance that you want to remove in the **Products** section (for example: `LDM-02`).
1. Click **Configuration -> LiveData Migrator** when viewing the instance.
1. Click the option to **Remove** the LiveData Migrator (this will also remove the associated HiveMigrator instance as well).
1. Choose the **Remove** option in the pop-up.

The LiveData Migrator instance will no longer display on the dashboard.

## LiveData Migrator CLI

You can use the LiveData Migrator command line interface (CLI) to create and manage resources in LiveData Migrator, and migrate data and metadata.

Run the following command to log in to the LiveData Migrator CLI:

```bash
livedata-migrator
```

The command prompt will then load and automatically connect to the LiveData Migrator services located on your host.

## Next Steps

Ready to migrate data? [Configure your storage](./configure-storage.md) to start.
