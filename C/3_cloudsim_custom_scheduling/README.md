# CC Assignment 3 - CloudSim Custom Scheduling Algorithm

## Aim
Simulate a cloud scenario using CloudSim and run a scheduling algorithm that is not present in CloudSim.

## Algorithm Used
Custom Min-Min Scheduling Algorithm.

## Idea
1. Create datacenter.
2. Create broker.
3. Create virtual machines.
4. Create cloudlets.
5. Assign each cloudlet to the VM that gives minimum expected completion time.
6. Run simulation.

## Files
- `src/CustomMinMinScheduling.java` - CloudSim simulation source code
- `algorithm.txt` - Algorithm steps

## Run
Add CloudSim jar files to classpath, then compile and run:

```bash
javac -cp cloudsim-3.0.3.jar src/CustomMinMinScheduling.java
java -cp .;cloudsim-3.0.3.jar src.CustomMinMinScheduling
```

On Linux/macOS, use `:` instead of `;` in classpath.

## Conclusion
A custom scheduling algorithm was implemented and simulated using CloudSim.
