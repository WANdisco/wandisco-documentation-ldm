---
id: network
title: Network Requirements
sidebar_label: Network Requirements
---

Before you start installing LiveData Migrator/HiveMigrator, you need to set up your network.

LiveData Migrator functions run from a single service component that handles both the data source read & destination writes. As a single process, it needs access to source & destination from the single node. The required connectivity uses TCP connections between source and target storage (see Ports section for details). To use LiveData Migrator to migrate data to AWS EC2 instances within a Virtual Private Cloud (VPC), you will need to establish connections with these VPC-resident services.

For information on VPC connectivity options, see [Amazon Virtual Private Cloud Connectivity Options (PDF)](https://d0.awsstatic.com/whitepapers/aws-amazon-vpc-connectivity-options.pdf).


## Set up your virtual network

LiveData Migrator and HiveMigrator require network connectivity between your source and target platforms.

If you don't have Amazon Virtual Private Cloud set up, follow the guidance on the AWS website:

* [Set up an Amazon Virtual Private Cloud](https://aws.amazon.com/vpc/)


## LiveData Migrator port requirements

Ensure the following ports are open on your on-premises network:

| Port | Description | Direction |
|:-----|:------------|:----------|
| 18080 | API/ LDM CLI | Outbound |
| 443 | Data transfer HTTPS | Outbound |

## LiveData UI

Ensure the following port is open on your platform to allow bi-directional communication for WANdisco's management user interface (LiveData UI).

| Port | Description | Direction |
|:-----|:------------|:----------|
| 8081 | LiveData UI | Bi-directional |

For more information, see [General configuration](https://docs.wandisco.com/live-data-migrator/docs/configuration-ui#general-configuration).

## Network architecture

![LiveData Migrator Network Architecture](/img/ldm-aws-architecture.png)

The diagram above displays two environments - On-Premises and AWS Cloud.

### On premises

1. All migration activity, both reads and writes, goes through the LiveData Migrator service. Data transfer to AWS is via Port 443 (HTTPS). Metadata transfer through the HiveMigrator functionality is over port 6780/6781.

1. Interaction with LiveData Migrator is handled either through WANdisco's LiveData UI component (port 8081) or LiveData Migrator CLI (via LDM's API port 18080). The LDM CLI does not open any ports itself and acts as just a client.

### On AWS

1. A VPC and Subnet (see [Working with VPCs and subnets](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-vpcs.html)) to which the LiveDataMigrator connects, and that are configured with access to the underlying storage and necessary external connectivity to the source environment,

1. The underlying storage ([Amazon S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/GetStartedWithS3.html)),
:::important
By default, S3 buckets are set as private to prevent unauthorized access.
, we strongly recommend that you read the following blog on the AWS support site for a good overview of this subject:[Best practices for securing sensitive data in AWS data stores](https://aws.amazon.com/blogs/database/best-practices-for-securing-sensitive-data-in-aws-data-stores/)
:::

1. A Security Group configured automatically with the necessary settings to provide the LiveData Migrator with sufficient privileges for operation.

1. The IAM role and associated permissions for access to resources.  

1. An [AWS Glue Data Catalog](https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html) instance.


## Troubleshooting

If you are having problems with networking, you can find solutions in the [troubleshooting guide](./troubleshooting.md).
