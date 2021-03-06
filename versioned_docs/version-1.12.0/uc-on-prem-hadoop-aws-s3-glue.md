---
id: uc-on-prem-hadoop-aws-s3-glue
title: On-premises Hadoop to Amazon S3 and AWS Glue
sidebar_label: On-premises Hadoop to Amazon S3 & AWS Glue
---

These are an outline of the steps needed to ready your environment for migration of data and metadata.

**Time to complete:** 1 hour (assuming all prerequisites are met).

## Recommended technical knowledge

* Linux operating system
* Apache Hadoop administration
  * Hadoop Distributed Filesystem (HDFS)
  * Apache Hive
* Amazon Web Services (AWS) Service configuration and management
  * Amazon Simple Storage Service (Amazon S3)
  * AWS Glue

## Prerequisites

### On-premises Hadoop cluster

* All [prerequisites](./prereqs.md#prerequisites) are met for the source environment.

* Network connectivity between your edge node and [Amazon S3](https://docs.aws.amazon.com/general/latest/gr/s3.html) & [AWS Glue](https://docs.aws.amazon.com/general/latest/gr/glue.html). These are some of the options available depending on your use-case:

  * [AWS Site-to-Site VPN](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) - suitable for small/medium/test migrations.
  * [AWS Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html) - suitable for larger migrations (up to 100Gbps).

  Ensure that all security best practices are taken into consideration when setting up either [Site-to-Site](https://docs.aws.amazon.com/vpn/latest/s2svpn/security.html) or [Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/security.html).

### Amazon S3 and AWS Glue

For your target environment, make sure you have the following:

* An [AWS account](https://aws.amazon.com/account/).
* An [Amazon S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/GetStartedWithS3.html).
* An [AWS Glue Data Catalog](https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html) instance.
  * [Internal network configuration between AWS Glue and Amazon S3](https://docs.aws.amazon.com/glue/latest/dg/start-connecting.html) including [DNS configuration for your VPC](https://docs.aws.amazon.com/glue/latest/dg/set-up-vpc-dns.html).
  * An [AWS Glue connection](https://docs.aws.amazon.com/glue/latest/dg/console-connections.html).
  * If applicable, an [AWS Glue crawler](https://docs.aws.amazon.com/glue/latest/dg/crawler-data-stores.html) configured to crawl your Amazon S3 bucket.

### AWS security

All AWS services should be secured using best practices. This is a summary of those practices and which services they apply to.

#### Amazon S3

All Amazon S3 buckets should adhere to [AWS best practices for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html). These include the following:

* Use [IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html) to grant access to Amazon S3 buckets.
* Follow [IAM security best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) when creating policies.
  * [Create an individual IAM user/role](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#create-iam-users) for access to the bucket (don't use the AWS root account).
  * Follow the policy of [least privilege](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege) to grant read and write access to the bucket for LiveData Migrator. This includes limiting access through [bucket policies](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-iam-policies.html) and [access control lists](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html).
  * [Limit the IAM policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_controlling.html) to the minimal rules required for LiveData Migrator operations on the bucket:
    * List available buckets
    * Obtain bucket location
    * List bucket objects
    * Put, delete or retrieve objects from the bucket.
* [IAM Access and Secret Keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) are supported if your are unable to use IAM Roles.
  * Use [`filesystem update s3a`](./command-reference.md#filesystem-update-s3a) when [rotating access keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_RotateAccessKey) to update LiveData Migrator with the new key IDs.
  * The access and secret keys can be stored or referenced in a location used by the [DefaultAWSCredentialsProviderChain](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html#credentials-default). This class can be defined when using the [`--credentials-provider`](./command-reference.md#s3a-mandatory-parameters) option.

    If using the [SimpleAWSCredentialsProvider](https://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html#Simple_name.2Fsecret_credentials_with_SimpleAWSCredentialsProvider.2A) class, the access and secret keys will be stored in the LiveData Migrator database.
* [Enable server-side encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html) for your Amazon S3 bucket.
* [Block public access](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html) to the Amazon S3 bucket unless you explicitly require it.

#### AWS Glue

All AWS Glue instances should be configured using [AWS security practices for Glue](https://docs.aws.amazon.com/glue/latest/dg/security.html). These include the following:

* Set up [IAM permissions](https://docs.aws.amazon.com/glue/latest/dg/getting-started-access.html) for LiveData Migrator to access AWS Glue, including:
  * [Create an IAM policy for the AWS Glue service](https://docs.aws.amazon.com/glue/latest/dg/create-service-policy.html).
  * [Create an IAM role for AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/create-an-iam-role.html).
  * [Attach a policy to the IAM user to allow access to AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/attach-policy-iam-user.html).
* [IAM Access and Secret Keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) are supported if your are unable to use IAM Roles.
  * Use [`hive agent configure glue`](./command-reference.md#hive-agent-configure-glue) when [rotating access keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_RotateAccessKey) to update the LiveData Migrator metadata service with the new key IDs.
  * The access and secret keys can be stored or referenced in a location used by the [DefaultAWSCredentialsProviderChain](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html#credentials-default). This class is the default when not using the [`--credentials-provider`](./command-reference.md#glue-credential-parameters) option.

    If specifying the [StaticCredentialsProviderFactory](https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/index.html?com/amazonaws/auth/AWSStaticCredentialsProvider.html) class, the access and secret keys will be stored in the LiveData Migrator metadata service database.
* [Enable encryption in AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/set-up-encryption.html).

### AWS deployment

These are some of the options to consider before creating your Amazon S3 bucket and AWS Glue instance:

* [Amazon S3 storage class](https://docs.amazonaws.cn/en_us/AmazonS3/latest/userguide/storage-class-intro.html)
* [Amazon S3 lifecycle policy](https://docs.amazonaws.cn/en_us/AmazonS3/latest/userguide/object-lifecycle-mgmt.html)

* [AWS Glue cross-account and cross-region](https://aws.amazon.com/blogs/big-data/create-cross-account-and-cross-region-aws-glue-connections/)
* [AWS Glue resilience](https://docs.aws.amazon.com/glue/latest/dg/disaster-recovery-resiliency.html)

### AWS costs and quotas

The following table lists the required and optional AWS services that are applicable to this use-case:

| Service | Required? | Pricing | Quotas |
|---|---|---|---|
| Amazon S3 | **Yes** | [Amazon S3 pricing](https://aws.amazon.com/s3/pricing/) | [Amazon S3 quotas](https://docs.aws.amazon.com/general/latest/gr/s3.html#limits_s3) |
| AWS Glue | **Yes** | [AWS Glue pricing](https://aws.amazon.com/glue/pricing/) | [AWS Glue quotas](https://docs.aws.amazon.com/general/latest/gr/glue.html#limits_glue) |
| Site-to-Site VPN | Optional | [Site-to-Site VPN pricing](https://aws.amazon.com/vpn/pricing/) | [Site-to-Site VPN quotas](https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-limits.html) |
| Direct Connect | Optional | [Direct Connect pricing](https://aws.amazon.com/directconnect/pricing/) | [Direct Connect quotas](https://docs.aws.amazon.com/directconnect/latest/UserGuide/limits.html) |
| Key Management Service (KMS) | Optional | [KMS pricing](https://aws.amazon.com/kms/pricing/) | [KMS quotas](https://docs.aws.amazon.com/kms/latest/developerguide/limits.html) |

See [AWS pricing](https://aws.amazon.com/pricing/) for more general guidance.

## Install LiveData Migrator on your Hadoop edge node

[Download and install](./installation.md#download-and-install-livedata-migrator) LiveData Migrator on your Hadoop edge node.

## Configure for data migrations

### Add HDFS as source filesystem

1. Configure your on-premises HDFS as the source filesystem:

   * [UI](./configure-storage.md#configure-source-storage)
   * [CLI](./command-reference.md#filesystem-auto-discover-source-hdfs)

1. _(CLI only)_ Validate that your on-premises HDFS is now set as your source filesystem:

   [`source fs show`](./command-reference.md#source-fs-show)

   If the filesystem shown is incorrect, delete it using [`source del`](./command-reference.md#source-del) and configure the source manually:

   [`filesystem add hdfs`](./command-reference.md#filesystem-add-hdfs)

   Ensure to include the `--source` parameter when using the command above.

### Add Amazon S3 bucket as target filesystem

Configure your Amazon S3 bucket as your target filesystem:

* [UI](./configure-storage.md#add-target-storages)
* [CLI](./command-reference.md#filesystem-add-s3a)

You may then [test your target filesystem](#test-target-filesystem).

### Test the S3 bucket target

LiveData Migrator automatically tests the connection to any target filesystem added to ensure the details provided are valid and a migration can be created and run.

To check that the configuration for the filesystem is correct:

* UI - the target will show a healthy connection.
* CLI - the `filesystem show` command will show only a target that was successfully added:

  ```text title="Example"
  filesystem show --file-system-id myAWSBucket
  ```

To test a migration to the S3 bucket, [create a migration](./create-migration.md) and run it to transfer data, then check that the data has arrived in its intended destination.

## Create path mappings (optional)

[Create path mappings](./create-path-mappings.md) to ensure that data for managed Hive databases and tables are migrated to an appropriate [folder location on your Amazon S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-folders.html).

This lets you start using your source data and metadata immediately after migration, as it will be referenced correctly by your [AWS Glue crawler](https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html) and/or [AWS Glue Studio](https://docs.aws.amazon.com/glue/latest/ug/edit-jobs-source-s3-files.html).

## Configure for metadata migrations

### Add Apache Hive as source hive agent

1. (Recommended) [Enable the Hive metastore event listener](./configuration-metadata.md#enable-hive-metastore-event-listener) on the on-premises Hadoop cluster.

1. Configure the source hive agent to connect to the Hive metastore on the on-premises Hadoop cluster:

   * [UI](./connect-metastores.md#add-source-agent)
   * [CLI](./command-reference.md#hive-agent-add-hive)

### Test the Apache Hive source hive agent

LiveData Migrator automatically tests the connection to any hive agent added to ensure the details provided are valid and a metadata migration can be created and run.

To check that the configuration for the hive agent is correct:

* UI - the agent will show a healthy connection.
* CLI

  ```text title="Example"
  hive agent check --name hiveAgent
  ```

To test a metadata migration from the Apache Hive agent, [create a metadata migration](./migrate-metadata.md) and run it to transfer data, then check that the data has arrived in its intended destination.

### Add AWS Glue as target hive agent

Configure a hive agent to connect to AWS Glue:

* [UI](./connect-metastores.md#add-target-agents)
* [CLI](./command-reference.md#hive-agent-add-glue)

### Test the AWS Glue target hive agent

LiveData Migrator automatically tests the connection to any hive agent added to ensure the details provided are valid and a metadata migration can be created and run.

To check that the configuration for the hive agent is correct:

* UI - the agent will show a healthy connection.
* CLI

  ```text title="Example"
  hive agent check --name hiveAgent
  ```

To test a metadata migration to the AWS Glue target agent, [create a metadata migration](./migrate-metadata.md) and run it to transfer data, then check that the data has arrived in its intended destination.

## Troubleshooting

In the event a filesystem or hive agent could not be added, LiveData Migrator will provide you with error messages in most cases to help you discern the issue.

If no data appears to have been transferred in either a migration or a metadata migration, check LiveData Migrator's notifications for errors. In most cases, these will provide you with the information you need to diagnose any problems.

In the event of a problem you cannot diagnose, contact [WANdisco support](https://community.wandisco.com/portal/s/).

## Network architecture

![LiveData Migrator Network Architecture](/img/ldm-aws-architecture.png)

The diagram is an example of LiveData Migrator architecture between two environments - On-premises and AWS Cloud.

### On-Premises

1. All migration activity, both reads and writes, goes through the LiveData Migrator service. Data transfer to AWS is via Port 443 (HTTPS). Metadata transfer through the HiveMigrator functionality is over port 6780/6781 (HTTP/HTTPS).

1. Interaction with LiveData Migrator is handled either through WANdisco's LiveData UI component (port 8081) or LiveData Migrator CLI (via LDM's API port 18080). The LDM CLI does not open any ports itself and acts as a client.

### AWS Cloud

1. The WAN connection to AWS from the source environment (see [AWS Site-to-Site VPN](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) and [AWS Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html)).

1. A VPC and Subnet (see [Working with VPCs and subnets](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-vpcs.html)) that are configured with access to the underlying storage and metastore and necessary external connectivity to the source environment.

1. The [IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html) role and associated permissions for access to resources.

1. The underlying storage ([Amazon S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/GetStartedWithS3.html)) and metastore ([AWS Glue Data Catalog](https://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html)).

   :::important
   By default, S3 buckets are set as private to prevent unauthorized access. We strongly recommend that you read the following blog on the AWS support site for a good overview of this subject:  
   [Best practices for securing sensitive data in AWS data stores](https://aws.amazon.com/blogs/database/best-practices-for-securing-sensitive-data-in-aws-data-stores/)
   :::

1. The [AWS Key Management Service](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html) configured to encrypt both the Amazon S3 bucket and AWS Glue instance.

## Next Steps

Start [defining exclusions](./configure-exclusions.md) and [migrating data](./create-migration.md). You can also [create metadata rules](./define-metadata-rules.md) and start [migrating metadata](./migrate-metadata.md).
