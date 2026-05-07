# CC Assignment 5 - Launch Virtual Machine Using TryStack/OpenStack

## Aim
Find a procedure to launch a virtual machine using TryStack or an online OpenStack demo environment.

## Procedure

1. Open the OpenStack dashboard/Horizon URL.
2. Login using provided credentials.
3. Select a project/tenant.
4. Go to Compute > Instances.
5. Click Launch Instance.
6. Enter instance name.
7. Select source image such as Ubuntu or CirrOS.
8. Select flavor such as small or medium.
9. Select network.
10. Add security group rules for SSH and ICMP.
11. Select or create key pair.
12. Click Launch Instance.
13. Wait until instance status becomes Active.
14. Associate floating IP if required.
15. Connect using SSH:

```bash
ssh -i key.pem ubuntu@floating_ip
```

For CirrOS:

```bash
ssh cirros@floating_ip
```

## Security Group Rules

| Protocol | Port | Purpose |
|---|---|---|
| ICMP | All | Ping |
| TCP | 22 | SSH |
| TCP | 80 | HTTP |

## Useful OpenStack CLI Commands

```bash
openstack server list
openstack image list
openstack flavor list
openstack network list
openstack server create --image Ubuntu --flavor m1.small --network private --key-name mykey vm1
openstack floating ip create public
openstack server add floating ip vm1 <floating_ip>
```

## Conclusion
A virtual machine instance was launched using OpenStack dashboard or CLI and accessed using SSH.
