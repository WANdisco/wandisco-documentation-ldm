---
id: license
title: Licensing
sidebar_label: Licensing
---

The LiveData Migrator trial license includes 14 days operation and 5TB of data migration. This gives you full use of LiveData Migrator up to either of these limits.

Once you've reached the limit of your trial license, you'll need to upgrade to a full license to continue using LiveData Migrator. These instructions explain how to upgrade or renew a full license with either the [UI](#upgrade-your-license-in-the-ui) or [CLI](#upgrade-your-license-with-the-cli).

## License costs and billing

Contact the [WANdisco Sales team](https://www2.wandisco.com/contact-us) to learn more about LiveData Migrator license pricing, or [AWS Marketplace](https://aws.amazon.com/marketplace/pp/B07B8SZND9) if you are an Amazon Web Services (AWS) customer.

Target filesystems incur billing costs which vary depending on Cloud platform. Refer to the following links to learn the costs for each target filesystem.

* [Amazon Simple Storage Service (Amazon S3)](https://aws.amazon.com/s3/pricing/)
* [Google Cloud](https://cloud.google.com/pricing)
* [IBM COS](https://www.ibm.com/cloud/object-storage/pricing)

## Upgrade your license in the UI

Upload your new license in the License panel of the UI. This panel displays current license information, including the expiry date, and warnings if your license limits are approaching.

1. Click **Upgrade License**.
1. Click the option to purchase a license now. Follow the provided instructions to get your license.

   Once your license has been sent, ensure it is available on your local machine.
1. Upload your new license.
1. Check the **License Information** window and ensure that your new data limit has been applied.

   We'll notify you when it's time to renew your license.

## Upgrade your license with the CLI

[Contact WANdisco](https://community.wandisco.com/s/article/How-to-upgrade-your-license) to purchase a full license. Once you have your new license, use the following commands to upload the new license key to LiveData Migrator.

1. Log in to the LiveData Migrator host.

1. Log in to the LiveData Migrator CLI.

   ```text
   livedata-migrator
   ```

1. Use the [`license show`](./command-reference.md#license-show) command to see details of your current LiveData Migrator license.

1. Upload the new license key with the [`license upload`](./command-reference.md#license-upload) command.

   ```text title="Example"
   license upload --path /user/hdfs/license.key
   ```

## Next Steps

You're ready to migrate data! Learn how to [get started with LiveData Migrator](./get-started.md).
