---
title: TUM course notes
date: 2021-04-12
categories:
  - study
tags:
  - tech
publish: false
---

<!-- more -->

## Compiler Construction

https://learning.edx.org/course/course-v1:StanfordOnline+SOE.YCSCS1+3T2020/block-v1:StanfordOnline+SOE.YCSCS1+3T2020+type@sequential+block@346b1c2d46a64979a4e0dafbeae60fa5/block-v1:StanfordOnline+SOE.YCSCS1+3T2020+type@vertical+block@54ccaa1c8df440c89e943464b28373f8

https://www.geeksforgeeks.org/conversion-from-nfa-to-dfa/

[Cryptography](https://www.bilibili.com/video/BV1Ht411w7Re)

### Interpretation

No precomputation on program text necessary  
$\rightarrow$ no/small startup-overhead

More context information allows for specific aggressive optimization

### Compilation

Program components are analyzed once, during preprocessing, instead of multiple times during execution  
$\rightarrow$ smaller runtime-overhead

Runtime complexity of optimizations less important than in interpreter

Substitution Lemma:
atom level
semantic level

linear+algebra+refresher
Bayesian filtering ~ online learning

discriminative / generative model

ab\*a
syntax: specification
semantics: set of words

supremum: lowest upper bound
infimum: greatest lower bound

Python UDP

https://pythontic.com/modules/socket/udp-client-server-example
https://wiki.python.org/moin/UdpCommunication

### NP

Class of computational decision problems for which any given yes-solution can be verified as a solution in polynomial time by a deterministic Turing machine (or solvable by a non-deterministic Turing machine in polynomial time).

### NP-hard

Class of problems which are at least as hard as the hardest problems in NP. Problems that are NP-hard do not have to be elements of NP; indeed, they may not even be decidable.

### NP-complete

Class of decision problems which contains the hardest problems in NP. Each NP-complete problem has to be in NP.

### PPAD

[The Complexity of Computing a Nash Equilibrium](http://people.csail.mit.edu/costis/simplified.pdf)
[PPAD](https://youtu.be/TUbfCY_8Dzs)
[PPAD Reductions](https://youtu.be/Ih0cPR745fM)

[Yale music](https://youtu.be/xBxx7aceR1U)

[Alan Kay](https://medium.com/@yang140/computer-history-alan-kay-2-2-2706b3717d6b)

[传习录](https://youtu.be/d7-fB7hgboI)

[Mixed Strategy Graph](https://nordstromjf.github.io/IntroGameTheory/S_MixStratGraph.html)

## Autonomous Driving

What is Vehicle-to-Infrastructure (V2I) communication?
Vehicle-to-Infrastructure (V2I) communication is the wireless exchange of data between vehicles and road infrastructure.

Enabled by a system of hardware, software, and firmware, V2I communication is typically wireless and bi-directional: infrastructure components such as lane markings, road signs, and traffic lights can wirelessly provide information to the vehicle, and vice versa.

Vehicle-to-Vehicle (V2V)

Vehicle-to-vehicle communication technology - commonly described as V2V - is a smart technology that enables vehicle data to exchange from one vehicle to another. Communication for V2V technology is based on dedicated short-range communications (DSRC). This isn’t exactly new technology, it’s been around for decades, but V2V systems will have the greatest impact on vehicle safety applications once it is widely available, such as advancing crash avoidance.

V2V communication enables motor vehicles to access information about the speed and position of other V2V enabled vehicles surrounding it using a **wireless** communication protocol similar to that of Wi-Fi. That data is then used to alert drivers of potential dangers, helping to reduce accidents and traffic congestion. V2V can detect dangerous traffic and road conditions, terrain issues, and weather threats within a range of 300 meters. V2V has the power to make driving a more predictable and safe activity for everyone on the road.

Vehicle-to-Infrastructure (V2I)
V2I, or vehicle-to-infrastructure technology, captures data such as traffic congestion, weather advisories, bridge clearance levels, traffic light status, and then wirelessly transmits it to inform drivers of conditions they need to be aware of which aids in safety. Smart traffic signals powered by V2I help drivers understand traffic conditions better, helping to estimate accurate arrival times which can improve communication between drivers and customers.

V2I is part of the Intelligent Transportation Systems (ITS) program which was designed to facilitate technology adoption within the U.S. Department of Transportation (DOT). The future of V2I could lead to better driver-assistance systems such as smart parking and autonomous driving vehicles, which could enhance future city planning of traffic lanes, parking lots and more.

Find the right solution for your business with our free Fleet Management Buyer’s Guide.

Vehicle-to-Everything (V2X)
V2X, also known as vehicle-to-everything, encompasses both V2V and V2I technology. V2X technology makes every automobile on the road smarter and safer by giving them the power to “communicate” with the traffic system, including other cars and infrastructure. V2X can notify drivers of dangerous weather conditions, accidents and traffic congestion nearby, and other dangerous behaviors happening in close range. V2X provides a lot of the information we have available to us as humans directly to the car or truck, reducing the reaction time it takes for the driver to respond. V2X also makes the driving process easier by automating payments for tolls and parking.

V2X communication is the future of autonomous driving, but the V2X market still has a long way to come. Similarly to V2I and V2V technology, V2X will be most effective when every truck, bus, car, motorcycle, and even bicycle, comes standard with this connected vehicle technology.

---

Holonomic vs. non-holonomic refers to a robots ability to directly move towards a target vs. having to re-position itself before moving directly to a target. An example of this is a car in a parking lot. If you have a car parked in a parking spot and wanted to move it to the spot next to it, you would need to back out of your spot then pull into the next one. Because you cannot slide the car directly into the spot next to you (or really directly into any other spot), it is considered non-holonomic.

The best way to do a qualitative check on holonomy vs. non-holonomy is if you look at a robot in its operating space, can you pick any two positions not blocked by an obstacle where the robot will need to reposition itself before directly moving to its goal position.

---

_Adaptive cruise control (ACC)_ is an available cruise control advanced driver-assistance system for road vehicles that automatically adjusts the vehicle speed to maintain a safe distance from vehicles ahead.
