## **Schema for `/station/{pattern}`**

This API returns a list of stations matching a given pattern, along with additional data for each station.

### **Top-Level Object**

| **Property** | **Type** | **Description**                        |
| ------------ | -------- | -------------------------------------- |
| station      | array    | List of stations with additional data. |

### **Station Object Structure**

| **Property** | **Type** | **Description**                                      |
| ------------ | -------- | ---------------------------------------------------- | --- |
| eva          | integer  | EVA station number.                                  |
| name         | string   | Station name.                                        |
| ds100        | string   | DS100 station code.                                  |
| meta         | string   | Meta stations (sequence of names separated by '      | '). |
| p            | string   | Platforms (sequence of platform names separated by ' | '). |

### **Property Details**

#### **1. `eva`**

- **Type:** integer
- **Description:** EVA station number.

#### **2. `name`**

- **Type:** string
- **Description:** Station name.

#### **3. `ds100`**

- **Type:** string
- **Description:** DS100 station code.

#### **4. `meta`**

- **Type:** string
- **Description:** Meta stations associated with this station. The names are separated by the pipe symbol '|'.

#### **5. `p`**

- **Type:** string
- **Description:** List of platforms available at the station. The platforms are separated by the pipe symbol '|'.
