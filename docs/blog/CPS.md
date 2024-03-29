---
title: Cyber-Physical Systems
date: 2021-06-16
categories:
  - study
tags:
  - tech
  - TUM
publish: false
---

<!-- more -->

## Links

https://github.com/mive93/multi-rate-DAG

## Thread

Before addressing preemption-threshold scheduling, some basic RTOS features must be understood. An RTOS is system software that provides services and manages processor resources such as processor cycles, memory, peripherals, and interrupts for applications. The RTOS allocates processing time among the various duties the application must perform by dividing the software into pieces, commonly called tasks or threads, and creating a run-time environment that provides each thread with its own virtual microprocessor (“multithreading”). Each of these virtual microprocessors consists of a virtual set of microprocessor resources, e.g., register set, program counter, stack memory area, and a stack pointer. Only the executing thread uses the physical microprocessor resources, but each thread operates as if it is manipulating its own private resources (the thread’s “context”).

To gain real-time responsiveness, the RTOS controls thread execution. Each thread is given a priority by the designer, to control which thread should run if more than one is ready and not blocked. When a higher-priority thread (compared to the running thread) needs to execute, the RTOS saves the currently running thread’s context to memory and restores the context of the new high-priority thread. The process of swapping the execution of threads is commonly called context switching.

This transfer of control to another thread is a fundamental benefit of an RTOS. Instead of embedding processor-allocation logic inside the application software, it’s done externally by the RTOS. This arrangement isolates the processor-allocation logic and makes it much easier to predict and adjust the run-time behavior of the embedded device.

In order to provide real-time responsiveness, an RTOS must offer preemption, which lets the application switch to a higher-priority thread instantly and transparently without waiting for completion of a lower-priority thread. (An operating environment that doesn’t support preemption is effectively just another variation on the legacy polling-loop technique found in simple, unconnected devices.) Preemptive scheduling of threads guarantees that critical threads get immediate attention so they can meet their real-time deadlines. But preemptive scheduling can result in significant context-switch overhead under certain conditions, which wastes processor cycles and challenges real-time responsiveness.
