---
title: Autonomous Driving
date: 2021-08-06
sidebar: "auto"
categories:
  - study
tags:
  - tech
publish: false
---

<!-- more -->

## Prerequisite Notions

_Adaptive cruise control (ACC)_ is an available cruise control advanced driver-assistance system for road vehicles that automatically adjusts the vehicle **speed** to maintain a **safe distance** from vehicles ahead.

A _point cloud_ is a set of data points in space. The points may represent a 3D shape or object. Each point position has its set of Cartesian coordinates (X, Y, Z). Point clouds are generally produced by 3D scanners or by photogrammetry software, which measure many points on the external surfaces of objects around them.

The _Controller Area Network Interface Bus (CAN)_ implements a _multi-master serial bus_ to _connect microcontrollers and devices_, also known as **nodes**, to communicate with each other in applications **without a host computer**.

_Egomotion_ is defined as the 3D motion of a camera within an environment.

_Motion primitives_ are pre-computed motions that the robot can take.

_Signal-to-noise ratio (SNR or S/N)_ is a measure used in science and engineering that compares the level of a desired signal to the level of background noise. SNR is defined as the ratio of signal power to the noise power, often expressed in decibels. A ratio higher than $1:1$ indicates more signal than noise.

An _Electronic Control Unit (ECU)_, also commonly called an _engine control module_ is a type of electronic control unit that _controls_ a series of _actuators_ on an internal combustion engine to ensure optimal engine performance.

_Human Machine Interface (HMI)_ refers to a dashboard or screen used to **control machinery**. Line operators, managers and supervisors in industry rely on HMIs to translate complex data into useful information.

An _actuator_ is a device that _produces a motion_ by converting _energy and signals_ going into the system.

### Advanced driver-assistance systems (ADAS)

_Advanced driver-assistance systems (ADAS)_ are groups of electronic technologies that _assist drivers_ in _driving_ and _parking_ functions. Through a safe human-machine interface, ADAS increase car and road safety. ADAS use automated technology, such as sensors and cameras, to detect nearby obstacles or driver errors, and respond accordingly. In summary: not fully autonomous, anything that helps the driver, don't take control from the driver, easier for driver to control.

ADAS are _categorized_ into different levels based on the **amount of automation**, and the scale provided by The _Society of Automotive Engineers (SAE)_. ADAS can be divided into five levels. In level 0, ADAS cannot control the car and can only provide information for the driver to interpret on their own. Some ADAS that are considered level 0 are: parking sensors, surround-view, traffic sign recognition, lane departure warning, night vision, blind spot information system, rear-cross traffic alert, and forward-collision warning. Level 1 and 2 are very similar in that they both have the driver do most of the decision making. The difference is level 1 can take control over one functionality and level 2 can take control over multiple to aid the driver. ADAS that are considered level 1 are: adaptive cruise control, emergency brake assist, automatic emergency brake assist, lane-keeping, and lane centering. ADAS that are considered level 2 are: highway assist, autonomous obstacle avoidance, and autonomous parking. From level 3 to 5, the amount of control the vehicle has increases; level 5 being where the vehicle is fully autonomous. Some of these systems have not yet been fully embedded in commercial vehicles. For instance, highway chauffeur is a Level 3 system, and automatic valet parking is a level 4 system, both of which are not in full commercial use yet.

An _Inertial Measurement Unit (IMU)_ is an electronic device that measures and reports a body's specific **force**, **angular rate**, and sometimes the **orientation** of the body, using a combination of **accelerometers**, **gyroscopes**, and sometimes **magnetometers**.

_Anti-lock braking Braking System (ABS)_ automates the brake pumping process so you can concentrate on steering the vehicle to safety during an emergency situation. By preventing your car’s wheels from locking, anti-lock brakes ensure that you are able to steer during a hard braking event.

_Automatic emergency braking (AEB)_ is a safety system that can identify when a possible collision is about to occur and responds by autonomously activating the brakes to slow a vehicle prior to impact or bring it to a stop to avoid a collision.

_Traction control System (ASR)_ is typically a secondary function of the _electronic stability control_ on production motor vehicles, designed to _prevent loss of traction_ of the driven road **wheels**.

Turbo mode: when you hit the throttle (pedal), the engine works harder and creates more exhaust pressure.

### Communication

#### Vehicle-to-Infrastructure (V2I)

_Vehicle-to-Infrastructure (V2I)_ communication is the wireless exchange of data between vehicles and road infrastructure.

Enabled by a system of hardware, software, and firmware, V2I communication is typically wireless and bi-directional: infrastructure components such as lane markings, road signs, and traffic lights can wirelessly provide information to the vehicle, and vice versa.

#### Vehicle-to-Vehicle (V2V)

_Vehicle-to-vehicle (V2V)_ is a smart communication technology that enables vehicle data to exchange from one vehicle to another. Communication for V2V technology is based on dedicated short-range communications (DSRC). This isn’t exactly new technology, it’s been around for decades, but V2V systems will have the greatest impact on vehicle safety applications once it is widely available, such as advancing crash avoidance.

V2V communication enables motor vehicles to access information about the speed and position of other V2V enabled vehicles surrounding it using a **wireless** communication protocol similar to that of Wi-Fi. That data is then used to alert drivers of potential dangers, helping to reduce accidents and traffic congestion. V2V can detect dangerous traffic and road conditions, terrain issues, and weather threats within a range of 300 meters. V2V has the power to make driving a more predictable and safe activity for everyone on the road.

#### Vehicle-to-Infrastructure (V2I)

_Vehicle-to-infrastructure (V2I)_ captures data such as traffic congestion, weather advisories, bridge clearance levels, traffic light status, and then wirelessly transmits it to inform drivers of conditions they need to be aware of which aids in safety. Smart traffic signals powered by V2I help drivers understand traffic conditions better, helping to estimate accurate arrival times which can improve communication between drivers and customers.

V2I is part of the Intelligent Transportation Systems (ITS) program which was designed to facilitate technology adoption within the U.S. Department of Transportation (DOT). The future of V2I could lead to better driver-assistance systems such as smart parking and autonomous driving vehicles, which could enhance future city planning of traffic lanes, parking lots and more.

Find the right solution for your business with our free Fleet Management Buyer’s Guide.

#### Vehicle-to-Everything (V2X)

_Vehicle-to-Everything (V2X)_ encompasses both V2V and V2I technology. V2X technology makes every automobile on the road smarter and safer by giving them the power to “communicate” with the traffic system, including other cars and infrastructure. V2X can notify drivers of dangerous weather conditions, accidents and traffic congestion nearby, and other dangerous behaviors happening in close range. V2X provides a lot of the information we have available to us as humans directly to the car or truck, reducing the reaction time it takes for the driver to respond. V2X also makes the driving process easier by automating payments for tolls and parking.

V2X communication is the future of autonomous driving, but the V2X market still has a long way to come. Similarly to V2I and V2V technology, V2X will be most effective when every truck, bus, car, motorcycle, and even bicycle, comes standard with this connected vehicle technology.

### How LiDAR/RADAR work

#### RADAR (Radio Detection and Ranging)

A RADAR emits radio waves to detect objects within a range of several meters (~150). Radars have been in our cars for years to detect vehicles in blind spots and to avoid collisions.

Unlike other sensors that calculate the difference in position between two measurements, the radar uses the Doppler effect by measuring the change in the next wave frequency if the vehicle moves towards us or moves away. This is called radial velocity.

The radar can directly estimate a speed.

show better results on moving objects than on static objects.

It has a low resolution, it allows to know the position and speed of a detected object. On the other hand, it will struggle to determine "what" is the object being sensed.

#### LiDAR (Light Detection and Ranging)

The LiDAR uses infrared sensors to determine the distance to an object. A rotating system makes it possible to send waves and to measure the time taken for this wave to come back to it. This makes it possible to generate a points cloud of the environment around the sensor. It can generate about 2 million points per second. A point cloud giving different 3D shapes, it is possible to make the classification of objects thanks to a Lidar

It has a good range ($100$ to $300$ m), and can accurately estimate the position of objects around it. Itssize is however cumbersome, and it can be seen as some people as a crutch. Not mentioned, its price (1,000-50,000$) has been for years very high, andstill remains farabovethan the average price of a camera ($500\$$) or a RADAR ($300\$\$).

### Holonomic

Holonomic vs. non-holonomic refers to a robots ability to **directly move towards a target** vs. having to **re-position itself** before moving directly to a target. An example of this is a car in a parking lot. If you have a car parked in a parking spot and wanted to move it to the spot next to it, you would need to back out of your spot then pull into the next one. Because you cannot slide the car directly into the spot next to you (or really directly into any other spot), it is considered non-holonomic.

The best way to do a qualitative check on holonomy vs. non-holonomy is if you look at a robot in its operating space, can you pick any two positions not blocked by an obstacle where the robot will need to reposition itself before directly moving to its goal position.

Holonomic vehicle: can independently control all degrees of freedom of motion.

### Holonomic vs. Non-holonomic constraints

Holonomic constraints are constraints on the **configuration**, and they **reduce the space** of the configurations and thus the **degrees of freedom**.

Nonholonomic constraints are constraints on the **velocity**, and they do **not reduce the space** of configurations.

### ROS

```text
rospack = ros + pack(age)
roscd = ros + cd
rosls = ros + ls
```

- `roscore = ros+core` : master (provides name service for ROS) + rosout (stdout/stderr) + parameter server (parameter server will be introduced later)
- `rosnode = ros+node` : ROS tool to get information about a node.
- `rosrun = ros+run` : runs a node from a given package.

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

## 3 - Robinos 1

### Motivation

Similar to the motivation provided for ROS, developing self-driving vehicles requires a huge software stack. Over the recent years multiple frameworks have been developed that aim to simplify AD development or provide full AD functionality.

Look at the related frameworks, considering their differences and their approaches.

Robinos aims to achieve a scalable systems architecture that covers all driver assistance functions and integrates them into one fully automated system.

Take a closer look at the Robinos specification, followed by an implementation example. The open interface specification describes a functional architecture to address the AD problem. It gives an initial overview on how to structure functionally necessary parts and aims to be a starting point for collaboration work.

Exemplary approach – other approaches are possible and available, feel free to check them out (Apollo, Autoware, proprietary solutions).

Goal: familiarize you with typical ADAS/AD components.

### Introduction

Base assumption today’s driver assistance systems are – due to factors such as costs, scalability for various vehicle market segments and the space in the vehicle itself - often divided into "_packages_", which only **carry out their assigned task**

Individual functions are independent of one another, which simplifies both selling separate units to the customer (_combinatorial optimization_) and employing various suppliers (_vendor optimization_)

Besides **economic benefits**, the goal is to make it possible to **test individual functions independently** of each other.

If individual systems can carry out their functions more or less independently and only serve to assist the driver, they can often **function indepdently**.

Autonomous driving, however, often requires **connections** between this individual systems.

### Combine Potentially Conflicting ADAS Modules

The figure bellow illustrates the coordination of two control units with a motion management module to ensure conflict free function. The use of modules made by various suppliers, as is usually the case, often complicates the process further.

To manage this complexity, a trend in the automotive industry is to develop CPUs for one particular activity (e.g. driver assistance). Sensor data is processed by a CPU and made available to the functions to achieve **separation** of hardware and software.

### Robinos Complexity Reduction Principles

The Robinos specification promotes three guiding design principles to manage related software complexities.

- **Abstraction**: When a software component has to respond to requests from too many other modules, a coordinator module can be helpful. Compare the previous “motion management” example that controls the access to the motor and brake control unit, receiving acceleration or braking orders from the driver assistance systems, and coordinating which orders are to be carried out and how (for example through brakes applied to the wheels or by using the engine brake) according to its own internal logic. Complexity reduction is achieved by removing the need for coordinator modules for engine and brakes and providing one coordinated communication channel between functions and actuators.
- **Polymorphism**: Software components that carry out similar functions should communicate with the outside world via the same interface. (Example: given a base class shape, define different area methods for any number of derived classes, such as circles, rectangles and triangles. No matter what shape an object is, applying the area method to it will return the correct results.)
- **Standardization**: During supply chain setup, OEMs can reference standards to improve the level of understanding between the seller and the buyer of a software module. Functions and modules of various manufacturers can simply be exchanged, which reduces development costs and risks. Similarly, with standardized interfaces, software modules can be sold to several OEMs. Test and tool suppliers can concentrate on the core software development instead of individual interface adaptations. Examples for automotive software standards are AUTOSAR, ADASIS and SENSORIS for cloud-based map enrichment.

### Robinos Data Types

All data elements provided in SI units, unless otherwise specified.

#### Position

1D, 2D, 3D

- Measurement
- Standard Deviation
- Is Valid

#### Time

_Absolute_ time defined in microseconds, according to UTC, starting at January 01, 1970, as a 64-bit signed integer. Communication to the **outside** of the vehicle (v2i & GPS), uses absolute time.

_Relative_ time used for vehicle **internal communication** and **improved precision**. Counting time only in milliseconds is insufficient for **high-dynamic** situations as the base of **fusion** and **control** systems as it introduces an error in the range of several centimeters (A vehicle moving at 200km/h moves ca. 6cm/ms).

### Coordinate Systems

Multiple coordinate systems are used to describe the relations between the world, the ego-car, vehicle components, other traffic participants, obstacles, hazards, goals.

#### Geographic Coordinate System (GCS)

_Geographic coordinates_ describe a position on the Earth’s surface. Robinos refers to two standards, the Universal Transverse Mercator (UTM) as well as the World Geodetic (大地测量学的) System 1984 (WGS84).

- Position
- Zone ID

#### Local coordinate system (LCS)

_Local coordinate system_ is an arbitrarily set Cartesian coordinate system. It defines the origin for the spatial relative described motion of the vehicle and other parts of the environmental model. It can be described in the geographic coordinate system (GCS) in order to link the cars movement globally. The relation between GCS and LCS can change over time, if a reset of the LCS is necessary. A local area is defined as a square area around the local coordinate system origin and covers an area of interest for the car. The size of the area is defined by giving a maximal distance to the center. This distance is used to build the surface of the area.

- Example for an area of interest for a vehicle: A **parking area** inside which a free parking spot is to be found.

#### Construction Coordinate System

_Construction Coordinate System_ is the base to describe all parts of a car. It varies between brands and platforms and is most likely not linked to a specific part of the vehicle. It was set at the beginning of construction (of a much older version) of the car and is needed for calibrating and as common origin for every sensor. Furthermore the sensor as well as the vehicle coordinate system can be described in this system in order to respect production as well as fusion aspects.

#### Vehicle Coordinate System

_Vehicle Coordinate System_ is used to describe the environment of a car in respect to itself. The origin is located on the road surface close to the middle of the rear axis. In automotive applications, the x-axis points in the primary direction of motion and the z-axis points to the sky. The _yaw_, _pitch_ and _roll_ axis describe the orientation of the chassis. All detected objects, lanes, etc. from the sensors are transformed to vehicle coordinates to be comparable.

x axis: **roll**, longtitudinal
y axis: **pitch**, lateral
z axis: **yaw**, vertical

- Each sensor uses a specific sensor coordinate system. Depending on the sensor, the delivered data can be 3D point clouds, 2 images, depth images.
- As the system assumes that detected objects are relative to the sensor, extrinsic parameters (position and orientation according to the vehicle they are mounted on) of the sensor shall be known. This allows transformation to vehicle or other coordinates.
- Sensor calibration is typically necessary for autonomous driving and can be performed during production or at runtime.
- Sensor calibration parameters can change during vehicle life time. Therefore monitoring systems or autocalibration can be required.

#### Anchor Coordinte System

_Anchor Coordinate System_ is a discrete Cartesian coordinate system to the origin of a grid. It is arbitrarily set in either a georeferenced or locally referenced coordinate system.

### Robinos Architecture

Robinos architecture features a data flow from sensors to actuators with five core blocks and in-between abstraction layers: _Sensor Data Fusion_, _Situative Behavior Arbitration_, _Motion Management_, _HMI Management_, _Safety Management_.

Data flow from sensors to actuators Compare Perception, Cognition, Action

_Functional architecture_: architectural model that identifies functions, interactions and corresponding IT needs. It defines how the functions will work together to achieve the system’s mission. Generally, more than one architecture can satisfy the requirements. Usually each architecture and its set of associated allocated requirements have different cost, schedule, performance, and risk implications.

The _specification_ aims to be **OS and hardware-independent**.  
**decentralized** vs a **centralized** high-performance computer (HPC)

_Electronic Stability Control_ (ESC) also referred to as _electronic stability program_ (ESP) or dynamic stability control (DSC), detects and reduces loss of traction.

- Automatically applies brakes to individual wheels help "steer" the vehicle where the driver intends to go.
- Some ESC systems also reduce engine power until control is regained.

_Vehicle Abstraction_ transforms **individual sensor interfaces** into the **open robinos specification**, including simple transformations, such as converting acceleration (g) to (m/s²) and type clustering abstractions.

- _Interoceptive sensors_: Sensors on or in the car **perceiving the ego-car state** and its interior. Examples: gyros, accelerometers, steering angle sensors, wiper activity sensors, turn indicators, driver monitoring.
- _Exteroceptive sensors_: Sensors on or in the car perceiving the vehicle’s **surroundings**. Examples: Radars, lasers, ultrasonic sensors, cameras.
- _Meta sensors_: Often a source of data derived from **measurements of other entities or sensor types**. Examples: cloud data, navigation maps, Car2X.

In general sensors are often clustered according to their physical detection principles, characteristics and output properties in order to understand the value and the limitations of the measurements they provide.

### Sensor Specification

All sensors are specified by providing their position, orientation and a unique ID.

Mixing up sensors has happened to people in practice. Make sure to check correct connections and IDs.

### Interoceptive Sensor

The _interoceptive_ sensors are used to measure the **dynamic state vector** of the vehicle, and the states of the car components.

Depending on the autonomy degree of the ego-car, or the proficiency of the function further information, such as driver attentiveness and state are important.

### Exteroceptive Sensor

Robinos provides multiple methods for processing exteroceptive measurement data:

- **Scan** based approach, working with individual data points
- **Object list** approach, deriving objects, such as vehicles from measurement data and estimating their states

The open robinos specification expected intelligent sensors provided basic specifications as a starting point for extensive capabilities of exteroceptive sensors.

Intelligent vs non-compressing sensors is an ongoing debate with significant consequences for architecture designs. _Intelligent_ sensors measure, process and interpret data in order to provide **information rather than data**, whereas _non-compressing_ sensors provide **raw measurement data** as recorded in optimized quality.

The _Robinos abstraction_ assumes that each sensor is intended to describe measurements in _spatial_ relation to its _mounting_ position.

Therefore, the _scan point_ itself is an abstract data representing this spatial relation. Every scan point carries further attributes that **vary** based on the **sensor type**.

Sensor Data _Fusion_ estimates an environmental model as well as a model of the car´s states and capabilities based on measurement data.

The Sensor Data Fusion block in Robinos includes the following modules with their corresponding responsibilities:

- Positioning (dynamic states of the car as well as its position in global and local coordinate systems)

  - Vehicle position
  - Vehicle dynamics

- Object Fusion

  - Objects in the environment
  - Convoy tracks

- Grid Fusion

  - Occupancy grid

- Road and lane fusion

  - Roads and lanes

- Vehicle database

## 4 - Robinos 2

### Multi-Sensor Data Fusion (MSDF)

Background: sensor measurements are never perfect, subject to false positives and false negatives

- False positives: An object is detected by the sensors, but not present in reality
- False negatives: An object is not detected by the sensors, but present in reality

Bright light creates gap in floor detection. The effect is reduced with polarizers mounted to stereo imagers.

MSDF tries to provide the **best estimate of the truth** based on the given sensor measurements, sensor models and context. Both **modelled** and **learned** approaches exist and have their own merits.

Real-time capable deep learning based end-to-end tracking approaches are still relatively recent and are improving in performance.

_Object fusion_ can be understood to mean that the **output** of the fusion system are **objects**, such as vehicles with the previously described properties, whereas _grid fusion_ could be understood to mean that the **output** of the fusion is a **grid map**, for example an obstacle grid map, showing which cells around the vehicle are occupied.

Examples for common **objects**, easily described with 2D or 3D **bounding boxes**: vehicles, pedestrians, cyclists, or road signs ...

Typically **not** described as **objects**, because they aren’t well suited for bounding boxes: roadside boundaries or curbs ...

### Object Tracking

Besides estimating object properties from one or multiple frames, another common challenge is **tracking an object from frame to frame**, typically associating the detected object with a **unique tracking ID**, which should not change from frame to frame.

In Robinos, the object detection is supposed to set a Boolean “new object” for the new object when it is detected.

### Object Classification

Detected objects are classified, which provides important input for the tracking modules. Examples for classes as provided before: vehicles, pedestrians, cyclists, or road signs ...

Depending on the **classification** the different motion models are used to **predict object motion**. In uncertain cases, multiple object **hypothesis** can be **generated** and later **falsified** based on further observations.

### Occupancy Grip Map

Instead of detecting objects, or as a complementary method, sensor measurements can be converted into occupancy gridmaps.

A _gridmap_ can be imagined like a **matrix of rectangular cells surrounding the ego car**. Gridmap cells can be filled with all kinds of **semantic information**.

Occupancy grid maps set the state of a cell to _occupied_, _unoccupied_ or sometimes _unknown_, depending on detections beams crossing the cell location with or without detection or not crossing them at all.

### Road & Lane Fusion

**Road** and **lane** detection is similarly flawed, as **object** detection, requiring a fusion process as well.

It is common to use **lane models** and match them with the detections. Often **high resolution maps** are used as a base for the process.

_Hiearchical multi-hypothesis_ approaches are common. Below are some robinos approaches:

- Top-level road network topology
- Top-level road network geometry
- Low level road network topology
- Low level road network geometry

### Situative Behavior Arbitration

The outputs of the **detection** and **fusion** modules are provided to the **decision making** modules.

As we have seen before, different robot function could have **conflicting interests**. A variety of architecture approaches to harmonize the decision making process exist.

Robinos promotes a situative behavior arbitration _process_:

- Perform situation _analysis_
- _Compute_ desired path or action
- _Decide_ which path or action to execute based on the situation analysis

The Robinos approach is based on the following design principles

- Function beavhior _decomposition_:

  - Distinguish between customer functions and elementary behaviors.
  - Example: Level 2 lane keeping adaptive cruise control is split into the two elementary behaviors “keep distance from leading vehicle” and “center in own lane”.

- _Distribution_ of interpretation: Situation analysis is provided by the function itself, because the function itself might not be available during architecture design.

- _Centralization_ of decision: similar to a plugin container, the situative behavior arbitration module decides which of the available behaviors is ultimately executed.

Situative behavior arbitration block, which can be thought of as a "_plugin container_" for the behavior (or function) modules and decides execution based on the following **factors**:

- _Applicability_: The ability of the function to operate, expressed in percent. E.g. a lane change assist that sees clear lane markings, road side boundaries, and convoy tracks, and an empty left lane, might set this to 100%; if it only sees convoy tracks and lane markings are unclear (e.g. in a construction site), it might set this to 30%; if the left lane is occupied, it will always set this to 0%.
- _Desire_: The desire of the function to operate, in percent. E.g. an adaptive cruise control function set to 130km/h on an empty highway might set this to 100%; if it finds itself behind a truck going 80km/h it might set this to 50%.
- _Risk_: A scalar, expressed in percent, giving an assessment of the risk involved when performing the behavior. A lane changing assistant that sees a perfectly clear left lane might set this to 20% (since visibility from the ego vehicle will always be obstructed), one that sees a slowly-approaching vehicle to the rear in the left lane might set this to 50%, one that sees a vehicle arriving with high difference velocity might set it to 90%.
- _Comfort_: A scalar, expressed in percent, giving an assessment of the comfort to the driver that performing a certain motion will entail; expected high lateral or longitudinal acceleration or deceleration will result in a low comfort level, gentle motions in a high one.

### Motion Management

The Motion Management provides **abstraction between behaviors and actuators** and **selects the actuator set** needed to create the desired changes in the vehicle´s dynamics.

With i.e. **trajectories** as input, describing the desired future motion in terms of pose, speed, timing etc. and together with the actuator abstraction converts it into changes in yaw rate over time is introduced by steering the front wheels, steering the back wheels, torque vectoring, single wheel braking, or a combination of these.

As a result, the behavior planning and the Safety Management of fallback layers become less complex.

### Human Machine Interface (HMI) & Safety Management

The HMI management provides the abstraction for the increasing amount of display options, such as dashboards, head-up displays, augmented reality etc.

The importance of the connection between HMI and autonomy becomes immediately clear when the following question is considered:

- If the autonomous vehicle would reach the limits of its capability in a given scenario and need to **return controls to the human driver** in order for the human to take over and safely manage the situation, **how much time** is needed for the human to take over?
- The answer to this question has direct impact on the requirements for the autonomous vehicle, for example how long does it need to able to run safely on its own in a situation in which its limitations are exceeded? Good HMI can accelerate processes like this.

The Safey Management in robinos performs two key functions:

- Perform **plausibility checks on data transferred** between the modules in the functional architecture
- Collect all plausibility check results and **derive suitable strategies** in terms of safety and error handling

### Positioning on a Global Map

- Relative Positioning
  - Integrating odometry (small movements)
  - Orientation and motor encoder
  - Extended single-track-model
- Absolute Positioning
  - Markers at known positions
  - Least squares mapping between relative and absolute positions

### Grid Fusion

- Grid (matrix) cells

  - Absolute positions / areas (1 $cm^{2}$)
  - Values 0 $\rightarrow$ 255 (single byte)

- Probabilistic interpretation

  - Three states: free, unknown, occupied
  - Inverse sensor models
  - Exponential averaging update function

- Behavior planners:
  - Lane following
  - Emergency Stop
  - Parking
- Plan independently
- Desire value for speed and steering
- Highest priority is selected

### Paths

- Crossings generate turning paths
- Path points contain additional information
  - Speed restrictions
  - Light / indicator settings
  - Traffic rules, areas to check
- Path following:
  - **Point** based, **no trajectory** planning
  - Based on single-track model

Behavior planners

- Vehicles path is predicted
- Path is enlarged to car’s dimension $\rightarrow$ described by polygon

Speed, desire vs. distance

- Polygon is evaluated in grid fusion $\rightarrow$ Distance to closest obstacle
- Distance depended speed request closer object $\rightarrow$ lower speed, higher desire

Problems:

- Sharp Angle Blind Spot: No detection from ultrasonic sensors.
- Deadlock situation: Increased occurrence due to complex car interaction

Solution:  
Improve physical sensor-set & Algorithms or use Car2X (60GHz)

## 5 - Path Planning 1

### Planning tasks for autonomous vehicles

Basic task:

- Find path from a configuration $A$ to a configuration $B$
- Respect all imposed constraints. For example: nonholonomic constraints, continuous curvature, obstacles ...

Parking

- Maximum use of available space (minimal distance)
- Typically not time critical

Unstructured environments

- Example parking lot without predefined paths
- Large search space of possible paths
- Mostly high distance to obstacles, but optimal path can lead through bottlenecks

Highway

- High speed
- Safety critical
- Different maneuvers

  - Lane switch
  - Following a car
  - Driving constant speed

Route Planning:

- Road abstraction
- Connecting Maneuvers:
  - Get from parking lot to driving lane

Driving in dense traffic

- In dense traffic interaction and collaboration is unavoidable
- Uncertainty about how other vehicles will react
- Actions of vehicle influences behavior of others

Goal: Find the **best strategy** to **efficiently** drive in **uncertain** and **interactive** scenarios

Combination of **deep learning** and **classical planning** methods likely

### Modelling a mobile robot system

Define which variables describe the **state** of the robot. For example:

- $x, y$: Position of the robot
- $\theta$: Orientation of the robot

Define the **possible continuous transitions** and the **possible inputs** of the robot system. For example:

- $\dot{x} = u_x$
- $\dot{y} = u_y$
- $\dot{\theta} = u_{\theta}$

_Holonomic system_: a robot that can be **steered in any direction**

_Holonomic constraints_:

- constraints limit the **possible state transitions**, can be written **w/o using derivatives**, any reachable configuration can be reached by a simple motion \rightarrow\$ robot can directly drive to a goal configurations
- examples for a holonomic constraint:
  - robot can't leave the **arena**: $0 \le x \le 10 \wedge 0 \le y \le 10$
  - robot can't leave the **surface of sphere**: $x_{1}^2 + x_{2}^2 + x_{3}^2 = 1$

_Nonholonomic system_: can reach states w/ a combination of motions but not thru simple motions

_Nonholonomic constraints_:

- nonholonomic constraints may depend on the **derivatives** of state variables, cannot be integrated to a representation w/o derivatives
  - a wheel may only move in one direction: $\dot{y} = \sin(\theta), \dot{x} = \cos(\theta), \dot{\theta} = u$

### Single Track Model

A single track model allows a physically plausible description of the driving behavior of vehicles without major modeling and parameterization effort.

A good approximation for low speed scenarios like parking.

Configuration: $(x, y, \theta)$

- $x, y$: _center_ of the rear axle
- $\theta$: _orientation_ of the car

_Turning radius_ $\rho$ depends on _steering angle_ $\phi$ and the _distance_ between front and rear axle $L$:  
$\rho = \frac{L}{\tan(\phi)}$

For a small $\Delta t$ the car moves approximately in the direction the rear wheels are pointing:

$$\frac{dy}{dx} = \tan(\theta)$$
$$\frac{\dot{y}}{\dot{x}} = \frac{\sin(\theta)}{\cos(\theta)}$$

possible solution:

$$\dot{x} = v \cdot \cos(\theta)$$
$$\dot{y} = v \cdot \sin(\theta)$$

where $v$ is the velocity of the car.

The orientation changes according to the circle segment covered

- distance travelled by the car: $w$
- turning radius: $\rho = \frac{L}{\tan(\phi)}$
- $dw = \rho \, d\theta$
- $d\theta = \frac{dw}{\rho} = \frac{\tan(\phi)}{L} \, dw$
- $\frac{d\theta}{dt} = \frac{tan(\phi)}{L} \frac{dw}{dt}$
- $\dot{\theta} = \frac{\tan(\phi)}{L} v$

Simple single track model:

$$\begin{bmatrix}\dot{x}\\ \dot{y} \\ \dot{\theta} \end{bmatrix} = \begin{bmatrix} u_v \cdot \cos(\theta) \\ u_v \cdot \sin(\theta) \\ u_v \cdot \tan(\frac{u_{\phi}}{L}) \end{bmatrix}$$

$u_v$ and $u_{\phi}$ are the action variables

This simple model can be studied numerically, using the approximation: $\vec{x_{i+1}} = t_{step} \cdot \dot{\vec{x_i}}$

Specific use cases require more or less complex models for sufficient accuracy.

Extend the single track model:

- instead of the **velocity** we control the **acceleration**
- Instead of the steering angle, we control the change of the steering angle

$$\begin{bmatrix}\dot{x}\\ \dot{y} \\ \dot{\theta} \\ \dot{\phi} \\ \dot{v} \end{bmatrix} = \begin{bmatrix} v \cdot \cos(\theta) \\ v \cdot \sin(\theta) \\ v \cdot \tan(\frac{\phi}{L}) \\ u_{\phi} \\ u_{\alpha} \end{bmatrix}$$

additional dynamic information

- Additional states: yaw rate $r$, slip angle $\beta$
- Additional parameters: mass $m$, inertial torque $J$

For _planning_ and _controlling_, it should be possible to **measure all state variables** of the model using **sensors** available in the car.

For _simulation_ purposes it can be reasonable to include additional state variables.

Complex models for medium to high velocities, can include further complex effects.

Important is the selection of a **suitable model** for the specifics tasks.

Many vehicle driving processes can be modelled precisely.

For situations with **higher uncertainties**, or a need for much **more detailed models**, _learning based_, probabilistic approaches can realize further value for the trade-offs in required data aquisition, training and generalization.

### Small Time Local Controllability

def: if a neighborhood of that point can be reached in small time

- A wheel can only rotate and move in the direction it is pointing
- However, using a combination of motions it can move sideways
- These motions can be arbitrarily short

### Dubins Car

For the Dubins Car, the action variable $u_v$ is restricted to $u_v = 1$

- The car can **only drive forward** with a **constant speed**
- Only $u_{\phi}$ can be **changed**

Task: find the shortest path from an initial configuration $q_{I} = (x_l, y_l, \theta_l)$ to a goal configuration $q_G = (x_G, y_G, \theta_G)$

- The shortest path uses only $u_{\theta} = \{-\theta_{max}; 0; \theta_{max}\}$, has only 3 primitive motions: L(turn left), R(turn right), S(straight)

A combination of primitive motions is called _word_

The shortest path can be expressed by one of the following **6 words**: $\{LRL; RLR; LSL; LSR; RSL; RSR\}$

### Reeds and Shepp

The _Reeds and Shepp_ car model may additionally **drive backward**: $u_v \in \{-1; 1\}$

The optimal path is one of 48 different words of primitive motions

Disadvantages of Reeds and Shepp curves:

- **Discontinuous** curvature
- Small position changes can lead to **large differences** concerning path length
  - Such position changes can be the result of **sensor and actuator inaccuracies**
  - It might be better to accept **longer paths** in order to **avoid discontinuities**

### Distance Metrics

Several planning tasks require measuring the distance of two configurations

- Decide, which path is shorter/better
- Estimate the remaining distance between two configurations

Example:

- Manhatten Distance: Sum of distances for each dimension
- Euclidean Distance
- Continuous Curvative Distance
- Reeds-Shepp Distance

### Cost Functions

Finding an optimal path requires to define optimality

A _cost function_ **maps** a **path** or a part of a path to a usually **scalar** cost value

Different cost functions can be combined to a common cost function

Possible cost functions:

- Distance metrics
- Amount of steering necessary
- Change of direction
- Integral of longitudinal or lateral acceleration
- Distance to obstacles

### Coordinate Systems

Coordinate frames should be **right hand**

Information can be given in different coordinate systems

- _Planning_ is usually done in a **stationary** coordinate frame
- _Environment_ information is often available in a **car centered** coordinate frame

We need to _transform information_ from one coordinate frame to another

Rotation Matrix $A$:

$$\begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} \cos(\theta) & -\sin(\theta) \\ \sin(\theta) & \cos(\theta) \end{bmatrix} \cdot \begin{bmatrix} x \\ y \end{bmatrix}$$

Affine transformation, rotate by $\theta$ translate by $\vec{t}$:

$$\vec{x'} = R_{\theta} \cdot \vec{x} + \vec{t}$$

Homogeneous coordinates:

$$\vec{x_h} = \begin{bmatrix} \vec{x} \\ 1 \end{bmatrix}$$

Affine Transformation Matrix:

$$T = \begin{bmatrix} R & \vec{t} \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} \cos(\theta) & -\sin(\theta) & t_1 \\ \sin(\theta) & \cos(\theta) & t_2 \\ 0 & 0 & 1 \end{bmatrix}$$

Multiplication of the transformation matrix shows that the effect equals a rotation plus a translation:

$$\vec{x'_h} = T \cdot \vec{x_h} = \begin{bmatrix} \cos(\theta) & -\sin(\theta) & t_1 \\ \sin(\theta) & \cos(\theta) & t_2 \\ 0 & 0 & 1 \end{bmatrix} \cdot \begin{bmatrix} x \\ y \\ 1 \end{bmatrix} = \begin{bmatrix} \cos(\theta) \cdot x - \sin(\theta) \cdot y + t_1 \\ \sin(\theta) \cdot x + \cos(\theta) \cdot y + t_2 \\ 1 \end{bmatrix}$$

Multiple Affine Transformations can be chained: $\vec{x'_h} = T_1 \cdot T_2 \cdot \vec{x_h}$

For example: Transform from a coordinate system given relative to the car to the world coordinate system

### Collision Checking

Possible tasks:

- Check, whether a robot in a configuration $q$ intersects with an obstacle
- Find the distance from a robot in a configuration $q$ to the closest obstacle

The obstacles and the robot can for example be represented as

- Geometric primitives such as _polygons_ or _circles_
- _Environment_ is given as **a list of separate objects**
- Each _object_ can be represented as a **polygon**
- a _grip map_

### Configuration Space

The _configuration space_ contains **all possible configurations** of the robot

**Obstacles** can be represented in the configuration space

Here constructed with _Minkowski Sum_: $A + B = \{a + b \, | \, a \in A, b \in B \}$

Example: Configuration space of a holonomic robot that can move in $x$ and $y$ direction

Collision check between the robot and the obstacles equals check, if configuration space is occupied at a configuration

The configuration space becomes more complex when adding $\theta$ as a third dimension

Path planning includes exploring the configuration space

### Bounding Regions

_Bounding regions_ can **speed up collision checks** by **reducing the number of edges** that have to be compared

1. Check if the **bounding regions collide**
2. If the bounding regions collide, check if the **polygon collides**

Bounding regions should allow fast collision checking

Examples of bounding regions: Bounding Sphere, Axis-aligned bounding box (AABB), Oriented bounding box (OBB), Convex hull

#### Hierarchical Methods

A bounding region can contain several child bounding regions

Resulting Algorithm:

1. Check if root bounding regions collide
2. If yes, replace one bounding region with its child bounding regions and repeat step 1 for each resulting pair until only leaf bounding regions remain
3. Check the actual polygons for collision

#### Separating Axis Theorem

Method for testing collision check between two convex polygons:

Two convex polygons collide if there is no Line separating them

- Iterate over all edges
- For each edge, consider an axis that is orthogonal to the edge
- Project the polygons to this axis and check whether the intervals overlap
- If the intervals do not overlap, the axis is called _separating axis_ and any line between the two polygons is called _separating line_

Separating Axis Theorem is not applicable for _concave polygons_ ➢ Test a **convex decomposition** or **check each edge of both polygons for collision**

The red line indicates a possible convex decomposition of polygon $A$ into polygons $A1$ and $A2$

#### Grid based methods

Instead of polygons, the robot and its environment can be represented as a grid map

Collision checking can be performed by checking if the Minkowski Sum contains the robot position

Problem: Different Minkowski sum for each orientation of the robot

## 6 - Path Planning 2

Motion planning

### Problem Definitions

#### Path, Trajectory and Motion

Path

- The geometric form of a motion from start to goal
- A list of poses

Motion

- The movement along the path regarding the physical laws
- A list of control inputs

Trajectory

- The result of a motion
- A list of poses with timestamps

#### Motion Planning Problem

Given:

- Configuration space
- Constraints: obstacles, kinematics
- Start and goal

Find:

- Path
- Motion
- Trajectory

#### Correct, Optimal and Complete

Correct

- All the path internal configurations are _valid_ (**collision-free**)
- The motion between the configurations are _executable_

Optimal

- _Time_ or distance
- _Safety_: low risk
- _Comfort_: smooth
- _Eco_: energy consumption

Complete (decision + find)

- _Decide_ whether a solution exists in a **finite** amount of time
- If a solution exists, _return_ one solution in **finite** time

### Planning Methods

#### Combinatorial Methods

##### General Ideas

Directly solve the path planning problem based on the **geometry** of the configuration space

The motion is calculated regarding an **explicit motion metric**

##### Visibility Map

Build a roadmap based on _a set of (sampled) points_, whose _fields of view_ cover the _whole configuration space_

##### Space Decomposition

Build a roadmap based on the space decomposition

Trapezoidal  
Cylindrical

Voronoi: Decompose the configuration space with a set of objects ${p_n}$.  
Each object $p_k$ has a region $R_k$, where all points are closer to this object than the others.

$$R_k = \{x \, | \, d(x, p_k) \le d(x, p_i), i \ne k \}$$

more/less points sampled $\rightarrow$ finer/coarser decomposition

##### Summary

- Complete
- Geometric representation of the configuration space is important
- Easily applicable for motion planning with holonomic constraints

#### Behavior-based Method

##### General Ideas

A _reactive motion_ strategy for the whole configuration space

The complex behavior is a reflex of the sophisticated environment with simple sensing-acting schema and a few internal states

##### Artificial Potential Fields

Conservative force and potential field

- The work is independent of the path (conservative)
- Superposition of potential fields by sum

summed by _attractive_ and _repulsive_ potential fields:

$$U(x) = U_a(x) + U_r(x)$$

Gradient Descent, Local Minima

combine with space decomposition

combination with simple behaviors

##### Summary

- _Simple motion strategies_ for the whole configuration space
- A _global guidance_ is required to **escape the local minima**
- _Efficient_ for **local motions**

#### Random Sampling Methods

##### General Ideas

- Explore the configuration space with _random samples_
- _Create a graph_ in the configuration space which **connects the start and goal**

##### Probabilistic Roadmaps

Idea

- Select a random valid configuration $q$
- Find the nearest neighbors $N_q$
- Connect $q$ with $N_q$

Note

- Explicit motion metric is required to connect the configurations
- Can be used as a global strategy, and employ other planning methods for the local connection
- The map can be reused for multiple queries

##### Rapid-exploring Random Trees (RRT)

Idea

- Select a random configuration $q$
- Find the nearest neighbor $q_n$
- Create a new configuration from $q_n$ to $q$

Note

- The tree starts from the initial configuration and grows with **bias** to the **goal configuration**
- Does **not require explicit motion metric** of the configuration space
- Can apply the forwards kinematics/dynamics of **nonholonomic** vehicles

Weak completeness

- Resolution complete: if no solution exists, the algorithm will run forever
- Probabilistically complete: with infinite samples, the probability of finding an existing solution converges to one

##### RRT\*

Incremental planning for an optimal solution

Not connect nearest point to the new point, but fix the previous path

##### Summary

- Generic motion planning methods
- Resolution and probabilistically **complete**
- **Randomness** of the results
- **Inefficient** with certain constraints: **narrow passage**
- Nearest neighbor search is **time consuming**

### Search Methods

BFS: Explore all the neighbors in one level, then continue with the next level  
DFS: Explore as far as possible along each branch  
Best-first Search (Greedy Search): Explore the most promising node according to a specified rule(e.g., distance)

#### Heuristic Search (A\* Search)

Heuristic cost $h$: the estimated cost to reach the goal  
Actual cost $g$: the sum of the edge weight from the start node  
Total cost $f$: the sum of heuristic cost and actual cost $f = h + g$

Explore the node with the minimum total cost

_Open Set_: the frontier of the exploration  
_Closed Set_: the internal of the exploration area

_Admissible_ condition:

- The heuristic estimation is always **optimistic** (not conservative)
- `heuristic_cost(q, goal)` $\le$ `actual_cost(q, goal)`
- $A\*$ is optimally efficient when the heuristic is admissible, i.e., takes the minimum number of nodes to find the result

_Monotone_ condition (consistent):

- `heuristic_cost(x)` $\le$ `actual_cost(x, y) + heuristic_cost(y)`
- Each node only needs to be evaluated once

- Finding the best heuristic is as difficult as the search problem itself
- How to create a heuristic
  - Relax one or several constraints in the problem
  - e.g., ignore the obstacles, ignore the kinematics constraints
- How to combine multiple heuristics
  - Example: $h_1, h_2 \rightarrow h = max(h_1, h_2)$

#### Search in Continuous Configuration Space

- Infinite number of states
- Grid-based discretization
- Continuous motion
- Improve the grid discretization

#### Hybrid A\* Search

Mapping a continuous configuration to a discrete grid
Primitive motion: different combinations of control inputs

Heuristics

- Actual cost (e.g., Reed Shepp)
- $h_1$: Grid-based distance with obstacles
- $h_2$: Nonholonomic distance without obstacles
- $f = g + h, h = \max(h_1, h_2)$

### Heuristic Search with Space Exploration

- Heuristic from workspace exploration result
- Search step-size adaptation

### Path Optimization

Cost function

- Efficiency: path length
- Safety: distance to obstacles
- Comfort: smoothness of the path

### Trajectory Generation

Speed profile

velocity, acceleration, jerk

### Path Planning for Autonomous Driving

Applications

- Autonomous parking
- Adaptive cruise control
- Autonomous park house

Further aspects

- Traffic rules
- Interaction with the traffic

### Deep Q Learning

Learn agent policy to provide best action to take depending on state

Executed action provides according reward to support learning

Neural Network approximates Q function

Learn agent policy to provide best action to take depending on state

Upside: Very refined models with lots of fitted parameters are possible that can express complex relations.

Downside: Explainability, Verification, Scalability, Maintenance, accuracy for simple tasks

## 7 - Fusion 1

AV technology will never be 100% error-free. Redundancy and safety monitoring are mandatory

_Receiver Operating Characteristic curve_ (ROC) represents AV challenge in one image.

_Top left_ promises 100% True Positive, 0% False Positive detection, which is wanted, but **never reached**.

Without _runtime monitoring_, AVs will not work.

### AV Sensor Sets

Automated cars require precise _self-localization_ and _localization_ of obstacles, lane markers, etc.

Different sensors are available: Laser, Radar, Camera, Ultrasonic, GPS, Rain-sensors, thermal imaging ...

_Localization_ is a critical capability for autonomous vehicles, making it possible to **pinpoint their location within centimeters inside a map**. This _high level of accuracy_ enables a self-driving car to **understand its surroundings** and establish a sense of the road and lane structures.

### Sensor Categorization

Sensor are often sorted into _active_ and _passive_ sensors

A _passive sensor_ is an instrument designed to **receive** and **measure** emissions or reflections.  
Camera, electric field sensing, acceleration measurement ...

An _active sensor_ is an instrument used for measuring signals reflected by the sensor that were reflected, refracted or scattered.  
Radar, Laser, Ultrasound, GPS ...

smart camera with car light $\rightarrow$ both

### Example for sensor challenges

Limited **angular resolution**. Certainty of object type identification decreases with distance. **Small objects** can be missed **between LIDAR beams**.

### Information Extraction - Useful Features

Location - "it's in front of me"  
Range - "it's really close"  
Range rate - "it's coming closer"  
Size - "it's really big"  
Classification - "it's a semi truck"

### Detection vs. None-detection

Often **thresholds** are used to differentiate between detection and none-detec

Search for peaks in a detected signal to separate detections from noise

Note: None-adaptive sensing thresholds regularly cause issues

- Known accidents due to mismatching **stationary** vs **non-stationary** targets
- Known issues due to **false heigth classification** (rain gutter mistaken for curb stone)

Assumptions are easily violated  
Vehicles can occur in uncommon positions and orientations, but still need to get detected.

### Sensor Physics

Signal Propagation

- Refraction
- Reflection
- Scattering
- Absorption
- Transmission
- Diffraction
- Attenuation

#### Refraction

Wave crosses from one medium into another, experiencing a change in direction, while continuing to travel through the new medium.

$$\frac{\sin(\theta_1)}{\sin(\theta_2)} = \frac{v_1}{v_2} = \frac{n_2}{n_1}$$

Change in direction of a wave, between two different media, with outgoing angle equal to the incident angle on the other side of the surfaces normal.

#### Reflection

diffuse/specular reflection  
depending on surface roughness and signal wave length

Actual reflections depend on specific scenario (dry and wet street)

#### Scattering

Radiation such as light being forced to deviate from straight path due to localized non-uniformity in propagation medium

For example because of droplets or surface roughness (scattering centers)

Zodiacal light: glow originating from scattering of sunlight due to dust located between planets

#### Absorption

Loss of energy of propagating wave while traveling through a medium

e.g. conversion into thermal energy in damping material (Ultrasound: foam; Light: carbon black) depends on depth, absorption coefficient ...

#### Attenuation

Describes all _losses in signal intensity_, including _scattering_ and _absorption_.

- Transmission: Propagating wave crosses from one medium into another and is transmitted through the medium
- Diffraction: Change of direction and intensities of waves, passing an obstacle or an aperture with size approximately the wavelength of the waves.

### AV Sensor Set Design Questions

- What do you want to measure and why?
- How do you measure it and why this way? Are their alternatives?
- How will you know if the measurement will be or was successful (metrics)? How accurate are your measurements?
- Do you have additional sensors for redundance?
- Documentation of reasoning, simulations, analysis and measurements
- Validate and verify (Do you have to correct requirements for the sensors? Do the sensors work as they are supposed to?)
- Does your approach fulfill norms for certification?

### AV Sensor Set Detection Range

_Remission_ is a measurement of diffuse reflection on surfaces, expressed as a percentage. Remission indicates the proportion of the light that is **diffusely reflected** based on the proportion that would be reflected in a **reference value**

Errors often result from false assumptions.

Example: Falsely assuming that a LIDAR beam is a “dot”.

### Weather Impact

Sensors can react very differently under certain lighting or weather conditions

#### Multi Echo Example

- Glass
- Rain drop
- Noise
- Vehicle

#### Weather impact Example Lidar Snow

Moderate snow: peak at 4m  
Heavy snow: nothing at 4m

both have some beam not returning

## 8 - Fusion 2

Exemplary scenario sensor performance impacts

measured distance of stationary objects can vary over

- time
- sensor orientation
- day or night
- surface brightness or color
- target material
- incident angle

Sensor performance limited by:

Fog/Steam and manhole cover – two sources of false positives  
Lack of camera features  
Pot holes filled with water are difficult to detect  
Smoke from traffic participants  
Water spray can limit surrounding sensor performance  
Camera blinded by sun (thermal better than visible camera)  
Optical variations (example: speed bumps)  
Fog detection distance reduction  
Snow on the ground (bicycle driver may fall to ground, traffic lights are barely visible, dirt on sensors can reduce their performance, lanes are hidden ...)  
Art as a risk  
Rare, but regularly repeating events  
Detection of overhanging objects / cliffs  
insects / dirt  
Traffic infrastructure can be fully covered by insects

_Following_ into false lanes due to loss of information  
False classification of cars, loss of lanes, challenges with following other cars  
Easy to accidentally switch lane and mess up logic

### Lidar Simulation

???

#### Lidar Range Equation

#### Transmit Pulse Modeling

#### Crossover function

#### Spatial Impulse Response Function

#### Target Reflectivity - Bidirectional Reflectance Distribution Function (BRDF)

Bidirectional Reflectance Distribution Function (BRDF; ${\displaystyle f_{\text{r}}(\omega _{\text{i}},\,\omega _{\text{r}})}$ is a function of four real variables that defines how light is reflected at an opaque surface.

_Empirical_ Model: Provide simple formulation to mimic specific kind of reflection. Low computational cost, adjustable by parameters, without consideration of physics.

_Theoretical_ Model: Accurately simulate light scattering by using physics laws.  
Complex expression. High computational effort.

_Experimental_ Model: Measure BRDF with gonioreflectometer varying light sources and sensor positions. Slow. Limited data. Limited resolution.

_Physical-based_ Reflectance Models:

- _Ideal_ reflection: light incoming from a given direction is reflected in a single direction following law of reflection.
- _Other_ models: Torrance-Sparrow BRDF Beard-Maxwell BRDF; Cook-Torrance BRDF; Kajiya BRDF; Poulin-Fournier BRDF; He-Torrance-Sillion-Greenberg BRDF…

#### Influence of rain and fog

#### HIL Hardware In the Loop Tests

Hardware-in-the-loop (HIL) simulation, is a technique that is used in the development and test of complex real-time embedded systems. It provides an **effective platform** by **adding the complexity of the plant** under control to the test platform.

### Deep Learning in Autonomous Driving

Network with units where connections do not form a cycle (no Feedback connections):  
Feedforward neural network

Different activation functions can be better for specific data  
With radial basis functions: Radial Basis Network (RBF)

With additional layers: Deep Feedforward Network / Multiplayer Perceptron (MLP)

Added depth often leads to improved performance, but higher computational cost, also impacts training difficulty.  
Need a lot of data.  
Layers often take over **hierarchical tasks** (Image detection; from low-level to high-level features).  
For complex problems (not approximations of a simple function).

Successful for speech recognition, handwriting recognition, processing of arbitrary sequences of inputs.

_Recurrent Neural Network_ (RNN): Connections between units form a directed cycle to exhibit dynamical temporal behavior. (Use last state to calculate next state)

_Gated Recurrent Unit_ (GRU): Similar to RNN, but only conditionally use last state for calculation of next state

_Long/Short-Term Memory_ (LSTM): More gates. Better insensitivity to gap length.

_Autoencoder_ (AE): Useful for Pre-Training; Reduce data to information rich nodes and reconstruct inputs. Yields good weights for feature extractor part.

_Deep Convolutional Network_ (DCN): Multiple convolutional layer

_Generative Adversarial Network_ (GAN): Noise based fake-image generator and original image – Network compares both and identifies true image.

_Deep Residual Network_ (DRN): Deep networks sometimes result in small gradients (vanishing or exploding gradient problem). Residual networks facilitate training of deep neural networks.

_Liquid State Machine_ (LSM): A Type of spiking neural network (more biologically plausible, but limited applicability at the moment). Liquid State Machine means nodes are randomly connected to each other.

Example Scenario Classification and Prediction

- Use fused sensor data as input
- Choose Data Representation Format
- Label Data
- Generate additional data (stretch…)
- Choose Network Architecture
- Evaluate Network Performance

### Multi Sensor Data Fusion (MSDF)

_def_: Data Fusion is the process for **combining data** to estimate entity states, where an entity can be any aspect of reality at any degree of abstraction

- JDL: A multi-level process dealing with the association, correlation, combination of data and information from single and multiple sources to achieve refined position, identify estimates and complete and timely assessments of situations, threats and their significance.
- Hall & Linas: data fusion techniques combine data from multiple sensors and related information from associated databases to achieve improved accuracy and more specific inferences than could be achieved by the use of a single sensor alone.

The _goal_ is to transition from **conflicting data** to **reliable information**, to obtain a **lower detection error probability** and a **higher reliability** by using **data from multiple distributed sources**.

#### Data Fusion Secrets

- There is no substitute for a good sensor
- Downstream processing cannot absolve the sins of upstream processing
- The fused answer may be worse than the best sensor
- There are no magic algorithms
- There will never be enough training data
- It is difficult to quantify the value of data fusion
- Fusion is not a static process

#### From Data to Information

Data  
$\rightarrow$ Information (who, what, when, where)  
$\rightarrow$ Knowledge (how)  
$\rightarrow$ Wisdom (why)

- Data: Raw signals, numbers, letters symbols, strings, colors…
- Information: Higher semantic value
- Earlier situation: Not enough data and not enough information
- Today: Big data and **not enough information**

Information fusion and data fusion are often employed as synonyms

- Sometimes data fusion is used for raw data (obtained directly from the sensors)
- Sometimes information fusion is employed to define already processed data

Information fusion implies a **higher semantic level** than data fusion.

Other terms associated with data fusion:

- decision fusion
- data combination
- data aggregation,
- multisensor data fusion
- sensor fusion

Data fusion techniques have been extensively employed **in multisensor environments** with the aim of **fusing** and **aggregating data from different sensors**.

These techniques can also be applied to other domains, such as text processing.

#### Hierarchical Approach to Data Fusion

- Level 0 - _Sub-Object Data Association and Estimation_: pixel/signal level data association and characterization
- Level 1 - _Object Refinement_: observation-to-track association, continuous state estimation (e.g. kinematics) and discrete state estimation (e.g. target type and ID) and prediction
- Level 2 - _Situation Refinement_: object clustering and relational analysis, to include force structure and cross force relations, communications, physical context, etc.
- Level 3 - _Significance Estimation(Threat Refinement)_: threat intent estimation, (event prediction), consequence prediction, susceptibility and vulnerability assessment
- Level 4 - _Process Refinement_: adaptive search and processing (an element of resource management)

#### Context Impact on MSDF

**Context** influences the **outcome** of situations.

Including context in MSDF approaches, can improve performance.

Context can be sorted according to JDL levels.

Further examples include using traffic speed signs to update tracker parameters (JDL level 1) or setting rules for decision support (JDL 2/3) if a lane becomes reduced to truck driving only. Or using events, such as football games to influence parameters.

#### Low Level & High Level Fusion

High Level Fusion

Level 4: Process  
Level 3: Impact  
Level 2: Situation

Low Level Fusion

Level 1: Object  
Level 0: Signal

Different JDL levels typically work on different dimensionalities. The signal level is relatively low dimensional.

Starting from level 2, the relations between entities become less and less observable, and worse understood.

Example: One car performing a lane change, trying to negotiate the maneuver with another car, what’s their mathematical relation for the fusion setup? A single object moving forward in a free space is more straight forward.

#### Bowman architecture

Bowman argued that JDL model is useful but has not helped in developing architecture for a **real system**.

Developed the concept of a **hierarchical** tree of data fusion to **divide fusion problems into nodes**.

Conceptually, each node involved the functions as a **data link**, **estimation** and **correlation**.

#### Luo and Kay Architecture

Luo and Kay suggested a structure for general data fusion based on multi-sensor integration (1988).

Data from multiple sources is combined inside fusion centres in a hierarchical manner.

Multi-sensor integration and multi-sensor fusion in four levels: **signal**, **pixel**, **feature** and **symbol**

Sensor data is transmitted to the fusion centers in hierarchical and sequential manner. Data representation levels are increased the raw data to the decision level.

#### Durant-Whyte

Durrant-Whyte architecture for robotic systems (1988).

Main characteristic of this model is the use of a **common presentation format**.

Data obtained from the sensors is converted to this format by a **combination of high level** models.

#### Pau Architecture

#### LASS Architecture

### Classify Data Fusion Methods

Data fusion methods can be classified according to multiple criteria:

_relations between the input data sources_, as proposed by Durrant-Whyte  
(a) complementary, (b) redundant, or (3) cooperative data

_input/output data types and their nature_, as proposed by Dasarathy

_abstraction level_ of the employed data:  
(a) raw measurement, (b) signals, and (c) characteristics or decisions

based on the _different data fusion levels_ defined by the JDL

Depending on the _architecture type_  
(a) centralized, (b) decentralized, or (c) distributed

#### Relations btw the Data Sources

_Complementary_: information provided by the input sources represents **different parts of the scene** and could be used to obtain more _complete_ global information.  
For example, in the case of visual sensor networks, the information on the same target provided by two cameras with **different fields of view** is considered complementary

_Redundant_: two or more input sources provide information about the same target and could thus be fused to **increment the confidence**.  
For example, the data coming from **overlapped areas** in visual sensor networks are considered redundant

_Cooperative_: the provided information is **combined into new information** that is typically more complex than the original information.  
For example, **multi-modal** (audio and video) data fusion is considered cooperative.

#### Dasarathy’s Classification

1. data in-data out (DAI-DAO): Data fusion at this level is conducted immediately after the data are gathered from the sensors. The algorithms employed at this level are based on signal and image processing algorithms.
2. data in-feature out (DAI-FEO): the data fusion process employs raw data from the sources to extract features or characteristics that describe an entity in the environment.
3. feature in-feature out (FEI-FEO): the data fusion process addresses a set of features with to improve, refine or obtain new features. This process is also known as feature fusion, symbolic fusion, information fusion or intermediate level fusion.
4. feature in-decision out (FEI-DEO): this level obtains a set of features as input and provides a set of decisions as output. Most of the classification systems that perform a decision based on a sensor’s inputs fall into this category of classification;
5. Decision In-Decision Out (DEI-DEO): This type of classification is also known as decision fusion. It fuses input decisions to obtain better or new decisions.

#### Abstraction Levels

1. signal level: directly addresses the signals that are acquired from the sensors;
2. pixel level: operates at the image level and could be used to improve image processing tasks;
3. characteristic: employs features that are extracted from the images or signals (i.e., shape or velocity),
4. symbol: at this level, information is represented as symbols; this level is also known as the decision level

Alternatively

1. low level fusion: the raw data are directly provided as an input to the data fusion process, which provide more accurate data (a lower signal-to-noise ratio) than the individual sources.
2. medium level fusion: characteristics or features (shape, texture, and position) are fused to obtain features that could be employed for other tasks. This level is also known as the feature or characteristic level;
3. high level fusion: this level, which is also known as decision fusion, takes symbolic representations as sources and combines them to obtain a more accurate decision. Bayesian’s methods are typically employed at this level;
4. multiple level fusion: this level addresses data provided from different levels of abstraction (i.e., when a measurement is combined with a feature to obtain a decision)

### Type of Architecture

- centralized
- decentralized
- distributed
- hierarchical

#### Centralized Architecture

in a centralized architecture, the fusion node resides in the central processor that receives the information from all of the input sources. All of the fusion processes are executed in a central processor that uses the provided raw measurements from the sources.

The sources obtain only the observations as measurements and transmit them to a central processor, where the data fusion process is performed.

If we assume that data alignment and data association are performed correctly and that the required time to transfer the data is not significant, then the centralized scheme is theoretically optimal. However, the assumptions typically do not hold for real systems.

- The large amount of bandwidth that is required to send raw data through the network is a disadvantage for the centralized approach.
- This issue becomes a bottleneck when this type of architecture is employed for fusing data in **visual sensor networks**.
- Finally, the time delays when transferring the information between the different sources are variable and affect the results in the centralized scheme to a greater degree than in other schemes

#### Decentralized Architecture

Composed of a network of nodes in which each node has its own processing capabilities and there is no single point of data fusion.

Each node fuses its local information with the information that is received from its peers. Data fusion is performed autonomously, with each node accounting for its local information and the information received from its peers.

The main disadvantage of this architecture is the communication cost, which is $O(n^2)$ at each communication step, where $n$ is the number of nodes additionally, the extreme case is considered, in which each node **communicates** with **all of its peers**.

Thus, this type of architecture could suffer from scalability problems when the number of nodes is increased.  
Alternatively fused information could not be available where it is needed.

#### Distributed Architecture

In a distributed architecture, measurements from each source node are processed independently before the information is sent to the fusion node.

The fusion node accounts for the information that is received from the other nodes. In other words, the data association and state estimation are performed in the source node before the information is communicated to the fusion node.

Therefore, each node provides an estimation of the object state based on only their local views, and this information is the input to the fusion process, which provides a fused global view.

This type of architecture provides different options and variations that range from only one fusion node to several intermediate fusion nodes.

#### Hierarchical Architecture

Hierarchical architectures often comprise a **combination of decentralized and distributed nodes**, generating hierarchical schemes in which the data fusion process is performed at different levels in the hierarchy.

Conclusion: in practice, there is **no single best architecture**, and the selection of the most appropriate architecture should be made depending on the **requirements, demand, existing networks, data availability, node processing capabilities, and organization** of the data fusion system.

### Data Fusion Functions

A number of subtasks are of high relevance for MSDF.

By splitting MSDF into these subtasks, they can be studied individually

Data Fusion functions include: Data Alignment, Data Association, State estimation, prediction, decision fusion

### Data Alignment

Detecting _temporal differences_, references and adjusting the collected data according to the detected references.

- Synchronize using shared time
- Synchronize via communication protocol
- Detect patterns, such as concurrency, among the generated streams
- Spatio-temporal, data normalization, evidence conditioning

#### Data Association

### State Estimation Methods

#### Kalman Filter

_Kalman filter_ is useful to deal with **uncertain information about a dynamic system**, when a **prediction** can be made about its **behavior**.

Advantage that they are **light on memory** (they don’t need to keep any history other than the **previous state**), and they are very **fast**, making them well suited for **real time problems** and embedded systems.

Disadvantages:

- limited to linear systems
- limited to uni-modal systems

$\vec{x_k}$: robot state, $\vec{p}$: robot position, $\vec{v}$: robot velocity

$$\vec{x_k} = (\vec{p}, \vec{v})$$

Kalman filter assumes both **state variables** (position and velocity, in our case) are random and **Gaussian distributed**. Each variable has a **mean value** $\mu$, which is the center of the random distribution (and its most likely state), and a variance $\sigma^2$.

A Kalman filter is an algorithm that we use to estimate the state of a system. It does this by combining a noisy measurement from a sensor with a flawed prediction from a process model. If the measurement noise can be modeled as a Gaussian distribution and the process model can be modeled as linear with a Gaussian error distribution, then a linear Kalman filter will produce an optimal state estimate. The optimal estimation turns out to be the product of the two Gaussian distributions. Therefore, the linear Kalman filter equations can be thought of as a prediction step plus Gaussian multiplication.

See more in [1](https://engineeringmedia.com/controlblog/the-kalman-filter) and [2](https://www.bzarg.com/p/how-a-kalman-filter-works-in-pictures)

#### Tracking

Reminder: Ideal tracking solutions depend on scenario properties, or appropriate simplifications:

Linear: Kalman Filter

Non-linear:

- Extended Kalman Filter (EKF)
- Unscented Kalman Filter (UKF)
- Particle Filter

Comparison between EKF & UKF
All Kalman filters have the same three steps:

- Initialization
- Prediction
- Update

A standard Kalman Filter can only handle linear models

Both the Extended Kalman Filter (EKF) and the Unscented Kalman Filter allow to use non-linear process and sensor models

The difference between EKF and UKF is how they handle non-linear equations:

- Extended Kalman Filter uses the **Jacobian matrix** to **linearize non-linear functions**
- Unscented Kalman Filter does not need to linearize non-linear functions
- It takes representative points from a **Gaussian distribution**

#### Extended Kalman Filter (EKF)

Non-linear version of the Kalman Filter

In engineering most systems are **non-linear**

Very common in the theory of _non-linear state estimation_, _navigation systems_ and _GPS_

The EKF adapts techniques from calculus (multi-variate Taylor Series)

Apply EKF to **track objects** based on **fused sensor data** (from LiDAR and radar). Objects can be pedestrians, vehicles or moving objects. Measure locations of tracked objects. Can **combine multiple types of measurements** to estimate the proper location of the object

Generally not an **optimal** estimator (linearization)
