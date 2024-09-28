## **Schema for `/station/{evaNo}`**

This API returns a timetable for a specific station identified by the EVA number. The response includes station information, messages, and a list of stops with detailed event data.

### **Top-Level Object**

| **Property** | **Type** | **Description**          |
| ------------ | -------- | ------------------------ |
| eva          | integer  | EVA station number.      |
| station      | string   | Station name.            |
| m            | array    | List of Messages.        |
| s            | array    | List of Timetable Stops. |

### **Property Details**

### **1. `eva`**

- **Type:** integer
- **Description:** EVA station number.

### **2. `station`**

- **Type:** string
- **Description:** Station name.

### **3. `m` (Messages)**

An array of message objects associated with events, stops, or trips.

#### **Message Object Structure**

| **Property** | **Type** | **Description**                                                                                                                                                                                                                                        |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id           | string   | Message ID.                                                                                                                                                                                                                                            |
| t            | string   | Message status. Possible values:<br>- **h**: HIM (Hafas Information Manager) message.<br>- **q**: Quality change message.<br>- **f**: Free text message.<br>- **d**: Cause of delay message.<br>- **i**: IBIS message.<br>- **r**: Disruption message. |
| ts           | string   | Timestamp in 'YYMMddHHmm' format, e.g., '1404011437'.                                                                                                                                                                                                  |
| cat          | string   | Category of the message.                                                                                                                                                                                                                               |
| pr           | string   | Priority of the message. Possible values:<br>- **1**: High<br>- **2**: Medium<br>- **3**: Low<br>- **4**: Done                                                                                                                                         |
| ext          | string   | External text of the message.                                                                                                                                                                                                                          |
| int          | string   | Internal text of the message.                                                                                                                                                                                                                          |
| ec           | string   | External category.                                                                                                                                                                                                                                     |
| elnk         | string   | External link associated with the message.                                                                                                                                                                                                             |
| from         | string   | Valid from timestamp in 'YYMMddHHmm' format.                                                                                                                                                                                                           |
| to           | string   | Valid to timestamp in 'YYMMddHHmm' format.                                                                                                                                                                                                             |
| o            | string   | Owner of the message.                                                                                                                                                                                                                                  |
| del          | integer  | Deleted flag.                                                                                                                                                                                                                                          |
| c            | integer  | Code.                                                                                                                                                                                                                                                  |
| dm           | array    | List of Distributor Messages.                                                                                                                                                                                                                          |
| tl           | array    | Trip Label(s).                                                                                                                                                                                                                                         |

#### **Distributor Message (`dm`) Structure**

| **Property** | **Type** | **Description**                                                                                                    |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------ |
| n            | string   | Distributor name.                                                                                                  |
| t            | string   | Distributor type. Possible values:<br>- **s**: CITY<br>- **r**: REGION<br>- **f**: LONG DISTANCE<br>- **x**: OTHER |
| ts           | string   | Timestamp in 'YYMMddHHmm' format.                                                                                  |
| int          | string   | Internal text.                                                                                                     |

#### **Trip Label (`tl`) Structure**

| **Property** | **Type** | **Description**                                                     |
| ------------ | -------- | ------------------------------------------------------------------- |
| c            | string   | Category (e.g., "ICE", "RE").                                       |
| n            | string   | Trip/train number (e.g., "4523").                                   |
| o            | string   | Owner. A unique short-form identifier for mapping to specific EVUs. |
| t            | string   | Trip type (e.g., "p", "e", "z").                                    |
| f            | string   | Filter flags.                                                       |

### **4. `s` (Timetable Stops)**

An array of stop objects, each representing a stop in the timetable.

#### **Stop Object Structure**

| **Property** | **Type** | **Description**                                                                 |
| ------------ | -------- | ------------------------------------------------------------------------------- |
| id           | string   | Unique identifier for the stop.                                                 |
| eva          | integer  | EVA station number of the stop.                                                 |
| tl           | object   | Trip Label (same structure as above).                                           |
| ar           | object   | Arrival event details.                                                          |
| dp           | object   | Departure event details.                                                        |
| m            | array    | List of Messages associated with the stop.                                      |
| conn         | array    | List of Connection elements.                                                    |
| hd           | array    | Historic delay elements.                                                        |
| hpc          | array    | Historic platform change elements.                                              |
| ref          | object   | Reference to another trip, including its label and reference trips.             |
| rtr          | array    | Reference trip relations, showing how a reference trip is related to this stop. |

#### **Arrival/Departure Event (`ar`/`dp`) Structure**

| **Property** | **Type** | **Description**                                                                              |
| ------------ | -------- | -------------------------------------------------------------------------------------------- | --- |
| pt           | string   | Planned time in 'YYMMddHHmm' format.                                                         |
| ct           | string   | Changed time (estimated or actual).                                                          |
| ps           | string   | Planned status.                                                                              |
| cs           | string   | Current status. Possible values:<br>- **p**: Planned<br>- **a**: Added<br>- **c**: Cancelled |
| pp           | string   | Planned platform.                                                                            |
| cp           | string   | Changed platform.                                                                            |
| ppth         | string   | Planned path (sequence of station names separated by '                                       | '). |
| cpth         | string   | Changed path.                                                                                |
| hi           | integer  | Hidden flag (1 if the event should not be shown to travelers).                               |
| l            | string   | Line indicator (e.g., "3" for an S-Bahn).                                                    |
| pde          | string   | Planned distant endpoint.                                                                    |
| cde          | string   | Changed distant endpoint.                                                                    |
| clt          | string   | Cancellation time in 'YYMMddHHmm' format.                                                    |
| m            | array    | List of Messages associated with the event.                                                  |
| dc           | integer  | Distant change.                                                                              |
| wings        | string   | Wings information (sequence of trip IDs separated by '                                       | '). |
| tra          | string   | Transition trip ID (next or previous train of a shared train).                               |

#### **Connection Element (`conn`) Structure**

| **Property** | **Type** | **Description**                                                                                                    |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------ |
| id           | string   | Identifier for the connection.                                                                                     |
| cs           | string   | Connection status. Possible values:<br>- **w**: Waiting<br>- **n**: Cannot wait<br>- **a**: Alternative connection |
| ts           | string   | Timestamp in 'YYMMddHHmm' format.                                                                                  |
| eva          | integer  | EVA station number.                                                                                                |
| s            | object   | Stop object representing the connection (same structure as the main stop object).                                  |
| ref          | object   | Reference to another stop (same structure as the main stop object).                                                |
