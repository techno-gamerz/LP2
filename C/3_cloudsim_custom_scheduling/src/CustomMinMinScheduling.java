package src;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.LinkedList;
import java.util.List;

import org.cloudbus.cloudsim.Cloudlet;
import org.cloudbus.cloudsim.CloudletSchedulerTimeShared;
import org.cloudbus.cloudsim.Datacenter;
import org.cloudbus.cloudsim.DatacenterBroker;
import org.cloudbus.cloudsim.DatacenterCharacteristics;
import org.cloudbus.cloudsim.Host;
import org.cloudbus.cloudsim.Log;
import org.cloudbus.cloudsim.Pe;
import org.cloudbus.cloudsim.Storage;
import org.cloudbus.cloudsim.UtilizationModel;
import org.cloudbus.cloudsim.UtilizationModelFull;
import org.cloudbus.cloudsim.Vm;
import org.cloudbus.cloudsim.VmAllocationPolicySimple;
import org.cloudbus.cloudsim.VmSchedulerTimeShared;
import org.cloudbus.cloudsim.core.CloudSim;
import org.cloudbus.cloudsim.provisioners.BwProvisionerSimple;
import org.cloudbus.cloudsim.provisioners.PeProvisionerSimple;
import org.cloudbus.cloudsim.provisioners.RamProvisionerSimple;

public class CustomMinMinScheduling {
    public static void main(String[] args) {
        try {
            CloudSim.init(1, Calendar.getInstance(), false);

            createDatacenter("Datacenter_1");
            DatacenterBroker broker = new DatacenterBroker("Broker_1");
            int brokerId = broker.getId();

            List<Vm> vmList = createVms(brokerId);
            List<Cloudlet> cloudletList = createCloudlets(brokerId);

            broker.submitVmList(vmList);
            broker.submitCloudletList(cloudletList);
            applyMinMinScheduling(cloudletList, vmList, broker);

            CloudSim.startSimulation();
            List<Cloudlet> resultList = broker.getCloudletReceivedList();
            CloudSim.stopSimulation();

            printResults(resultList);
        } catch (Exception exception) {
            exception.printStackTrace();
        }
    }

    private static Datacenter createDatacenter(String name) throws Exception {
        List<Pe> peList = new ArrayList<>();
        peList.add(new Pe(0, new PeProvisionerSimple(2000)));
        peList.add(new Pe(1, new PeProvisionerSimple(2000)));
        peList.add(new Pe(2, new PeProvisionerSimple(2000)));
        peList.add(new Pe(3, new PeProvisionerSimple(2000)));

        List<Host> hostList = new ArrayList<>();
        hostList.add(new Host(
            0,
            new RamProvisionerSimple(4096),
            new BwProvisionerSimple(10000),
            1000000,
            peList,
            new VmSchedulerTimeShared(peList)
        ));

        DatacenterCharacteristics characteristics = new DatacenterCharacteristics(
            "x86",
            "Linux",
            "Xen",
            hostList,
            10.0,
            3.0,
            0.05,
            0.001,
            0.0
        );

        return new Datacenter(name, characteristics, new VmAllocationPolicySimple(hostList), new LinkedList<Storage>(), 0);
    }

    private static List<Vm> createVms(int brokerId) {
        List<Vm> vmList = new ArrayList<>();
        vmList.add(new Vm(0, brokerId, 500, 1, 512, 1000, 10000, "Xen", new CloudletSchedulerTimeShared()));
        vmList.add(new Vm(1, brokerId, 1000, 1, 512, 1000, 10000, "Xen", new CloudletSchedulerTimeShared()));
        vmList.add(new Vm(2, brokerId, 1500, 1, 512, 1000, 10000, "Xen", new CloudletSchedulerTimeShared()));
        return vmList;
    }

    private static List<Cloudlet> createCloudlets(int brokerId) {
        List<Cloudlet> cloudletList = new ArrayList<>();
        UtilizationModel utilizationModel = new UtilizationModelFull();

        for (int i = 0; i < 6; i++) {
            Cloudlet cloudlet = new Cloudlet(i, 1000 + (i * 500), 1, 300, 300, utilizationModel, utilizationModel, utilizationModel);
            cloudlet.setUserId(brokerId);
            cloudletList.add(cloudlet);
        }

        return cloudletList;
    }

    private static void applyMinMinScheduling(List<Cloudlet> cloudletList, List<Vm> vmList, DatacenterBroker broker) {
        for (Cloudlet cloudlet : cloudletList) {
            Vm selectedVm = vmList.get(0);
            double minimumTime = cloudlet.getCloudletLength() / selectedVm.getMips();

            for (Vm vm : vmList) {
                double completionTime = cloudlet.getCloudletLength() / vm.getMips();
                if (completionTime < minimumTime) {
                    minimumTime = completionTime;
                    selectedVm = vm;
                }
            }

            broker.bindCloudletToVm(cloudlet.getCloudletId(), selectedVm.getId());
        }
    }

    private static void printResults(List<Cloudlet> resultList) {
        Log.printLine("Cloudlet ID\tStatus\tVM ID\tTime\tStart\tFinish");

        for (Cloudlet cloudlet : resultList) {
            if (cloudlet.getCloudletStatus() == Cloudlet.SUCCESS) {
                Log.printLine(
                    cloudlet.getCloudletId() + "\tSUCCESS\t" +
                    cloudlet.getVmId() + "\t" +
                    cloudlet.getActualCPUTime() + "\t" +
                    cloudlet.getExecStartTime() + "\t" +
                    cloudlet.getFinishTime()
                );
            }
        }
    }
}
