---
id: license
title: Upgrade your LiveData Migrator License
sidebar_label: Upgrade Your License
---

The LiveData Migrator trial license includes 14 days operation and 5TB of data migration. This gives you full use of LiveData Migrator up to either of these limits.

When you want to upgrade to a full license, [contact WANdisco](https://www.wandisco.com). Once you have your new license, follow these steps to upload the license key to LiveData Migrator with either the [UI](#upgrade-your-license-in-the-ui) or [CLI](#upgrade-your-license-with-the-cli).

## Upgrade your license in the UI

Upload your new license in the License panel of the UI. This panel displays current license information, including the expiry date, and warnings if your license limits are approaching.

1. Click **Upgrade License**.
1. Click the option to purchase a license now. Follow the provided instructions to get your license.

   Once your license has been sent, ensure it is available on your local machine.
1. Upload your new license.
1. Check the **License Information** window and ensure that your new data limit has been applied.

   We'll notify you when it's time to renew your license.

## Upgrade your license with the CLI

Use the following commands to upload your new license.

1. Log into your LiveData Migrator host.

1. Use the [`license show`](./command-reference.md#license-show) command to see details of your current LiveData Migrator license.

1. Upload the new license key with the [`license upload`](./command-reference.md#license-upload) command.

  ```text title="Example"
  license upload --path /user/hdfs/license.key

  ```

## Next Steps

Once you have LiveData Migrator running, you can use the [UI](./operation-ui.md) or [CLI](./operation-cli.md) to start migrating data.
