# CC Assignment 4 - Transfer Files From One VM to Another

## Aim
Find and perform a procedure to transfer files from one virtual machine to another virtual machine.

## Recommended Method - VirtualBox NAT Network With SCP

This method uses a NAT Network so both virtual machines can communicate with each other.

### Step 1 - Create NAT Network

1. Open Oracle VirtualBox.
2. Go to File > Tools > Network Manager.
3. Open NAT Networks tab.
4. Click Create.
5. Keep or set network name as `NatNetwork`.
6. Enable DHCP.

### Step 2 - Attach Both VMs to NAT Network

For VM 1 and VM 2:

1. Select VM.
2. Go to Settings > Network.
3. Enable Adapter 1.
4. Set Attached to as `NAT Network`.
5. Select Name as `NatNetwork`.
6. Start both VMs.

### Step 3 - Check IP Address

Run on both VMs:

```bash
ip addr
```

or:

```bash
hostname -I
```

Note the IP address of destination VM.

### Step 4 - Install SSH Server on Destination VM

Run on destination VM:

```bash
sudo apt update
sudo apt install openssh-server -y
sudo systemctl enable ssh
sudo systemctl start ssh
```

Check SSH status:

```bash
sudo systemctl status ssh
```

### Step 5 - Create File on Source VM

Run on source VM:

```bash
echo "Hello from VM 1" > sample.txt
```

### Step 6 - Transfer File Using SCP

Run on source VM:

```bash
scp sample.txt username@destination_vm_ip:/home/username/
```

Example:

```bash
scp sample.txt jayesh@10.0.2.15:/home/jayesh/
```

### Step 7 - Verify on Destination VM

Run on destination VM:

```bash
ls
cat sample.txt
```

Expected output:

```text
Hello from VM 1
```

## Alternative Method 1 - SCP Command

### Syntax

```bash
scp source_file username@destination_vm_ip:/destination/path
```

### Example

```bash
scp sample.txt ubuntu@192.168.1.20:/home/ubuntu/
```

## Method 2 - Transfer Directory

```bash
scp -r myfolder ubuntu@192.168.1.20:/home/ubuntu/
```

## Method 3 - Using SFTP

```bash
sftp ubuntu@192.168.1.20
put sample.txt
get output.txt
exit
```

## Method 4 - Using rsync

```bash
rsync -avz sample.txt ubuntu@192.168.1.20:/home/ubuntu/
```

## Verification

Login to destination VM:

```bash
ssh ubuntu@192.168.1.20
ls /home/ubuntu
```

## Requirements
- Both VMs should be running.
- SSH service should be enabled.
- Both VMs should be connected to the same NAT Network, host-only network or bridged network.
- Destination VM firewall should allow port 22.
- Correct username, IP address and key/password should be available.

## Note on NAT
Normal NAT mode gives internet access to a VM, but VM-to-VM communication may not work directly. For transferring files between two VMs, use `NAT Network`, `Host-only Adapter` or `Bridged Adapter`.

## Conclusion
Files can be transferred between two virtual machines using SCP, SFTP or rsync over SSH.
