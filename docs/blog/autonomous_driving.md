---
title: Autonomous Driving
date: 2021-08-06
categories:
  - study
tags:
  - tech
publish: false
---

<!-- more -->

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

---

- roscore = ros+core : master (provides name service for ROS) + rosout (stdout/stderr) + parameter server (parameter server will be introduced later)
- rosnode = ros+node : ROS tool to get information about a node.
- rosrun = ros+run : runs a node from a given package.

Communication on topics happens by sending ROS **messages** between nodes. For the publisher (`turtle_teleop_key`) and subscriber (turtlesim_node) to communicate, the publisher and subscriber must send and receive the same **type** of message. This means that a topic **type** is defined by the message **type** published on it. The **type** of the message sent on a topic can be determined using `rostopic type`.

```text
rosservice list         print information about active services
rosservice call         call the service with the provided args
rosservice type         print service type
rosservice find         find services by service type
rosservice uri          print service ROSRPC uri
```

ROS Services are another way that nodes can communicate with each other. Services allow nodes to send a request and receive a response.

`rosparam` allows you to store and manipulate data on the ROS Parameter Server. The Parameter Server can store integers, floats, boolean, dictionaries, and lists. rosparam uses the YAML markup language for syntax. In simple cases, YAML looks very natural: `1` is an integer, `1.0` is a float, `one` is a string, `true` is a boolean, `[1, 2, 3]` is a list of integers, and `{a: b, c: d}` is a dictionary. `rosparam` has many commands that can be used on parameters, as shown below:

```text
rosparam set            set parameter
rosparam get            get parameter
rosparam load           load parameters from file
rosparam dump           dump parameters to file
rosparam delete         delete parameter
rosparam list           list parameter names
```

`msg`: msg files are simple text files that describe the fields of a ROS message. They are used to generate source code for messages in different languages.

`srv`: an srv file describes a service. It is composed of two parts: a request and a response.

msg files are stored in the msg directory of a package, and srv files are stored in the `srv` directory.

msgs are just simple text files with a field type and field name per line.

[ETH ROS](https://www.youtube.com/watch?v=0BxVPCInS3M&list=PLE-BQwvVGf8HOvwXPgtDfWoxd4Cc6ghiP)